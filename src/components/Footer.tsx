import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.svg";

const Footer = () => {
  return (
    <div className="bg-naama-blue-200 text-naama-ivory-100 w-full items-center justify-center border p-10">
      <div className="grid grid-cols-5 gap-4">
        <div className="flex justify-center">
          <Image src={logo} alt="Naama Logo" width={150} height={150} />
        </div>
        <div className="mr-10 flex flex-col gap-2">
          <p className="font-bold">NAAMA UCR</p>
          <p>
            Thanks for being part of our NAAMA community! Check out our links to
            stay connected and support your journey in healthcare.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <p className="font-bold">UCR Chapter</p>
          <div className="flex flex-col gap-2">
            <Link href="/">Home</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Contact Info</Link>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <p className="font-bold">Important Links</p>
          <div className="flex flex-col gap-2">
            <Link href="/">Membership Form</Link>
            <Link href="/">Event Calendar</Link>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <p className="font-bold">Social Media</p>
          <div className="flex flex-col gap-2">
            <Link href="/">Instagram</Link>
            <Link href="/">Linktree</Link>
          </div>
        </div>
      </div>
      <div className="bg-naama-ivory-100 mt-4 h-0.5 w-full"></div>
    </div>
  );
};

export default Footer;
