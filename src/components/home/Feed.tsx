"use client";

import BeholdWidget from "@behold/react";
import { motion } from "motion/react";
import Link from "next/link";

const animationProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: "easeOut" },
  viewport: { once: true },
};

const Feed = () => {
  return (
    <motion.div
      {...animationProps}
      className="px-24 font-playfair text-naama-blue-200 bg-naama-ivory-100 flex w-full flex-col py-16 text-center"
    >
      <h2 className="text-5xl font-medium">
        See Our <span className="italic">Instagram</span>
      </h2>
      <Link
        className="hover:text-naama-blue-100 mx-auto w-fit py-5 text-3xl decoration-1 underline-offset-4 transition-all duration-100 ease-in-out hover:font-bold hover:underline"
        href="https://www.instagram.com/naamaucr"
        target="_blank"
      >
        @naamaucr
      </Link>
      <BeholdWidget feedId={process.env.NEXT_PUBLIC_BEHOLD_ID || "undefined"} />
    </motion.div>
  );
};

export default Feed;
