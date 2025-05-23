import Image, { StaticImageData } from "next/image";

const BoardCard = ({
  name,
  title,
  yearMajor,
  description,
  image,
}: {
  name: string;
  title: string;
  yearMajor: string;
  description: string;
  image: StaticImageData;
}) => {
  return (
    <div className="flex flex-col items-start text-white">
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
