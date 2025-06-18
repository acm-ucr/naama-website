"use client";

import Image from "next/image";
import groupHome from "@/public/home/groupHome.webp";
import Button from "@/components/Button";
import { motion } from "motion/react";

const leftAnimation = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.9, ease: "easeOut" },
  viewport: { once: true },
};

const rightAnimation = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: "easeOut" },
  viewport: { once: true },
};

const WhoAreWe = () => {
  return (
    <div className="relative h-fit w-full">
      <Image
        src={groupHome}
        alt="groupHome"
        className="absolute h-full w-full object-cover opacity-80"
      />
      <div className="bg-naama-ivory-100 absolute inset-0 opacity-80" />
      <div className="relative flex h-full w-full flex-col items-center justify-center px-5 pb-5 md:flex md:flex-row md:gap-20 md:py-20 lg:px-20">
        <motion.h2
          {...leftAnimation}
          className="text-naama-blue-200 font-playfair pt-10 text-center text-3xl font-bold whitespace-nowrap md:pt-0 md:text-5xl"
        >
          <span className="underline decoration-2 underline-offset-8">Who</span>{" "}
          are
          <span className="italic"> We</span>?
        </motion.h2>
        <motion.div {...rightAnimation} className="flex flex-col">
          <p className="font-nunito text-naama-blue-200 text-md py-5 text-center md:py-10 md:text-left md:text-xl">
            NAAMA NextGen UCR is a student chapter of the National Arab American
            Medical Association dedicated to
            <span className="font-extrabold"> empowering </span>
            Arab American students pursuing careers in healthcare. We strengthen
            professional growth, cultural awareness, and community engagement
            through
            <span className="font-extrabold"> mentorship</span>,
            <span className="font-extrabold"> networking</span>, and
            <span className="font-extrabold"> service initiatives</span>.
          </p>
          <Button
            className="mx-auto md:mr-14 md:ml-auto"
            message="Learn More"
            href="/about"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WhoAreWe;
