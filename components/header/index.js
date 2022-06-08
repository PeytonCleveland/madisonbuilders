import Image from "next/image";
import HeaderLink from "../header-link";

import { useState } from "react";

const links = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Work", href: "/work" }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navStyle = isOpen
    ? "opacity-100 flex w-screen h-screen bg-indigo-100 absolute top-0 left-0 z-50 transition-all duration-500 ease-in-out"
    : "opacity-0 flex w-screen h-screen bg-indigo-100 absolute top-0 left-0 -z-10 transition-all duration-500 ease-in-out";
  return (
    <header className="container flex w-full h-20 justify-between items-center">
      <div className="flex">
        <Image
          src="/madison-builders.png"
          alt="Madison Builders Logo"
          width={47}
          height={38}
        />
        <div className="hidden md:flex">
          {links.map((link) => (
            <HeaderLink key={link.text} {...link} />
          ))}
        </div>
      </div>
      <div className="hidden md:flex items-center">
        <HeaderLink text="Sign In" href="/sign-in" active />
        <button className="bg-indigo-900 text-white px-5 py-[5px] font-semibold text-lg rounded ml-12 hover:bg-indigo-800 hover:scale-105 duration-150">
          Let&apos;s Talk
        </button>
      </div>
      <button
        className="flex items-center text-indigo-900 border border-gray-300 rounded px-[1px] active:border-indigo-900 active:bg-indigo-100  md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div className={navStyle}>hello</div>
    </header>
  );
};

export default Header;
