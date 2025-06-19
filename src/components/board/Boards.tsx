import BoardCard from "./BoardCard";
import { boardMembers } from "@/data/board";

const Boards = () => {
  const firstHalf = boardMembers.slice(0, 3);
  const secondHalf = boardMembers.slice(3);

  return (
    <div className="mt-6 w-full py-8 md:px-24 md:py-12">
      <div className="hidden md:block">
        <div className="grid grid-cols-3 gap-20 px-5">
          {firstHalf.map(
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
        <div className="my-8 mb-12 h-[1px] bg-white"></div>
        <div className="grid grid-cols-3 gap-20 px-5">
          {secondHalf.map(
            ({ name, image, title, description, yearMajor }, index) => (
              <BoardCard
                key={index + 3}
                name={name}
                image={image}
                title={title}
                description={description}
                yearMajor={yearMajor}
              />
            ),
          )}
        </div>
      </div>

      <div className="block md:hidden">
        <div className="grid grid-cols-2 gap-10 px-5">
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
      </div>
    </div>
  );
};

export default Boards;
