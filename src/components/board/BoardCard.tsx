"use client";

import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";

const animationProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: "easeOut" },
  viewport: { once: true },
};

interface BoardCardProps {
  name: string;
  title: string;
  yearMajor: string;
  description: string;
  image: StaticImageData;
}

const BoardCard = ({
  name,
  title,
  yearMajor,
  description,
  image,
}: BoardCardProps) => {
  return (
    <motion.div
      {...animationProps}
      className="text-naama-ivory-100 flex flex-col items-start"
    >
      <Image src={image} alt={name} className="w-full rounded-lg" />
      <div className="pt-5">
        <p className="font-playfair font-bold md:text-lg">{name}</p>
        <p className="font-playfair md:text-lg">{title}</p>
        <p className="font-nunito md:text-md py-2 pb-4 text-sm">{yearMajor}</p>
        <hr className="border-naama-ivory-100/50 mx-auto w-2/3 border-t py-2" />
        <p className="font-nunito md:text-md text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default BoardCard;
