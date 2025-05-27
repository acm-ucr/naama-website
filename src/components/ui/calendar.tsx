"use client";

import * as React from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";

export type GoogleEventProps = {
  start: {
    dateTime: Date;
  };
  end: {
    dateTime: Date;
  };
  location: string;
  description: string;
  summary: string;
};

export type EventProps = Partial<{
  start: string;
  end: string;
  location: string;
  description: string;
  title: string;
}>;

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: EventProps[];
  setCurrent: (props: EventProps) => void;
};

interface DayProps {
  date: Date;
  displayMonth: Date;
  events: EventProps[];
  setCurrent: (props: EventProps) => void;
}

const Day = ({ date, displayMonth, events, setCurrent }: DayProps) => {
  const today = new Date();
  const isToday =
    today.getDate() === date.getDate() &&
    today.getMonth() === date.getMonth() &&
    today.getFullYear() === date.getFullYear();

  const currentMonth = displayMonth.getMonth() === date.getMonth();

  return (
    <div
      className={`${isToday ? "bg-naama-blue-200/35" : "bg-naama-ivory-100"} scrollbar-hidden text-naama-blue-200 relative h-20 overflow-y-auto border md:h-24`}
    >
      <p
        className={`${currentMonth ? "" : "invisible"} sticky top-0 z-10 px-2 text-right`}
      >
        {date.getDate()}
      </p>
      <div className="mt-1 flex flex-col gap-1 pb-1">
        {events?.map(({ title, start, end, location, description }, index) => {
          const startDate = new Date(start as string);
          const endDate = new Date(end as string);

          if (
            startDate.getDate() === date.getDate() &&
            startDate.getMonth() === date.getMonth() &&
            startDate.getFullYear() === date.getFullYear()
          ) {
            return (
              <div
                className="bg-naama-blue-200 hover:bg-opacity-90 text-naama-ivory-100 font-nunito mx-1 cursor-pointer items-center justify-center px-2 py-1.5 text-left"
                key={index}
                onClick={() =>
                  setCurrent({ title, start, end, location, description })
                }
              >
                <div className="truncate text-xs font-semibold">{title}</div>
                <div className="text-xs font-thin">
                  {startDate.getHours() % 12 || 12}
                  {endDate &&
                    `-${new Date(end as string).getHours() % 12 || 12}`}
                  {endDate.getHours() >= 12 ? "pm" : "am"}
                  {location && ` ${location}`}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  events,
  setCurrent,
  ...props
}: CalendarProps) {
  return (
    <div className="relative pt-10">
      <p className="font-playfair text-naama-blue-200 relative top-[2.3vw] ml-[17vw] hidden text-2xl md:block">
        Take a look at the <span className="italic">Calendar</span>
      </p>
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn(
          "font-playfair p-3, relative mb-10 rounded-none border-none",
          className,
        )}
        classNames={{
          months:
            "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month:
            "space-y-8 md:w-2/3 w-[90%] flex justify-right flex-col mx-auto",
          caption: "flex items-center justify-center md:pl-[33.5vw] relative",
          caption_label: "text-2xl font-medium text-naama-blue-200",
          nav: "flex items-center",
          nav_button: "h-6 w-14 p-0 opacity-90 hover:opacity-100 rounded-4xl",
          nav_button_previous:
            "absolute md:right-[25.8vw] left-6 right-auto md:left-auto",
          nav_button_next: "absolute md:right-[4vw] right-6",
          table:
            "w-full space-y-1 table-fixed border-[0.5px] border-naama-blue-200",
          head_row: "flex",
          head_cell:
            "text-muted-foreground w-full first:border-l-[0.5px] last:border-r-[0.5px] font-semibold text-md border-y-[0.5px] text-naama-blue-200 bg-naama-ivory-100",
          row: "flex w-full bg-naama-ivory-100",
          cell: "text-center md:text-sm text-xs min-w-[14.285714285%] overflow-clip text-ellipsis p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "w-full p-0 font-normal aria-selected:opacity-100 rounded-none border",
          ),
          day_range_end: "day-range-end",
          day_selected:
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground border-none",
          day_today: "bg-accent text-accent-foreground",
          day_outside:
            "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
          day_disabled: "text-naama-blue-200 opacity-50",
          day_range_middle:
            "aria-selected:bg-accent aria-selected:text-naama-blue-200",
          day_hidden: "invisible",
          ...classNames,
        }}
        components={{
          IconLeft: ({ className, ...props }) => (
            <MoveLeft
              className={cn(
                "text-naama-blue-200 h-6 w-14 cursor-pointer",
                className,
              )}
              {...props}
            />
          ),
          IconRight: ({ className, ...props }) => (
            <MoveRight
              className={cn(
                "text-naama-blue-200 h-6 w-14 cursor-pointer",
                className,
              )}
              {...props}
            />
          ),
          Day: ({ displayMonth, date }) => (
            <Day
              date={date}
              displayMonth={displayMonth}
              events={events}
              setCurrent={setCurrent}
            />
          ),
        }}
        formatters={{
          formatWeekdayName: (weekday) => {
            const day = weekday.toLocaleDateString("en-US", {
              weekday: "short",
            });
            return day;
          },
        }}
        {...props}
      />
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
