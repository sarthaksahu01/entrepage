import React, { useState } from "react";
import Calendar from "react-calendar";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };
  return (
    <div>
      <Calendar onChange={onchange} value={date} />
    </div>
  );
};
