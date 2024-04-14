import React from "react";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { FaInfoCircle } from "react-icons/fa";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className=" flex justify-between items-center max-w-6xl mx-auto ">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={FaInfoCircle} />
      </div>
      <div className="flex items-center">
        <DarkModeSwitch />
        <Link href={"/"} className="items-center sm:m-4">
          <span className="text-2xl font-bold bg-amber-500 rounded px-1.5">
            IMDb
          </span>
          <span className="text-sm hidden sm:inline px-1 ">
            <span className="font-bold text-green-600  font-serif ">Cl</span>
            one
          </span>
        </Link>
      </div>
    </div>
  );
}
