import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import dashboard from "../../../assets/svg/dashboard.svg";
import dashboardHover from "../../../assets/svg/dashboardHover.svg";
import home from "../../../assets/svg/home.svg";
import homeHover from "../../../assets/svg/homeHover.svg";
import study from "../../../assets/svg/study.svg";
import studyHover from "../../../assets/svg/studyHover.svg";
import practice from "../../../assets/svg/practice.svg";
import practiceHover from "../../../assets/svg/practiceHover.svg";

function Sidebar() {
  const [homeIcon, setHomeIcon] = useState(home);
  const [practiceIcon, setPracticeIcon] = useState(practice);
  const [studyIcon, setStudyIcon] = useState(study);
  const [dashboardIcon, setDashboardIcon] = useState(dashboard);

  return (
    <nav className="w-[6.25rem] bg-color3">
      <ul>
        <li className="w-[6.25rem] h-[6.25rem] flex-all-center">
          <button>
            <img src={logo} alt="로고" className="w-[4.625rem] h-[4.625rem]" />
          </button>
        </li>
        <Link to="/">
          <li className="w-[6.25rem] h-[6.25rem] flex-all-center  hover:bg-color5" onMouseEnter={() => setHomeIcon(homeHover)} onMouseLeave={() => setHomeIcon(home)}>
            <img src={homeIcon} alt="홈" />
          </li>
        </Link>
        <Link to="/practice">
          <li className="w-[6.25rem] h-[6.25rem] flex-all-center  hover:bg-color5" onMouseEnter={() => setPracticeIcon(practiceHover)} onMouseLeave={() => setPracticeIcon(practice)}>
            <img src={practiceIcon} alt="실습하기" />
          </li>
        </Link>
        <Link to="/study">
          <li className="w-[6.25rem] h-[6.25rem] flex-all-center  hover:bg-color5" onMouseEnter={() => setStudyIcon(studyHover)} onMouseLeave={() => setStudyIcon(study)}>
            <img src={studyIcon} alt="학습하기" />
          </li>
        </Link>
        <Link to="/dashboard">
          <li className="w-[6.25rem] h-[6.25rem] flex-all-center  hover:bg-color5" onMouseEnter={() => setDashboardIcon(dashboardHover)} onMouseLeave={() => setDashboardIcon(dashboard)}>
            <img src={dashboardIcon} alt="나의 학습방" />
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Sidebar;
