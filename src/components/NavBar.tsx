"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";
import logo from "@/../public/logo.svg";
import { Links } from "../data/links";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-2 grid-cols-3 place-items-center font-bold md:grid md:w-full">
      <div className="m-2 hidden md:block">
        <Link href="/">
          <Image
            src={logo}
            alt="Naama Logo"
            width={75}
            height={75}
            draggable={false}
          />
        </Link>
      </div>
      <div className="font-playfair text-naama-blue-200 hidden gap-x-12 rounded-full bg-white px-10 py-2 text-lg opacity-75 md:flex">
        {Links.map(({ label, href }) => (
          <Link key={label} href={href}>
            {label}
          </Link>
        ))}
      </div>

      <div
        className={`${isOpen ? "w-1/4 rounded-tr-lg" : "w-fit rounded-r-lg"} relative bg-white/75 md:hidden`}
      >
        {/* Toggle button: always visible and on top */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaXmark size={30} /> : <FaBars size={30} />}
        </button>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="font-playfair absolute z-40 flex w-full flex-col gap-y-4 rounded-b-lg bg-white/75 p-4 font-bold shadow-lg">
            <Link
              key="Home"
              href="/"
              onClick={() => setIsOpen(false)}
              className="w-fit"
            >
              Home
            </Link>
            {Links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className="w-fit"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
