import React, { useState } from "react";
import logo from "./../assets/Images/logo.png";
import profileLogo from "./../assets/Images/profileLogo.jpeg";

import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import { BiSolidCategory } from "react-icons/bi";
import HeaderItem from "./HeaderItem";

function Header() {
  const [Toggle,setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "CATEGORY",
      icon: BiSolidCategory,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex items-center justify-between p-2 ">
      <div className="flex items-center gap-8 ml-2">
        <img
          src={logo}
          alt=""
          className="w-[80px] md:w-[110px] object-cover ml-2 mr-3 "
        />
        <div className=" hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="md:hidden flex items-center gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />
          )}
        </div>
        <div className="md:hidden" onClick={()=>setToggle(!Toggle)}>
          <HeaderItem name={""} Icon={HiDotsVertical} />
          {Toggle ? <div className="absolute mt-2 bg-[#222838] border-[1px] border-gray-600 p-3  ">
            {menu.map(
              (item, index) =>
                index > 2 && <HeaderItem name={item.name} Icon={item.icon} />
            )}
          </div>:null}
        </div>
      </div>
      <img
        src={profileLogo}
        alt=""
        className="w-[40px] h-[40px] object-cover rounded-full mr-2"
      />
      
    </div>
  );
}

export default Header;
