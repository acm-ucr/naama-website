import { GoArrowRight } from "react-icons/go";
const Button = ({ message }: { message: string }) => {
  return (
    <div>
      <button className="font-playfair text-naama-blue-200 size-4 h-10 w-33 rounded-full bg-white tracking-tight">
        {message}
        <GoArrowRight />
      </button>
    </div>
  );
};

export default Button;
