import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import axios from 'axios';
import '../../style/styles.css';
import { getAttendanceDates, checkIn } from '../../apis/attendance';

function AttendanceTab() {
  
  const today = new Date();
  today.setHours(today.getHours());
  const [value, onChange] = useState(new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())));
  const [attendanceDates, setAttendanceDates] = useState([]);

  function toLocalDateString(date) {
    date.setDate(date.getDate());
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }

  useEffect(() => {
    fetchAttendanceDates();
  }, [value]);
 
  async function fetchAttendanceDates() {
    try{
      const dates = await getAttendanceDates();
      setAttendanceDates(dates);
    }catch(e){
      console.log(e)
    }
  }
 
  async function handleCheckIn() {
    try{
      const newDate = value.toISOString().split('T')[0];
      const dates = await checkIn(newDate);
      setAttendanceDates(dates);
      alert("출석되었습니다!"); 
    }catch(e){
      console.log(e)
    }
  }

  return (
    <div class='drop-shadow-md flex flex-col items-center'>
      <Calendar
        onChange={onChange}
        value={value}
        locale="en-US"
        tileClassName={({ date }) =>
          attendanceDates.includes(toLocalDateString(date)) ? "highlight" : null}
      />
      <button class='mt-[1rem] w-139 h-49 bg-color1 rounded-custom font-bold text-white text-18'
        onClick={handleCheckIn}>출석하기</button>
    </div>
  );
}

export default AttendanceTab;
