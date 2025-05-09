import PictureGallery from "@/components/gallery/PictureGallery";
import JoinCommunity from "@/components/gallery/JoinCommunity";

const Gallery = () => {
  return (
    <div className="flex w-full grow flex-col items-center justify-center">
      <PictureGallery />
      <JoinCommunity />
    </div>
  );
};

export default Gallery;
