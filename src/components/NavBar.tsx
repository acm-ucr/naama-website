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
    <div className="sticky top-0 z-2 flex flex-row-reverse font-bold md:relative md:grid md:w-full md:grid-cols-3 md:place-items-center">
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
        className={`${isOpen ? "flex w-full flex-col items-end rounded-t-lg" : "w-fit rounded-l-lg"} bg-naama-ivory-100 sticky top-0 right-0 z-50 md:hidden`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <FaXmark size={30} className="text-naama-blue-200" />
          ) : (
            <FaBars size={30} className="text-naama-blue-200" />
          )}
        </button>

        {isOpen && (
          <div className="font-playfair text-naama-blue-200 bg-naama-ivory-100 z-40 flex w-full flex-col items-end gap-y-4 rounded-b-lg p-4 font-bold shadow-lg">
            <Link key="Home" href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            {Links.map(({ label, href }) => (
              <Link key={label} href={href} onClick={() => setIsOpen(false)}>
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
