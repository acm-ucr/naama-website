import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

const GetInvolved = () => {
  return (
    <div className="from-naama-blue-100 to bg-naama-ivory-100 flex h-1/2 w-full flex-col items-center justify-center gap-4 bg-gradient-to-bl">
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="text-naama-blue-200 font-playfair text-4xl">
          Excited to
          <span className="italic"> Get Involved?</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-naama-blue-200 font-playfair text-lg">
            click here for the calendar
          </div>
          <Link href="/calendar">
            <GoArrowRight className="text-naama-blue-200 h-6 w-6 rounded-full bg-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
