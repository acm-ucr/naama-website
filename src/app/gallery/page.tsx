import JoinCommunity from "@/components/home/JoinCommunity";
import Title from "@/components/Title";

const Board = () => {
  return (
    <div className="flex w-screen grow flex-col items-center justify-center">
      <Title title="Moments with NAAMA UCR" />
      <JoinCommunity />
    </div>
  );
};

export default Board;
