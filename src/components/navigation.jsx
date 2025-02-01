"use client";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div
      id="nav"
      className="flex h-16 text-xl background-black text-white justify-around items-center border-white border-b"
    >
      <p className="text-3xl">DEAN LAURO</p>
      <a href="/" className={"mr-8 " + (pathname == "/" && "underline")}>
        Home
      </a>
      <a
        href="/portfolio"
        className={"mr-8 " + (pathname == "/portfolio" && "underline")}
      >
        Portfolio
      </a>
      <a
        href="/about"
        className={"mr-8 " + (pathname == "/about" && "underline")}
      >
        About
      </a>
      <a
        href="/contact"
        className={"mr-8 " + (pathname == "/contact" && "underline")}
      >
        Contact
      </a>
    </div>
  );
}
