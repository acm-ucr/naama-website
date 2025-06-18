import CalendarEvents from "@/components/calendar/CalendarEvents";
import DescriptionText from "@/components/Description";
import Title from "@/components/Title";

const Calendar = () => {
  return (
    <>
      <Title title="Events Calendar" />
      <DescriptionText text="Stay up to date with the latest events! Whether you're looking to
      connect with like-minded peers or gain insights into the medical field,
      there's something for everyone. Don't miss out and check out the
      upcoming events today!"/>
      <CalendarEvents />
    </>
  );
};

export default Calendar;
