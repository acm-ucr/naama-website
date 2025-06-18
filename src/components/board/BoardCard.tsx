import Image, { StaticImageData } from "next/image";

interface BoardCardProps {
  name: string;
  title: string;
  yearMajor: string;
  description: string;
  image: StaticImageData;
}

const BoardCard = ({
  name,
  title,
  yearMajor,
  description,
  image,
}: BoardCardProps) => {
  return (
    <div className="text-naama-ivory-100 flex flex-col items-start">
      <Image src={image} alt={name} className="w-full" />
      <div className="pt-5">
        <p className="font-playfair text-med font-bold">{name}</p>
        <p className="font-playfair text-med italic">{title}</p>
        <p className="font-nunito py-7 text-sm font-normal">{yearMajor}</p>
        <p className="font-nunito text-med font-normal">{description}</p>
      </div>
    </div>
  );
};

export default BoardCard;
