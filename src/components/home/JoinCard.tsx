import { IconType } from "react-icons";

interface JoinUsCardProps {
  title: string;
  description: string;
  icon: IconType;
  altText?: string;
}

const JoinUsCard = ({ title, description, icon: Icon }: JoinUsCardProps) => {
  return (
    <div className="flex justify-center px-4 sm:px-0">
      <div className="bg-naama-ivory-100 flex w-full md:w-3/4 flex-col items-center rounded-4xl p-6 sm:p-8 text-wrap shadow-md shadow-black">
        <div className="text-naama-blue-200 font-nunito text-lg sm:text-xl font-bold">
          {title}
        </div>
        <p className="text-naama-blue-200 font-sans-nunito mt-3 text-center">
          {description}
        </p>
        <div className="bg-naama-blue-100/60 text-naama-blue-300 self-center md:self-end rounded-full p-2">
          <Icon className="h-10 w-10 stroke-1" />
        </div>
      </div>
    </div>
  );
};

export default JoinUsCard;
