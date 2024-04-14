"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItems({ title, parameter }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div className="tracking-tighter  pointer">
      <Link
        className={`hover:text-green-500 ${
          genre == parameter
            ? "underline underline-offset-8 decoration-4 decoration-green-400 rounded-lg"
            : ""
        } `}
        href={`/?genre=${parameter}`}
      >
        {title}
      </Link>
    </div>
  );
}
