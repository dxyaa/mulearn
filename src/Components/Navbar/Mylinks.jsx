export const links = [
  {
    name: "About",
    submenu: true,
    sublinks: [
      {
        Head: "The Team",
        sublink: [
          { name: "Our Team", link: "/team" },
          // { name: "Executive Committe", link: "/team/execom" },
          // { name: "YIP Team", link: "/team/yip" },
          // { name: "Community Team", link: "/team/community" },
          // {
          //   name: "Tech Team",
          //   link: "/team/tech",
          // },
        ],
      },
      {
        Head: "Partners",
        sublink: [
          { name: "Community Partners", link: "/community-partners" },
          { name: "Company Partners", link: "/company-partners" },
        ],
      },
      {
        Head: "Media",
        sublink: [
          {
            name: "Gallery",
            link: "/gallery",
          },
          // {
          //   name: "News",
          //   link: "/news",
          // },
          {
            name: "Leaderboard",
            link: "/leaderboard",
          },
        ],
      },
      {
        Head: "Campus Chapters",
        sublink: [
          {
            name: "Home Page",
            link: "/campuschapters",
          },
        ],
      },
    ],
  },
  {
    name: "Programs",
    submenu: true,
    sublinks: [
      {
        Head: "Flagship",
        sublink: [
          { name: "YIP 2021", link: "/yip" },
          {
            name: "Foundation Program",
            link: "https://foundation.mulearn.org",
            foreign: true,
          },
        ],
      },
      {
        Head: "Ongoing",
        sublink: [
          { name: "Art of Teaching", link: "/artofteaching" },
          { name: "Hacktober Fest", link: "/hacktoberfest" },
        ],
      },
      {
        Head: "Others",
        sublink: [{ name: "Wiki Syllabus", link: "/wikisyllabus" }],
      },
    ],
  },
  {
    name: "Events Page",
    submenu: true,
    sublinks: [
      {
        Head: "Global Calendar",
        sublink: [{ name: "Calendar", link: "/calendar" }],
      },
      {
        Head: "Announcements",
        sublink: [{ name: "Announcements", link: "/announcements" }],
      },
      {
        Head: "Weekly Events",
        sublink: [{ name: "Inspiration Station", link: "/isr" }],
      },
    ],
  },
  {
    name: "Interest Group",
    submenu: true,
    sublinks: [
      {
        Head: "Home Page",
        sublink: [
          {
            foreign: true,
            name: "Home",
            link: "https://learn.mulearn.org/",
          },
        ],
      },
      {
        Head: "Search",
        sublink: [
          {
            foreign: true,
            name: "Mentor Directory",
            link: "https://learn.mulearn.org/mentors",
          },
          {
            foreign: true,
            name: "Existing Circles",
            link: "https://learn.mulearn.org/searchcircles",
          },
        ],
      },
      {
        Head: "Practice",
        sublink: [
          {
            foreign: true,
            name: "Problem Shelf",
            link: "https://learn.mulearn.org/problemshelves",
          },
          {
            foreign: true,
            name: "Challenges",
            link: "https://learn.mulearn.org/challenges",
          },
          {
            foreign: true,
            name: "Courses",
            link: "https://learn.mulearn.org/courses",
          },
        ],
      },
      {
        Head: "Interest Groups",
        sublink: [
          {
            foreign: true,
            name: "Web Development",
            link: "https://learn.mulearn.org/web",
          },
          {
            foreign: true,
            name: "Android Development",
            link: "https://learn.mulearn.org/android",
          },
          {
            foreign: true,
            name: "UI / UX",
            link: "https://learn.mulearn.org/uiux",
          },
          {
            foreign: true,
            name: "Product Management",
            link: "https://learn.mulearn.org/pm",
          },
          {
            foreign: true,
            name: "IoT",
            link: "https://learn.mulearn.org/iot",
          },
          {
            foreign: true,
            name: "Cyber Security",
            link: "https://learn.mulearn.org/cybersec",
          },
        ],
      },
    ],
  },
];
