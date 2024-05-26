import instance from "./instance";

const getUserRanking = async () => {
  try {
    const { data } = await instance.get("/api/user/rank");
    return data.data;
  } catch (err) {
    throw err.response.data;
  }
};

const getSchoolRanking = async () => {
  try {
    const { data } = await instance.get("/api/school/rank");
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
      level: "",
      name: "",
      exp: "",
    };

    const { data } = await instance.get("/api/student/rank/8");
    const { data: user } = await instance.get("/api/student/8");

    myCampusRanking.rank = data.data.rankInSchool;
    myCampusRanking.school = user.data.school;
    myCampusRanking.level = Math.floor(user.data.exp / 100);
    myCampusRanking.name = user.data.name;
    myCampusRanking.exp = user.data.exp;

    return myCampusRanking;
  } catch (err) {
    throw err.response.data;
  }
};

const getCampusRanking = async () => {
  try {
    const { data } = await instance.get("/api/rank/in-school?school=휘문중학교&page=1&size=5");
    return data.data;
  } catch (err) {
    throw err.response.data;
  }
};

export { getUserRanking, getSchoolRanking, getMyCampusRanking, getCampusRanking };
