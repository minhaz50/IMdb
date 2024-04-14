"use client";
import { CgDarkMode } from "react-icons/cg";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {currentTheme === "dark" ? (
        <MdLightMode
          className="text-2xl cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <CgDarkMode
          className="text-2xl cursor-pointer text"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}
