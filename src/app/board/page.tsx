import BoardCard from "@/components/BoardCard";
import Alexis from "@/public/board/Alexis_Battikha.webp"

const Board = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      Meet the Team
      <div className="grid-cols-3 grid-rows-3 gap-1.5">
        <BoardCard image={Alexis} name="Alexis Battikha" title="Treasurer" yearMajor="3rd Year Neuroscience Major" description="lorem ipsum dolor sit amet"/>
      </div>
    </div>
  );
};

export default Board;
