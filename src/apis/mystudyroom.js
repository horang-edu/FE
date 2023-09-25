import instance from "../apis/instance";

export const fetchUserData = async (userId) => {
  try {
    const response = await instance.get(`/api/student/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchTasks = async () => {
  try {
    const response = await instance.get("/api/homework");
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addTask = async (newTask) => {
  try {
    const response = await instance.post("/api/homework", {
      topic: newTask,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchWishlist = async () => {
  try {
    const response = await instance.get("/api/dibs");
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteWishlistItem = async (id) => {
  try {
    await instance.delete(`/api/dibs/${id}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
