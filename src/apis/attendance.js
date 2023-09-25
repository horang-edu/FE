import instance from "./instance";

async function getAttendanceDates() {
  try {
    const response = await instance.get('/attendance');
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function checkIn(date) {
  try {
    await instance.post(`/attendance?day=${date}`);
    return getAttendanceDates();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { getAttendanceDates, checkIn};
