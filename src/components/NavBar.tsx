import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.svg";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 grid w-full grid-cols-3 place-items-center font-bold">
      <div className="m-8">
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
      <div className="font-playfair text-naama-blue-200 flex gap-x-12 rounded-full bg-white px-10 py-2 text-lg opacity-75">
        <Link href="/about">About</Link>
        <Link href="/calendar">Calendar</Link>
        <Link href="/board">Board</Link>
        <Link href="/gallery">Gallery</Link>
      </div>
    </div>
  );
};

export default NavBar;
