import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default instance;
