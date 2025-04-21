import BoardCard from "@/components/BoardCard";
import Alexis from "@/public/board/Alexis_Battikha.webp";
import Raymon from "@/public/board/Raymon_Marcos.webp";

const Board = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      Meet the Team
      <div className="flex grid-cols-3 grid-rows-3 gap-1.5">
        <BoardCard
          image={Alexis}
          name="Alexis Battikha"
          title="Treasurer"
          yearMajor="3rd Year Neuroscience Major"
          description="lorem ipsum dolor sit amet"
        />
        <BoardCard
          image={Raymon}
          name="Raymon Marcos"
          title="Founder and President"
          yearMajor="3rd Year Global and Community Health Major"
          description="Raymon Marcos is an Iraqi Chaldean originally from San Diego, where he also works as an EMT on the weekends. Between shifts and classes, he stays busy balancing pre-med life while making time to hang out with friends. Whether studying, working, or unwinding, he is always looking for ways to create a strong NAAMA community at UCR."
        />
      </div>
    </div>
  );
};

export default Board;
