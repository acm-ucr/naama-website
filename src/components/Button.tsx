import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

interface ButtonProps {
  message: string;
  href: string;
  className?: string;
}

const Button = ({ message, href, className }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`font-playfair text-naama-blue-200 flex size-4 h-10 w-33 items-center justify-center gap-1.5 rounded-full bg-white tracking-tight drop-shadow-lg transition-all ease-in-out hover:scale-104 hover:bg-gray-100 ${className || ""}`}
    >
      {message}
      <GoArrowRight />
    </Link>
  );
};

export default Button;
