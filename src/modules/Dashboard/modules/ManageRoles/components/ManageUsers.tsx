import { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import mustyles from "@/MuLearnComponents/MuButtons/MuButton.module.css";
import toast from "react-hot-toast"
import * as Yup from "yup";
import { Formik, Form } from "formik";
import {
    MuButton,
    PowerfulButton
} from "@/MuLearnComponents/MuButtons/MuButton";
import FormikReactSelect from "@/MuLearnComponents/FormikComponents/FormikComponents";
import { addUsers, deleteUser, getUser } from "../apis";
import { AiOutlineDelete } from "react-icons/ai";
import { Option } from "@/MuLearnComponents/FormikComponents/FormikComponents";
import { roles } from "@/MuLearnServices/types";
import { style } from "d3";
import { BiUserMinus, BiUserPlus } from "react-icons/bi";

export type role = {
    title: string;
    id: string;
};
export type roleUsers = {
    value: string;
    label: string;
};
type Props = {
    onClose: any;
    roles: role[];
};

const ManageUsers = (props: Props) => {
    const [selectedUsers, setSelectedUsers] = useState<roleUsers[]>([]);
    const [unselectedUsers, setUnselectedUsers] = useState<roleUsers[]>([]);
    const [currRole, setCurrRole] = useState<role>({
        title: "",
        id: ""
    });
    const [mode, setMode] = useState<"add" | "remove">("remove");

    const errorHandler = (msg:string)=>{
        toast.error(msg)
    }
    const successHandler = (msg:string)=>{
        toast.success(msg)
    }
    const handleUserDelete = async (userId: string) => {
        deleteUser(userId,currRole.id,errorHandler,successHandler)
        setSelectedUsers(users=>users.filter(user=>user.value!==userId))
    };

    useEffect(() => {
        (async () => {
            if (!!currRole.id) {
                if (mode === "remove")
                    setSelectedUsers((await getUser(currRole.id)) ?? []);
                if (mode === "add")
                    setUnselectedUsers(
                        (await getUser(currRole.id, false)) ?? []
                    );
            }
        })();
    }, [currRole, mode]);

    return (
        <Formik
            enableReinitialize={true}
            initialValues={{
                users: [],
                role: ""
            }}
            onSubmit={values => {
                addUsers(values.users, values.role,errorHandler,successHandler);
                props.onClose(null);
            }}
            validationSchema={Yup.object({
                role: Yup.string().required("Role required"),
                users: Yup.array().required("users required")
            })}
        >
            <Form className={styles.Form}>
                <div className={styles.flex}>
                    <FormikReactSelect
                        name="role"
                        options={props.roles.map(obj => {
                            return { label: obj.title, value: obj.id };
                        })}
                        label=""
                        placeholder="Select the role"
                        isClearable
                        isSearchable
                        maxMenuHeight={200}
                        addOnChange={(obj: Option) => {
                            if (obj)
                                setCurrRole({
                                    title: obj.label,
                                    id: obj.value.toString()
                                });
                            else setCurrRole({ title: "", id: "" });
                        }}
                    />
                    <button
                        className={`${styles.modeBtn}`}
                        type="button"
                        onClick={() =>
                            setMode(mode === "remove" ? "add":"remove")
                        }
                        title={mode === "add" ? "Remove Users":"Add Users"}
                    >
                        {mode == "remove" ? (
                            <BiUserPlus size={28} />
                        ) : (
                            <BiUserMinus size={28} />
                        )}
                    </button>
                </div>
                {mode === "remove" ? (
                    !!currRole.id && (
                        <ul className={styles.userList}>
                            {selectedUsers.map(user => (
                                <li>
                                    <span>
                                        {`${user.label.substring(0, 10)}
                                        ${user.label.length > 10 ? "..." : ""}`}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleUserDelete(user.value)
                                        }
                                        className={styles.deleteBtn}
                                    >
                                        <AiOutlineDelete />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )
                ) : (
                    <FormikReactSelect
                        name="users"
                        options={unselectedUsers!
                            .filter(
                                (
                                    obj //remove selected users ie users of currRole
                                ) =>
                                    !selectedUsers
                                        .map(user => user.value)
                                        .includes(obj.value)
                            )
                            .map(obj => {
                                return { value: obj.value, label: obj.label };
                            })}
                        label=""
                        placeholder="Select the users to be added"
                        maxMenuHeight={150}
                        isClearable
                        isSearchable
                        isMulti
                        isDisabled={!currRole.id}
                    />
                )}

                <div className={styles.ButtonContainer}>
                    <PowerfulButton
                        type="button"
                        className={`${mustyles.btn} ${styles.Decline}`}
                        onClick={() => {
                            props.onClose(null);
                        }}
                    >
                        Close
                    </PowerfulButton>
                    {mode==='add'&&<PowerfulButton
                        className={`${mustyles.btn} ${styles.Confirm}`}
                        type="submit"
                        disabled={!currRole.id}
                    >
                        Add Users
                    </PowerfulButton>}
                </div>
                <span className={styles.note}>
                    Submission is not required for user deletion
                </span>
            </Form>
        </Formik>
    );
};

export default ManageUsers;
