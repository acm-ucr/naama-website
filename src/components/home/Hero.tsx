"use client";

import Image from "next/image";
import Button from "@/components/Button";
import CircularText from "@/components/home/CircularText";
import heroImage from "@/public/gallery/image16.webp";
import { motion } from "motion/react";

const headingAnimation = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: "easeOut" },
  viewport: { once: true },
};

const imageAnimation = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.9, ease: "easeOut" },
  viewport: { once: true },
};

const Hero = () => {
  return (
    <div className="font-nunito flex w-full flex-col items-center justify-center pb-8 text-white md:flex-row md:items-start">
      <motion.div
        {...headingAnimation}
        className="flex w-1/2 flex-col items-center justify-center pb-5 text-center md:px-5"
      >
        <CircularText text="University of California, Riverside Chapter" />
        <h1 className="font-playfair text-4xl md:text-6xl">
          National Arab American <br /> Medical Association
        </h1>
        <p className="mt-8 mb-10 text-pretty">
          Empowering future healthcare leaders through{" "}
          <span className="font-bold">knowledge, support,</span>
          <br /> and a <span className="font-bold">shared commitment</span> to
          excellence in medicine
        </p>
        <Button message="Join Now" href="/" />
      </motion.div>
      <motion.div {...imageAnimation} className="my-auto w-1/2 p-4">
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
