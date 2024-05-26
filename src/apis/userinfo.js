import instance from "./instance";

const getUserInfo = async () => {
  try {
    const { data } = await instance.get("/api/user");
    return data.data;
  } catch (err) {
    throw err.response.data;
  }
};

export default getUserInfo;
