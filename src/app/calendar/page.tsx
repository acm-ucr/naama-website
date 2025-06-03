import CalendarEvents from "@/components/calendar/CalendarEvents";
import EventsDescription from "@/components/calendar/EventsDescription";
import Title from "@/components/Title";

const Calendar = () => {
  return (
    <>
      <Title title="Events Calendar" />
      <EventsDescription />
      <CalendarEvents />
    </>
  );
};

export default Calendar;
