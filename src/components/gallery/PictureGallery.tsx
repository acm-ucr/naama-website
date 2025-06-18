"use client";
import { motion } from "motion/react";

import Image from "next/image";
import galleryImages from "@/data/gallery";

const animationProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.9, ease: "easeOut" },
  viewport: { once: true },
};

const PictureGallery = () => {
  return (
    <div className="bg-naama-ivory-100 relative flex w-full flex-wrap justify-center rounded-t-4xl px-6 py-16">
      {galleryImages.map((imageModule, index) => (
        <motion.div
          key={index}
          {...animationProps}
          className="m-6 w-full overflow-hidden rounded-xl md:w-[45%]"
        >
          <Image
            alt={`Gallery image ${index}`}
            src={imageModule}
            className="h-full w-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default PictureGallery;
