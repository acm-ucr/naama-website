"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FaBars, FaXmark } from "react-icons/fa6";
import logo from "@/public/logo.svg";
import { Links } from "@/data/links";

const animationProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.9, ease: "easeOut" },
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname().replace(/^\/+/, "");

  return (
    <motion.div
      {...animationProps}
      className="sticky top-0 z-2 flex flex-row-reverse font-bold md:relative md:grid md:w-full md:grid-cols-3 md:place-items-center"
    >
      <Link href="/" className="m-8 hidden place-self-start md:block">
        <Image src={logo} alt="Naama Logo" className="w-1/2" />
      </Link>
      <div className="font-playfair text-naama-blue-200 hidden gap-x-12 rounded-full bg-white px-10 py-2 text-lg opacity-75 md:flex">
        {Links.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={`transition-all ease-in underline-offset-4 ${pathname == label.toLowerCase() ? "underline" : "hover:underline hover:opacity-75 duration-100 hover:scale-110"}`}
          >
            {label}
          </Link>
        ))}
      </div>

      <div
        className={`${isOpen ? "overflow-auto h-screen flex w-full flex-col items-end rounded-b-lg" : "w-fit rounded-bl-lg"} bg-naama-ivory-100 sticky top-0 right-0 z-50 md:hidden`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <FaXmark size={30} className="text-naama-blue-200 hover:scale-105 transition-all" />
          ) : (
            <FaBars size={30} className="text-naama-blue-200 hover:scale-105 transition-all" />
          )}
        </button>

        {isOpen && (
          <div className="font-playfair text-naama-blue-200 bg-naama-ivory-100 z-40 flex w-full flex-col items-end gap-y-4 rounded-b-lg p-4 font-bold shadow-lg">
            <Link
              key="Home"
              href="/"
              onClick={() => setIsOpen(false)}
              className={`${pathname == "" ? "underline" : "transition-all hover:underline hover:scale-105 hover:opacity-75"}`}
            >
              Home
            </Link>
            {Links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`${pathname == label.toLowerCase() ? "underline" : "transition-all hover:underline hover:scale-105 hover:opacity-75"}`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default NavBar;
