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
    <div className="grid-cols-3 grid-rows-3 gap-1.5">
      // DELETE LATER, ONLY DOING THIS SO I CAN PUSH
      {name}
      {title}
      {yearMajor}
      {description}
    </div>
  );
};

export default BoardCard;
