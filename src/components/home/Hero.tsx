"use client";

import Image from "next/image";
import Button from "@/components/Button";
import CircularText from "@/components/home/CircularText";
import heroImage from "@/public/gallery/image16.webp";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="font-nunito flex w-full flex-col items-center justify-center py-8 text-white md:flex-row md:items-start">
      <div className="flex w-1/2 flex-col items-center justify-center pl-5 text-center">
        <CircularText text="University of California, Riverside Chapter" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 40 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-playfair text-4xl md:text-6xl"
        >
          National Arab American <br /> Medical Association
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 40 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mt-8 mb-20 text-pretty"
        >
          Empowering future healthcare leaders through{" "}
          <span className="font-bold">knowledge, support,</span><br /> and a{" "}
          <span className="font-bold">shared commitment</span> to excellence in
          medicine
        </motion.p>
        <Button message="Join Now" href="/" />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: -10 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="my-auto w-1/2 p-4"
      >
        <Image
          src={heroImage}
          alt="Hero Image"
          className="hidden h-full w-full md:flex"
          priority
        />
      </motion.div>
    </div>
  );
};

export default Hero;
