"use client";

import Image from "next/image";
import Button from "@/components/Button";
import CircularText from "@/components/home/CircularText";
import heroImage from "@/public/gallery/image16.webp";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageSlideInVariants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

const Hero = () => {
  return (
    <motion.div
      className="font-nunito flex w-full flex-col items-center justify-center pb-8 text-white md:flex-row md:items-start"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex w-full flex-col items-center justify-center pb-5 text-center md:w-1/2 md:px-5">
        <CircularText text="University of California, Riverside Chapter" />
        <motion.h1
          className="font-playfair text-4xl md:text-6xl"
          variants={itemVariants}
        >
          National Arab American <br /> Medical Association
        </motion.h1>
        <motion.p className="mt-8 mb-10 text-pretty" variants={itemVariants}>
          Empowering future healthcare leaders through{" "}
          <span className="font-bold">knowledge, support,</span>
          <br /> and a <span className="font-bold">shared commitment</span> to
          excellence in medicine
        </motion.p>
        <motion.div variants={itemVariants}>
          <Button message="Join Now" href="/" />
        </motion.div>
      </motion.div>
      <motion.div
        className="my-auto w-full p-4 md:w-1/2"
        variants={imageSlideInVariants}
      >
        <Image
          src={heroImage}
          alt="Hero Image"
          className="hidden h-full w-full rounded-xl md:flex"
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
