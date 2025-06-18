"use client";

import { motion } from "motion/react";

import Button from "@/components/Button";

const animationProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: "easeOut" },
  viewport: { once: true },
};

const NotFound = () => {
  return (
    <motion.div
      {...animationProps}
      className="font-playfair flex min-h-[75dvh] grow flex-col items-center justify-center gap-4 text-white"
    >
      <h1 className="mt-2 mb-2 text-5xl md:mt-4 md:text-6xl">404</h1>
      <p className="w-1/3 text-center text-xl/relaxed md:text-4xl/relaxed">
        Oh no! The page you're looking for can't be found!
      </p>
      <Button message="Return Home" href="/" className="mt-4" />
    </motion.div>
  );
};

export default NotFound;
