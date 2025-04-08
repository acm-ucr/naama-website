import { GoArrowRight } from "react-icons/go";
const Button = ({ message }: { message: string }) => {
  return (
    <div>
      <button className="font-playfair text-naama-blue-200 flex size-4 h-10 w-33 items-center justify-center rounded-full bg-white tracking-tight drop-shadow-lg">
        {message}
        <GoArrowRight />
      </button>
    </div>
  );
};

export default Button;
