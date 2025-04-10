const BoardCard = ({
  name,
  title,
  yearMajor,
  description,
}: {
  name: string;
  title: string;
  yearMajor: string;
  description: string;
}) => {
  return (
    <div>
      // DELETE LATER, ONLY DOING THIS SO I CAN PUSH
      {name}
      {title}
      {yearMajor}
      {description}
    </div>
  );
};

export default BoardCard;
