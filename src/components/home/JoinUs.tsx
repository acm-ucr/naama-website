import { HiOutlineUserGroup } from "react-icons/hi2";
import { Stethoscope, HandHeart } from "lucide-react";
import JoinUsCard from "@/components/home/JoinCard";

const JoinUs = () => {
  return (
    <div className="flex justify-center p-10">
      <JoinUsCard
        title="Mentorship and Networking"
        description="Gain access to a strong network of healthcare professionals and
        mentors who can guide you on your academic and career path."
        icon={HiOutlineUserGroup}
      />

      <JoinUsCard
        title="Professional Development"
        description="Participate in workshops, guest speaker events, and hands-on experiences that enhance your medical and healthcare career prospects."
        icon={Stethoscope}
      />

      <JoinUsCard
        title="Community and Advocacy"
        description="Join a community that celebrates Arab American culture while engaging in meaningful outreach and service projects that make a difference."
        icon={HandHeart}
      />
    </div>
  );
};

export default JoinUs;
