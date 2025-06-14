"use client";

import PictureGallery from "@/components/gallery/PictureGallery";
import JoinCommunity from "@/components/gallery/JoinCommunity";
import Title from "@/components/Title";
import Description from "@/components/gallery/PhotoDescription";
import { motion } from "motion/react";

const titleAnimation = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: "easeOut" },
};

const textAnimation = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: "easeOut", delay: 0.3 },
};

const Board = () => {
  return (
    <>
      <motion.div {...titleAnimation}>
        <Title title="Moments with NAAMA UCR" />
      </motion.div>
      <motion.div {...textAnimation}>
        <Description />
      </motion.div>
      <PictureGallery />
      <JoinCommunity />
    </>
  );
};

export default Board;
