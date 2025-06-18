import Image from "next/image";
import galleryImages from "@/data/gallery";

const PictureGallery = () => {
  return (
    <div className="bg-naama-ivory-100 relative flex w-full flex-wrap justify-center rounded-t-4xl px-6 py-16">
      {galleryImages.map((src, index) => (
        <Image
          key={index}
          alt={`Gallery image ${index}`}
          src={src}
          className="m-6 w-full rounded-xl md:w-[45%]"
        />
      ))}
    </div>
  );
};

export default PictureGallery;
