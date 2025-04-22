import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

const Button = ({ message, href }: { message: string; href: string }) => {
  return (
    <Link
      href={href}
      className="font-playfair text-naama-blue-200 flex size-4 h-10 w-33 items-center justify-center gap-1.5 rounded-full bg-white tracking-tight drop-shadow-lg"
    >
      {message}
      <GoArrowRight />
    </Link>
  );
};

export default Button;
