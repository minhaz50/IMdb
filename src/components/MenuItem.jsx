import React from "react";
import Link from "next/link";
export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address}>
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-sm hover:tracking-wider hover:text-green-500 px-2 py-1   ">
        {title}
      </p>
    </Link>
  );
}
