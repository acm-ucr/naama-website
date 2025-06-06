"use client";

import JoinUs from "./JoinUs";
import { motion } from "motion/react";

const ComeJoinUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="bg-naama-blue-200 flex w-full flex-col items-center py-36 text-center text-white">
        <div className="font-playfair text-5xl">
          Come <span className="italic"> Join Us</span>
        </div>
        <p className="w-full items-center justify-center py-15 text-center text-2xl">
          Whether you're looking to expand your knowledge or gain hands-on{" "}
          <br />
          experience, we are here to help you pave the way to <br />{" "}
          <span className="font-bold">a successful future in medicine.</span>
        </p>
        <JoinUs />
      </div>
    </motion.div>
  );
};

export default ComeJoinUs;
