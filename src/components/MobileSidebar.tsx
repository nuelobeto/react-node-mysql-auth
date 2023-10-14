import { RiSearchLine, RiCloseFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { navlinks1, navlinks2 } from "../utils/links";
import { MdKeyboardArrowDown, MdLogout } from "react-icons/md";
import useAuth from "../store/useAuth";
import { USER6 } from "../assets/images";
import { useEffect, useState } from "react";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileSidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const { user, logout } = useAuth((state) => state);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (user) {
      setUsername(user.email.split("@")[0]);
    }
  }, [user]);

  return (
    <div
      className={`mobile-sidebar fixed top-0 right-0 max-w-[312px] w-full h-screen bg-bg_pry z-20 shadow-xl flex flex-col justify-between gap-[5rem] py-[32px] px-[20px] pt-[9vh] overflow-auto hide-scroll transition-all duration-[0.3s] ${
        !isOpen ? "translate-x-[100%]" : "translate-x-0"
      }`}
    >
      <div className="w-full h-[8vh] absolute top-0 left-0 flex items-center justify-end px-[20px]">
        <RiCloseFill
          className="text-[25px] text-text_sec cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      </div>

      <div className="flex flex-col gap-[24px]">
        <div className="mobile-search rounded-[8px] flex items-center gap-[8px] border border-border_pry overflow-clip px-[14px]">
          <RiSearchLine className="text-text_placeholder text-[20px] cursor-pointer" />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-[44px] border border-transparent text-text_sec placeholder:text-text_placeholder font-[400] text-[16px] leading-[24px] bg-transparent outline-none"
          />
        </div>

        <nav className="mobile-navigation flex flex-col gap-[4px]">
          {navlinks1.map((link, index) => (
            <NavLink
              key={index}
              to={link.url}
              className="flex items-center justify-between py-[8px] rounded-[8px]"
            >
              <div className="flex items-center gap-[12px]">
                {link.icon}
                <span className="font-[600] text-[16px] leading-[24px] text-text_sec">
                  {link.text}
                </span>
              </div>
              <MdKeyboardArrowDown className="text-[25px] text-text_quarterary_500" />
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-[24px]">
        <nav className="flex flex-col gap-[4px]">
          {navlinks2.map((link, index) => (
            <NavLink
              key={index}
              to={link.url}
              className="flex items-center justify-between py-[8px] rounded-[8px]"
            >
              <div className="flex items-center gap-[12px]">
                {link.icon}
                <span className="font-[600] text-[16px] leading-[24px] text-text_sec">
                  {link.text}
                </span>
              </div>
            </NavLink>
          ))}
          <button
            className="mobile-logout-btn flex items-center gap-[12px] py-[8px] rounded-[8px] active:bg-border_secondary relative font-[600] text-[16px] leading-[24px] text-text_sec"
            onClick={logout}
          >
            <MdLogout className="text-[25px] text-text_quarterary_500" />
            <span>Logout</span>
          </button>
        </nav>

        <div className="mobile-account flex items-center gap-[12px]">
          <img
            src={USER6}
            alt=""
            className="w-[40px] h-[40px] block rounded-full object-cover cursor-pointer"
          />
          <div className="flex flex-col cursor-pointer">
            <p className="font-[600] text-[14px] leading-[20px] text-text_sec">
              {username}
            </p>
            <p className="font-[400] text-[14px] leading-[20px] text-text_tertiary">
              {user?.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
