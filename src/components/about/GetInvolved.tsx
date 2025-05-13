import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

const GetInvolved = () => {
  return (
    <div className="from-naama-blue-100 to bg-naama-ivory-100 flex w-full flex-col items-center justify-center gap-4 bg-gradient-to-bl py-48">
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="text-naama-blue-200 font-playfair text-4xl">
          Excited to
          <span className="italic"> Get Involved?</span>
        </div>
        <Link href="/calendar" className="flex items-center gap-2">
          <div className="text-naama-blue-200 font-nunito text-lg">
            click here for the calendar
          </div>
          <GoArrowRight className="text-naama-blue-200 h-6 w-6 rounded-full bg-white/75" />
        </Link>
      </div>
    </div>
  );
};

export default GetInvolved;
