import instance from "./instance";

const getUserRanking = async () => {
  try {
    const { data } = await instance.get("/api/rank?page=1&size=5");
    return data.data;
  } catch (err) {
    throw err.response.data;
  }
};

const getMyRanking = async () => {
  try {
    const { data } = await instance.get("/api/student/rank/8");
    return data.data;
  } catch (err) {
    throw err.response.data;
  }
};

const getSchoolRanking = async () => {
  try {
    const { data } = await instance.get("/api/rank/school?page=1&size=5");
    return data.data;
  } catch (err) {
    throw err.response.data;
  }
};

const getMySchoolRanking = async () => {
  try {
    const { data } = await instance.get("/api/school/2");
    return data.data;
  } catch (err) {
    throw err.response.data;
  }
};

const getMyCampusRanking = async () => {
  try {
    const myCampusRanking = {
      school: "",
      rank: "",
    };

    const { data } = await instance.get("/api/student/rank/8");
    const { data: data2 } = await instance.get("/api/student/8");

    myCampusRanking.rank = data.data.rankInSchool;
    myCampusRanking.school = data2.data.school;

    return myCampusRanking;
  } catch (err) {
    throw err.response.data;
  }
};

const getCampusRanking = async () => {
  try {
    const { data } = await instance.get("/api/rank/in-school?school=휘문중학교");
    return data.data;
  } catch (err) {
    throw err.response.data;
  }
};

export { getUserRanking, getMyRanking, getSchoolRanking, getMySchoolRanking, getMyCampusRanking, getCampusRanking };
