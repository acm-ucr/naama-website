import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.svg";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandLinktree } from "react-icons/tb";
import { FaWpforms } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


const Footer = () => {
  return (
    <div className="bg-naama-blue-200 text-naama-ivory-100 font-nunito w-full items-center justify-center p-10">
      <div className="flex flex-col md:grid grid-cols-5 gap-4">
        <div className="flex justify-center md:border-0 border-t-2 border-naama-ivory-100 pt-4 md:pt-0">
          <Image
            src={logo}
            alt="Naama Logo"
            draggable={false}
            className="h-20 w-20 md:h-[150px] md:w-[150px]"
          />
        </div>
        <div className="md:mr-10 flex flex-col gap-2 ">
          <p className="font-bold hidden md:block">NAAMA UCR</p>
          <p className="hidden md:block">
            Thanks for being part of our NAAMA community! Check out our links to
            stay connected and support your journey in healthcare.
          </p>
        </div>
        <div className="hidden md:flex justify-center gap-4">
          <p className="font-bold">UCR Chapter</p>
          <div className="flex flex-col gap-2">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/" target="_blank">Contact Info</Link>
          </div>
        </div>
        <div className="hidden md:flex justify-center gap-4">
          <p className="font-bold">Important Links</p>
          <div className="flex flex-col gap-2">
            <Link href="https://naamanextgen.com/" target="_blank">Membership Form</Link>
            <Link href="/calendar">Event Calendar</Link>
          </div>
        </div>
        <div className="hidden md:flex justify-center gap-4">
          <p className="font-bold">Social Media</p>
          <div className="flex flex-col gap-2">
            <Link href="https://www.instagram.com/naamaucr" target="_blank">Instagram</Link>
            <Link href="https://linktr.ee/naamaucr" target="_blank">Linktree</Link>
          </div>
        </div>
        <div className="flex flex-row md:hidden justify-center gap-4">
          <Link href="https://www.instagram.com/naamaucr" target="_blank">
            <FaInstagram className="stroke-1" size={40} />
          </Link>
          <Link href="https://linktr.ee/naamaucr" target="_blank">
            <TbBrandLinktree className="stroke-2" size={40} />
          </Link>
          <Link href="https://naamanextgen.com/" target="_blank">
            <FaWpforms className="stroke-1" size={40} />
          </Link>
          <Link href="https://linktr.ee/naamaucr" target="_blank">
            <CiMail className="stroke-1" size={40} />
          </Link>
        </div>
      </div>
      <div className="hidden md:flex bg-naama-ivory-100 mt-8 h-0.5 w-full" />
    </div>
  );
};

export default Footer;
