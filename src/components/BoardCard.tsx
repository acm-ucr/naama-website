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
  image: Image;
}) => {
  return (
    <div>
      {name}
      {title}
      {yearMajor}
      {description}
      {image}
    </div>
  );
};

export default BoardCard;
