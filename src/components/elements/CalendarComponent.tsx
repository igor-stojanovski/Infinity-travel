import styled from "@emotion/styled";
import React from "react";

import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type Props = {};

export default function CalendarComponent({}: Props) {
  const [value, setValue] = useState<Value>(new Date());

  return (
    <div>
      <CalendarStyle
        className="ts"
        onChange={(e) => {
          setValue(e);
        }}
        value={value}
        calendarType="gregory"
        selectRange={true}
        next2Label={null}
        prev2Label={null}
        minDetail="month"
        showNeighboringMonth={false}
      />
    </div>
  );
}

const CalendarStyle = styled(Calendar)`
  padding: 16px;
  margin: 16px;
  background-color: #21b0b7;
  border-radius: 12px;

  & .react-calendar__navigation {
    text-align: center;
    display: flex;
    justify-content: space-between;

    .react-calendar__navigation__label__labelText {
      color: white;
    }

    & button {
      border: none;
      background-color: transparent;
    }
  }

  .react-calendar__month-view__weekdays {
    margin: 16px 0;
  }

  & abbr {
    text-decoration: none;
    text-transform: uppercase;
  }

  & .react-calendar__tile {
    background-color: transparent;
    border-radius: 50%;
    border: none;
    color: white;
  }
`;
