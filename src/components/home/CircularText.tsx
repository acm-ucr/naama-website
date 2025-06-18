"use client";

import React from "react";
import { motion } from "motion/react";

interface CircleTextProps {
  text: string;
}

const letterVariants = {
  variants : {
  hidden: { opacity: 0, y: 5, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 500, damping: 50 },
  },
}
};

const animationProps = {
  initial: "hidden",
  animate: "visible",
  variants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.1,
      },
    },
  },
};

const CircularText = ({ text }: CircleTextProps) => {
  return (
    <motion.div
      {...animationProps}
      className="flex w-full grow items-center justify-center"
    >
      <svg
        width="22vw"
        viewBox="0 0 400 200"
        xmlns="http://www.w3.org/2000/svg"
        className="flex overflow-visible"
      >
        <path id="curve" d="M-200,250 Q200,-100 600,250" fill="transparent" />
        <text className="fill-white/50 text-4xl">
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            {text.split("").map((char, index) => (
              <motion.tspan key={index} {...letterVariants}>
                {char}
              </motion.tspan>
            ))}
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
};

export default CircularText;
