import PictureGallery from "@/components/gallery/PictureGallery";
import JoinCommunity from "@/components/gallery/JoinCommunity";
import Title from "@/components/Title";

const Board = () => {
  return (
    <div className="flex w-full grow flex-col items-center justify-center ">
      <Title title="Moments with NAAMA UCR" />
      <p className="mt-10 text-white flex w-screen pl-65"> 
        Step into our gallery and relive the highlights of our journey in medicine! These snapshots
      </p>
      <p className="text-white mb-25 flex w-screen pl-65">
        capture the dedication, collaboration, and passion that define our community.
      </p>
      <PictureGallery />
      <JoinCommunity />
    </div>
  );
};

export default Board;
