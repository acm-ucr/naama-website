"use client";

import { motion } from "motion/react";
import Button from "@/components/Button";

const JoinCommunity = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const circleSpringVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut",
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="bg-naama-blue-100 relative flex h-[50vh] w-full justify-center overflow-hidden text-white md:h-[40vw]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div
        className="to-naama-blue-100 absolute aspect-square h-full w-3/4 -translate-y-1/2 rounded-full bg-white bg-gradient-to-t to-40% md:h-3/4 md:w-fit"
        variants={circleSpringVariants}
      />

      <div className="relative z-1 flex h-3/4 flex-col items-center py-4 md:justify-between">
        <motion.h3
          className="font-playfair text-xl md:text-4xl"
          variants={fadeUpVariants}
        >
          Join Our Community <span className="italic">Today</span>
        </motion.h3>

        <motion.div
          className="flex translate-y-2/1 flex-col items-center gap-4 md:translate-y-0 md:py-0"
          variants={fadeUpVariants}
        >
          <p className="font-nunito mx-8 text-center text-sm md:text-lg">
            Want to be part of these experiences? Fill out the application form
            to
            <br className="hidden md:block" />
            become a member and start your journey with us today!
          </p>
          <motion.div variants={fadeUpVariants}>
            <Button
              message="Member Form"
              href="/"
              className="to-naama-bl to-naama-blue-100 bg-gradient-to-r"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default JoinCommunity;
