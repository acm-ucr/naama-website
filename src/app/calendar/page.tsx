import CalendarEvents from "@/components/calendar/CalendarEvents";
import EventsDescription from "@/components/calendar/EventsDescription";
import Title from "@/components/Title";

const Calendar = () => {
  return (
    <div className="flex w-full grow flex-col justify-center pl-60">
      <Title title="Events Calendar" />

      <p className="mt-10 mb-25 flex w-1/2 pr-20 text-white">
        Stay up to date with the latest events! Whether you're looking to
        connect with like-minded peers or gain insights into the medical field,
        there's something for everyone. Don't miss out and check out the
        upcoming events today!
      </p>
      <EventsDescription />
      <CalendarEvents />
    </div>
  );
};

export default Calendar;
