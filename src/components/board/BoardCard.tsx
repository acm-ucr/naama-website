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
        <div className="font-playfair text-med font-bold">{name}</div>
        <div className="font-playfair text-med font-bold italic">{title}</div>
        <div className="font-nunito py-7 text-sm font-normal">{yearMajor}</div>
        <div className="font-nunito text-med font-normal">{description}</div>
      </div>
    </div>
  );
};

export default BoardCard;
