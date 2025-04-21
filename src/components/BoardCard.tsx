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
    <div>
      <Image src={image} alt={name} />

      <div className="font-playfair size-4.0 font-bold">{name}</div>
      <div className="font-playfair size-4.0 font-bold italic">{title}</div>
      <div className="font-nunito size-3.5 font-sans font-normal">
        {yearMajor}
      </div>
      <div className="font-nunito size-4.0 font-sans font-normal">
        {description}
      </div>
    </div>
  );
};

export default BoardCard;
