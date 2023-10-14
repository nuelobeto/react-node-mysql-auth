import { BiPieChartAlt2 } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import {
  HiOutlineChartSquareBar,
  HiOutlineCog,
  HiOutlineSupport,
} from "react-icons/hi";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { RiHome6Line, RiStackLine } from "react-icons/ri";

export const navlinks1 = [
  {
    url: "/home",
    icon: <RiHome6Line className="text-[25px] text-text_quarterary_500" />,
    text: "Home",
  },
  {
    url: "/dashboard",
    icon: (
      <HiOutlineChartSquareBar className="text-[25px] text-text_quarterary_500" />
    ),
    text: "Dashboard",
  },
  {
    url: "/projects",
    icon: <RiStackLine className="text-[25px] text-text_quarterary_500" />,
    text: "Projects",
  },
  {
    url: "/tasks",
    icon: (
      <MdOutlineLibraryAddCheck className="text-[25px] text-text_quarterary_500" />
    ),
    text: "Tasks",
  },
  {
    url: "/reporting",
    icon: <BiPieChartAlt2 className="text-[25px] text-text_quarterary_500" />,
    text: "Reporting",
  },
  {
    url: "/users",
    icon: <FiUsers className="text-[25px] text-text_quarterary_500" />,
    text: "Users",
  },
];
export const navlinks2 = [
  {
    url: "/support",
    icon: <HiOutlineSupport className="text-[25px] text-text_quarterary_500" />,
    text: "Support",
  },
  {
    url: "/settings",
    icon: <HiOutlineCog className="text-[25px] text-text_quarterary_500" />,
    text: "Settings",
  },
];
