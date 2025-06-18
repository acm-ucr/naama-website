"use client";

import { motion } from "motion/react";

interface DescriptionTextProps {
  text: string;
}

const textAnimation = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, ease: "easeOut", delay: 0.3 },
};

const DescriptionText = ({ text }: DescriptionTextProps) => {
  return (
    <motion.p {...textAnimation} className="text-naama-ivory-100 py-10 text-center md:ml-24 mb-12 mx-auto md:w-3/4 md:text-left font-nunito text-xl md:mx-0">
      {text}
    </motion.p>
  );
};

export default DescriptionText;
