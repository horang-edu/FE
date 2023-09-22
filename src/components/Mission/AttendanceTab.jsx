import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import '../../style/styles.css';

function AttendanceTab() {
  const today = new Date();
  today.setHours(today.getHours());
  const [value, onChange] = useState(new Date());
  const [attendanceDates, setAttendanceDates] = useState([]);
  
  function toLocalDateString(date) {
    date.setDate(date.getDate());
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }

  useEffect(() => {
    getAttendanceDates();
  }, [value]);

  async function getAttendanceDates() {
    try {
      const response = await axios.get('http://52.79.60.105:8080/api/attendance');
      console.log(response);
      setAttendanceDates(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function checkIn() {
    try {
      await axios.post(`http://52.79.60.105:8080/api/attendance?day=${value.toISOString().split('T')[0]}`);
      getAttendanceDates();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div class='drop-shadow-md flex flex-col items-center'>
      <Calendar 
        onChange={onChange}
        value={value}
        tileClassName={({ date }) => 
          attendanceDates.includes(toLocalDateString(date)) ? "highlight" : null}
        />
      <button class='mt-[1rem] w-139 h-49 bg-color1 rounded-custom font-bold text-white text-18'
      onClick={checkIn}>출석하기</button>
    </div>
  );
}

export default AttendanceTab;
