import Image from "next/image";

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
  image: string;
}) => {
  return (
    <div className="flex-col justify-evenly">
      <Image src={image} alt={name} />

      <div className="font-playfair text-med font-bold">{name}</div>
      <div className="font-playfair text-med font-bold italic">{title}</div>
      <div className="font-nunito py-7 font-sans text-sm font-normal">
        {yearMajor}
      </div>
      <div className="font-nunito text-med font-sans font-normal">
        {description}
      </div>
    </div>
  );
};

export default BoardCard;
