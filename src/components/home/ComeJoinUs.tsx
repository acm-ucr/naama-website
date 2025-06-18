"use client";

import JoinUs from "./JoinUs";
import { motion } from "motion/react";

const animationProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: "easeOut" },
  viewport: { once: true },
};

const ComeJoinUs = () => {
  return (
    <motion.div
      {...animationProps}
      className="bg-naama-blue-200 flex w-full flex-col items-center py-20 text-center text-white"
    >
      <h3 className="font-playfair text-5xl">
        Come <span className="italic"> Join Us</span>
      </h3>
      <p className="w-2/3 items-center justify-center px-12 py-12 text-center text-lg md:text-xl">
        Whether you're looking to expand your knowledge or gain hands-on
        experience, we are here to help you pave the way to{" "}
        <span className="font-bold">a successful future in medicine.</span>
      </p>
      <JoinUs />
    </motion.div>
  );
};

export default ComeJoinUs;
