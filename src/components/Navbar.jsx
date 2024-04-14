import React from "react";
import NavbarItems from "./NavbarItems";

export default function Navbar() {
  return (
    <div className="flex justify-center  gap-4 dark:bg-gray-600 py-2  bg-amber-200 lg:text-lg ">
      <NavbarItems title="Trending" parameter="fetchTending" />
      <NavbarItems title="Top Rated" parameter="fetchTopRating" />
      <NavbarItems />
    </div>
  );
}
