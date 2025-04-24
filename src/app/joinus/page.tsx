import JoinUsCard from "@/components/joinus/joincards";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { Stethoscope, HandHeart } from "lucide-react";

const JoinUs = () => {
  return (
    <div className="bg-naama-blue-300 flex justify-center p-10">
      <JoinUsCard
        title="Mentorship and Networking"
        description="Gain access to a strong network of healthcare professionals and
        mentors who can guide you on your academic and career path."
        icon={<HiOutlineUserGroup" />}
      />

      <JoinUsCard
        title="Professional Development"
        description="Participate in workshops, guest speaker events, and hands-on experiences that enhance your medical and healthcare career prospects."
        icon={<Stethoscope className="text-naama-blue-300 h-10 w-10" />}
      />

      <JoinUsCard
        title="Community and Advocacy"
        description="Join a community that celebrates Arab American culture while engaging in meaningful outreach and service projects that make a difference."
        icon={<HandHeart className="text-naama-blue-300 h-10 w-10" />}
      />
    </div>
  );
};

export default JoinUs;
