import { HiOutlineUserGroup } from "react-icons/hi2";

interface JoinUsCardProps {
  title: string;
  description: string;
  altText?: string;
}

const JoinUsCard = ({ title, description }: JoinUsCardProps) => {
  return (
    <div className="flex w-fit justify-center">
      <div className="bg-naama-ivory-100 shadow-3xl flex flex-col items-center rounded-3xl p-5 text-wrap">
        <h1 className="text-naama-blue-200 font-sans-nunito text-xl font-bold">
          {title}
        </h1>
        <p className="text-naama-blue-200 font-sans-nunito mt-3 text-center font-[400]">
          {description}
        </p>
        <div className="h-12 w-12 self-end">
          <HiOutlineUserGroup className="text-naama-blue-300 h-10 w-10" />
        </div>
      </div>
    </div>
  );
};

export default JoinUsCard;
