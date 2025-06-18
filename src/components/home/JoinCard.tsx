import { IconType } from "react-icons";

interface JoinUsCardProps {
  title: string;
  description: string;
  icon: IconType;
  altText?: string;
}

const JoinUsCard = ({ title, description, icon: Icon }: JoinUsCardProps) => {
  return (
    <div className="bg-naama-ivory-100 justify-center flex w-full flex-col items-center rounded-4xl p-6 text-wrap shadow-md shadow-black sm:p-8">
      <h3 className="text-naama-blue-200 font-nunito text-center text-lg font-bold sm:text-xl">
        {title}
      </h3>
      <p className="text-naama-blue-200 font-sans-nunito my-3 text-center">
        {description}
      </p>
      <div className="bg-naama-blue-100/60 text-naama-blue-300 self-center rounded-full p-2 md:self-end mt-auto">
        <Icon className="h-10 w-10 stroke-1" />
      </div>
    </div>
  );
};

export default JoinUsCard;
