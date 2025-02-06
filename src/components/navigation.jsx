"use client";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div
      id="nav"
      className="flex h-16 text-xl background-black text-white justify-around items-center border-white border-b"
    >
      <p className="text-3xl hidden sm:inline">DEAN LAURO</p>
      <a
        href="/"
        className={"mr-8 hover:underline " + (pathname == "/" && "underline")}
      >
        Home
      </a>
      <a
        href="/portfolio"
        className={
          "mr-8 hover:underline " + (pathname == "/portfolio" && "underline")
        }
      >
        Portfolio
      </a>
      <a
        href="/about"
        className={
          "mr-8 hover:underline " + (pathname == "/about" && "underline")
        }
      >
        About
      </a>
      <a
        href="/contact"
        className={
          "mr-8 hover:underline " + (pathname == "/contact" && "underline")
        }
      >
        Contact
      </a>
    </div>
  );
}
