import { LuBriefcaseMedical } from "react-icons/lu";
import { FaUserTie } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";

const ExploreOurEvents = () => {
  return (
    <div className="bg-naama-blue-100 font-nunito flex w-full flex-col justify-around gap-4 px-4 py-24 text-white lg:flex-row">
      <h2 className="font-playfair mx-auto text-center text-2xl text-white sm:text-4xl">
        Explore <span className="italic"> Our Events </span>
      </h2>
      <div className="font-nunito mx-auto flex flex-col sm:w-2/3">
        <div className="flex pb-3 text-xl font-bold">Workshops</div>
        <div className="flex flex-col items-center pb-2 sm:flex-row">
          <div className="text-md flex pb-2 text-pretty">
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
        <div className="flex flex-col items-center justify-center pb-2 sm:flex-row">
          <div className="text-md flex pb-2 text-pretty">
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
        <div className="flex flex-col items-center justify-center pb-2 sm:flex-row">
          <div className="text-md flex pb-2 text-pretty">
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
