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
    path: "/professional-advancement-series",
  },


  {
    id: 4,
    title: "Pro Picks",
    newTab: false,
    path: "/pro-picks",
  },
  {
    id: 5,
    title: "Contact Us",
    newTab: false,
    path: "/contact-us",
  },
];

export default menuData;
