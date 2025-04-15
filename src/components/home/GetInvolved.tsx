import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

const GetInvolved = () => {
  return (
    <div className="border-t-naama-blue-100 border-b-naama-blue-300 from-naama-blue-100 to bg-naama-ivory-100 flex h-4/4 w-4/4 flex-col items-center justify-center border-t-10 border-b-20 bg-gradient-to-bl">
      <div className="flex flex-col items-center text-center">
        <div className="text-naama-blue-200 font-nunito text-3xl">
          Excited to
          <span className="italic"> Get Involved?</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-naama-blue-200 font-playfair">
            click here for calendar
          </div>
          <Link href="/calendar">
            <GoArrowRight className="text-naama-blue-200 rounded-full bg-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
