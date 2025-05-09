import PictureGallery from "@/components/gallery/PictureGallery";
import JoinCommunity from "@/components/gallery/JoinCommunity";
import Title from "@/components/Title";

const Board = () => {
  return (
    <div className="flex w-full grow flex-col items-center justify-center">
      <Title title="Moments with NAAMA UCR" />
      <PictureGallery />
      <JoinCommunity />
    </div>
  );
};

export default Board;
