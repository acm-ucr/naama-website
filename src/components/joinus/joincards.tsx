
interface JoinUsCardProps {
  title: string;
  description: string;
  icon: React.ReactNode; 
  altText?: string;
}

const JoinUsCard = ({ title, description, icon}: JoinUsCardProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      <div className="bg-naama-ivory-100 shadow-3xl flex flex-col items-center rounded-3xl p-5 text-wrap w-3/4">
        <div className="text-naama-blue-200 font-sans-nunito text-xl font-bold">
          {title}
        </div>
        <p className="text-naama-blue-200 font-sans-nunito mt-3 text-center font-[400]">
          {description}
        </p>
        <div className="h-12 w-12 self-end rounded-full bg-naama-blue-100">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default JoinUsCard;
