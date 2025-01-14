import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About us",
    newTab: false,
    path: "/about",
  },
  {
    id: 3,
    title: "Boot Cap",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Self Paced",
        newTab: false,
        path: "/self-paced",
      },
      {
        id: 32,
        title: "Mentor Led",
        newTab: false,
        path: "/mentor-led",
      }
    ]
    // submenu: [
    //   {
    //     id: 31,
    //     title: "Blog Grid",
    //     newTab: false,
    //     path: "/blog",
    //   },
    //   {
    //     id: 34,
    //     title: "Sign In",
    //     newTab: false,
    //     path: "/auth/signin",
    //   },
    //   {
    //     id: 35,
    //     title: "Sign Up",
    //     newTab: false,
    //     path: "/auth/signup",
    //   },
    //   {
    //     id: 35,
    //     title: "Docs",
    //     newTab: false,
    //     path: "/docs",
    //   },
    //   {
    //     id: 35.1,
    //     title: "Support",
    //     newTab: false,
    //     path: "/support",
    //   },
    //   {
    //     id: 36,
    //     title: "404",
    //     newTab: false,
    //     path: "/error",
    //   },
    // ],
  },
  {
    id: 4,
    title: "Pre-Registration",
    newTab: false,
    path: "/pre-registration",
  },
  {
    id: 2.3,
    title: "Professional Advancement Series",
    newTab: false,
    path: "/docs",
  },


  {
    id: 4,
    title: "Pro Picks",
    newTab: false,
    path: "/support",
  },
  {
    id: 5,
    title: "Contact Us",
    newTab: false,
    path: "/contact-us",
  },
];

export default menuData;
