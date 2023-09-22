import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../../style/styles.css';

function ReactCalendar() {
  const [value, onChange] = useState(new Date()); // 초기값은 현재 날짜

  return (
    <div>
      <Calendar onChange={onChange} value={value}/>
    </div>
  );
}

export default ReactCalendar;
