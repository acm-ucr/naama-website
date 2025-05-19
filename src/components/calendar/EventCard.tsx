import Image from "next/image";
import { EventProps } from "../ui/calendar";
import * as motion from "motion/react-client";

const animationX = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
  },
};
const transition = {
  duration: 0.5,
};

const EventCard = ({ title, location, start, description }: EventProps) => {
  const date = new Date(start as string);
  const month = date.toLocaleDateString("en-US", {
    month: "short",
  });
  const year = date.toLocaleDateString("en-US", {
    year: "numeric",
  });
  const dayOfWeek = date.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const day = date.toLocaleDateString("en-US", {
    day: "numeric",
  });

  return (
    <motion.div
      variants={animationX}
      transition={{ ...transition, delay: 0.2 }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="text-naama-blue-200 flex w-full max-w-6xl flex-col md:flex-row"
    >
      <div className="font-nunito text-naama-blue-200 flex">
        <div className="flex aspect-square h-40 w-40 flex-col items-center justify-center border-2 text-center">
          <div className="text-lg">{dayOfWeek}</div>
          <div className="text-4xl">{day}</div>
          <div className="flex space-x-1 text-lg">
            <span>{month}</span>
            <span>{year}</span>
          </div>
        </div>
        <div className="flex flex-col justify-around gap-2 pl-12 text-3xl">
          <div className="font-semibold">{title}</div>
          <div className="text-[25px]">{description}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
