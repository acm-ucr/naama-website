"use client";

import { motion } from "motion/react";
interface TitleProps {
  title: string;
}

const titleAnimation = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: "easeOut" },
};

const Title = ({ title }: TitleProps) => {
  return (
    <motion.h1
      {...titleAnimation}
      className="text-naama-ivory-100 font-playfair mx-auto w-3/4 pt-20 text-center text-5xl md:ml-24 md:text-left"
    >
      {title}
    </motion.h1>
  );
};

export default Title;
