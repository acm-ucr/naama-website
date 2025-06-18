import Image from "next/image";
import galleryImages from "@/data/gallery";

const PictureGallery = () => {
  return (
    <div className="relative flex w-full flex-wrap justify-center rounded-t-4xl bg-naama-ivory-100 py-16 px-6">
      {galleryImages.map((src, index) => (
        <Image
          key={index}
          alt={`Gallery image ${index}`}
          src={src}
          className="md:w-[45%] w-full m-6 rounded-xl"
        />
      ))}
    </div>
  );
};

export default PictureGallery;
