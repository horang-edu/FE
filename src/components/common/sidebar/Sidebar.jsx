import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import dashboard from "../../../assets/svg/dashboard.svg";
import home from "../../../assets/svg/home.svg";
import study from "../../../assets/svg/study.svg";
import practice from "../../../assets/svg/practice.svg";

function Sidebar() {
  return (
    <nav className="w-[6.25rem] bg-color3">
      <ul>
        <li className="w-[6.25rem] h-[6.25rem] flex-all-center">
          <button>
            <img src={logo} alt="로고" className="w-[4.625rem] h-[4.625rem]" />
          </button>
        </li>
        <Link to="/">
          <li className="w-[6.25rem] h-[6.25rem] flex-all-center  hover:bg-color5">
            <img src={home} alt="홈" className="w-10 h-[2.125rem]" />
          </li>
        </Link>
        <Link to="/practice">
          <li className="w-[6.25rem] h-[6.25rem] flex-all-center  hover:bg-color5">
            <img src={practice} alt="실습하기" className="w-10 h-10" />
          </li>
        </Link>
        <Link to="/study">
          <li className="w-[6.25rem] h-[6.25rem] flex-all-center  hover:bg-color5">
            <img src={study} alt="학습하기" className="w-10 h-[1.9319rem]" />
          </li>
        </Link>
        <Link to="/dashboard">
          <li className="w-[6.25rem] h-[6.25rem] flex-all-center  hover:bg-color5">
            <img src={dashboard} alt="나의 학습방" className="w-10 h-10" />
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Sidebar;
