import axios from "axios";
import { getCookie } from "../utils/cookie";

const token = getCookie("token");
const instance = axios.create({
baseURL: process.env.REACT_APP_SERVER,
withCredentials: true,
headers: {
"Access-Control-Allow-Origin": "*",
Authorization: `${token}`,
},
});

export default instance;
