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
    <motion.p
      {...textAnimation}
      className="text-naama-ivory-100 font-nunito mx-auto mb-12 py-10 text-center text-xl md:mx-0 md:ml-24 md:w-3/4 md:text-left"
    >
      {text}
    </motion.p>
  );
};

export default DescriptionText;
