import { atom } from "recoil";

const isLoggedIn = atom({
  key: "isLoggedIn",
  default: false,
});


export default isLoggedIn;
