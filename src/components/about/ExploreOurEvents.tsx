import { LuBriefcaseMedical } from "react-icons/lu";
import { FaUserTie } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";

const ExploreOurEvents = () => {
  return (
    <div className="bg-naama-blue-100 font-nunito flex w-full justify-center gap-5 py-24 pr-24 text-white">
      <div className="font-playfair mr-5 w-1/3 items-center justify-center pl-5 text-center text-4xl text-white">
        Explore <span className="italic"> Our Events </span>
      </div>
      <div className="font-nunito flex w-2/3 flex-col pr-4">
        <div className="flex pb-3 text-xl font-bold">Workshops</div>
        <div className="flex flex-row items-center justify-center pb-2">
          <div className="text-md flex pb-2">
            Our hands-on workshops provide members with practical skills and
            knowledge essential for careers in healthcare. From clinical
            simulations to professional development sessions, these interactive
            events help students build confidence and expertise.
          </div>
          <div className="mb-5 ml-5 flex aspect-square w-12 flex-shrink-0 items-center justify-center rounded-full bg-white">
            <LuBriefcaseMedical className="text-naama-blue-200 text-2xl" />
          </div>
        </div>
        <hr />
        <div className="flex pt-4 pb-3 text-xl font-bold">Guest Speakers</div>
        <div className="flex flex-row items-center justify-center pb-2">
          <div className="text-md flex pb-2">
            We host distinguished healthcare professionals who share their
            experiences, insights, and advice. These events offer a unique
            opportunity to learn from experts in the field, ask questions, and
            gain valuable mentorship.
          </div>
          <div className="mb-5 ml-5 flex aspect-square w-10 flex-shrink-0 items-center justify-center rounded-full bg-white">
            <FaUserTie className="text-naama-blue-200 text-2xl" />
          </div>
        </div>
        <hr />
        <div className="flex pt-4 pb-3 text-xl font-bold">Opportunities</div>
        <div className="flex flex-row items-center justify-center pb-2">
          <div className="text-md flex pb-2">
            NAAMA connects members with internships, research postions,
            volunteering, and networking events to support their professional
            growth. We strive to provide resources that help students advance in
            their medical and community health careers.
          </div>
          <div className="mb-5 ml-5 flex aspect-square w-10 flex-shrink-0 items-center justify-center rounded-full bg-white">
            <FaHandHoldingHeart className="text-naama-blue-200 text-2xl" />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ExploreOurEvents;
