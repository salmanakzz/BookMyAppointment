import React from "react";
import { Calendar } from "primereact/calendar";

export const CalendarForm = ({ date, setDate }) => {

  return (
    <div className="card flex justify-content-center">
      <Calendar
        value={date}
        onChange={(e) => setDate(e.value)}
        inline
        showWeek
      />
    </div>
  );
};
