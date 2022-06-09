import Image from "next/image";
import HeaderLink from "../header-link";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";

const links = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Process", href: "/process" },
  { text: "Work", href: "/work" }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const path = router.pathname;
  useEffect(() => {
    setIsOpen(false);
  }, [path]);
  const navStyle = isOpen
    ? "opacity-100 flex flex-col w-screen h-screen bg-indigo-100 absolute top-0 left-0 z-50 transition-all duration-500 ease-in-out p-4 pt-[21px]"
    : "opacity-0 flex flex-col w-screen h-screen bg-indigo-100 absolute -top-[900px] left-0 -z-10 transition-all duration-500 ease-in-out p-4 pt-[21px]";
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
        className="flex items-center text-indigo-900 border border-gray-300 rounded px-[1px] active:border-indigo-900 active:bg-indigo-100  md:hidden transition-all duration-500 ease-in-out"
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
      <div className={navStyle}>
        <div className="flex w-full h-[38px] justify-between">
          <Image
            src="/madison-builders.png"
            alt="Madison Builders Logo"
            width={47}
            height={38}
          />
          <button
            className="flex items-center text-indigo-900 border border-gray-300 rounded px-[1px] active:border-indigo-900 active:bg-indigo-100  md:hidden transition-all duration-500 ease-in-out"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col w-full h-full items-start mt-14">
          {links.map((link) => (
            <HeaderLink key={link.text} {...link} mobile />
          ))}
          <button className="w-full border-2 border-indigo-900 text-indigo-900 text-2xl font-regular rounded-md py-2 mb-4">
            Client portal
          </button>
          <button className="w-full bg-indigo-900 text-white text-2xl font-regular rounded-md py-[9px]">
            Let&apos;s talk
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
