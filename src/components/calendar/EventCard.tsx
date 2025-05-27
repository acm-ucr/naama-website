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

const EventCard = ({ title, start, description }: EventProps) => {
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
      <div className="font-nunito text-naama-blue-200 flex flex-col text-center md:flex-row md:text-left">
        <div className="mx-auto mb-5 flex aspect-square h-24 w-24 flex-col items-center justify-center border-2 text-center md:mx-0">
          <div className="text-sm">{dayOfWeek}</div>
          <div className="text-3xl">{day}</div>
          <div className="flex space-x-1 text-sm">
            <span>{month}</span>
            <span>{year}</span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 md:pl-12">
          <div className="text-lg font-semibold">{title}</div>
          <div className="text-base">{description}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
