import { IconType } from "react-icons";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { Stethoscope, HandHeart } from "lucide-react";

interface JoinUsCardProps {
  title: string;
  description: string;
  icon: IconType;
  altText?: string;
}

const JoinUsCard = ({ title, description, icon: Icon }: JoinUsCardProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      <div className="bg-naama-ivory-100 shadow-3xl flex w-3/4 flex-col items-center rounded-3xl p-5 text-wrap">
        <div className="text-naama-blue-200 font-nunito text-xl font-bold">
          {title}
        </div>
        <p className="text-naama-blue-200 font-sans-nunito mt-3 text-center">
          {description}
        </p>
        <div className="bg-naama-blue-100 text-naama-blue-300 flex h-20 w-20 items-center justify-center self-end rounded-full">
          <Icon className="h-14 w-14" />
        </div>
      </div>
    </div>

    
  );
};

export default JoinUsCard;
