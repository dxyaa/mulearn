import { AxiosError, AxiosRequestConfig } from "axios";
import { privateGateway } from "@/MuLearnServices/apiGateways";
import { ManageLocationsRoutes } from "@/MuLearnServices/urls";
import { ToastId, UseToastOptions } from "@chakra-ui/toast";

//*WORKING✅
export const getDistrictData = async (
    country: string,
    state: string,
    zone: string,
    setData: UseStateFunc<any>,
    setTotalPages?: UseStateFunc<any>
) => {
    try {
        await privateGateway
            .get(ManageLocationsRoutes.getDistrictData.replace("${zone}", zone))
            .then(({ data }) => data.response)
            .then(({ data }) => {
                setData(data);
            });
    } catch (err: unknown) {
        const error = err as AxiosError;
    }
};

//*WORKING ✅
export const postDistrictData = async (zone: string, stateName: string) => {
    try {
        await privateGateway
            .post(
                ManageLocationsRoutes.patchDistrictData.replace(
                    "${district}/",
                    ""
                ),
                {
                    zone: zone,
                    name: stateName
                }
            )
            .then(({ data }) => data.response)
            .then(({ data }) => {});
    } catch (err: unknown) {
        const error = err as AxiosError;
        if (error?.response) {
            console.log(error.response);
        }
    }
};

//*WORKING ✅
export const patchDistrictData = async (
    zone: string,
    district: string,
    newName: string
) => {
    try {
        await privateGateway
            .patch(
                ManageLocationsRoutes.patchDistrictData.replace(
                    "${district}",
                    district
                ),
                {
                    zone: zone,
                    id: district,
                    name: newName
                }
            )
            .then(({ data }) => data.response)
            .then(({ data }) => {});
    } catch (err: unknown) {
        const error = err as AxiosError;
        if (error?.response) {
            console.log(error.response);
        }
    }
};

//* WORKING ✅
export const deleteDistrictData = async (districtID: string) => {
    try {
        await privateGateway
            .delete(
                ManageLocationsRoutes.patchDistrictData.replace(
                    "${district}",
                    districtID
                )
            )
            .then(({ data }) => data.response)
            .then(({ data }) => {
                window.location.reload(); // TODO: Temporary fix, better solution needed (delete takes time, API fetch after delete doesnt give the omitted data)
            });
    } catch (err: unknown) {
        const error = err as AxiosError;
        if (error?.response) {
            console.log(error.response);
        }
    }
};
