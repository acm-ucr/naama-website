import Image from "next/image";
import galleryImages from "@/data/gallery";

const PictureGallery = () => {
  return (
    <div className="relative flex w-full flex-wrap justify-center gap-8 rounded-t-4xl bg-white py-16">
      {galleryImages.map((src, index) => (
        <Image
          key={index}
          alt={`Gallery image ${index}`}
          src={src}
          height={600}
          width={600}
          className="mx-2 my-2 rounded-xl"
        />
      ))}
    </div>
  );
};

export default PictureGallery;
