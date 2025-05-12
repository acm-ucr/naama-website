import hsa7 from "@/public/logo.svg";
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
  const date = new Date(start as string).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const time = new Date(start as string).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <motion.div
      variants={animationX}
      transition={{ ...transition, delay: 0.2 }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="text-hsa-gray-300 m-4 mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-3xl bg-white p-6 shadow-md shadow-gray-500 md:flex-row"
    >
      <div className="font-songMyung flex flex-col items-center justify-center p-4 text-center">
        <Image
          src={hsa7}
          width={200}
          height={100}
          alt="Decoration"
          className="w-2/3 md:w-full"
        />
        <div className="mt-2 w-full px-4 text-3xl md:text-5xl">{date}</div>
        <div className="mb-2 text-2xl md:text-4xl">{time}</div>
        <Image
          className="w-2/3 rotate-180 md:w-full"
          src={hsa7}
          width={200}
          height={100}
          alt="Decoration"
        />
      </div>
      <div className="bg-hsa-pink-400 mx-auto h-2 w-8/12 rounded-xl md:h-auto md:w-4" />
      <div className="my-auto flex flex-col gap-2 p-4 text-center md:w-5/6 md:text-left">
        <div className="font-songMyung text-3xl md:text-5xl">{title}</div>
        <div className="text-lg font-semibold md:text-xl">
          Location: {location}
        </div>
        <div className="overflow-y-auto p-2 pl-0 text-lg md:text-xl">
          {description}
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
