import BoardCard from "./BoardCard";
import { boardMembers } from "@/data/board";

const Boards = () => {
  return (
    <div className="mt-6 hidden w-full justify-center gap-20 md:flex">
      {boardMembers.map(
        ({ name, image, title, description, yearMajor }, index) => (
          <BoardCard
            key={index}
            name={name}
            image={image}
            title={title}
            description={description}
            yearMajor={yearMajor}
          />
        ),
      )}
    </div>
  );
};

export default Boards;
