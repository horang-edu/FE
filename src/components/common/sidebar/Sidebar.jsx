import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
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
  const getIcon = (path) => {
    switch (path) {
      case '/':
        return location.pathname === path ? homeHover : home;
      case '/practice':
        return location.pathname === path ? practiceHover : practice;
      case '/study':
        return location.pathname === path ? studyHover : study;
      case '/dashboard':
        return location.pathname === path ? dashboardHover : dashboard;
      default:
        return home;
    }
  };
  const [currentIcon, setCurrentIcon] = useState({
    home: home,
    practice: practice,
    study: study,
    dashboard: dashboard
  });

  const location = useLocation();

  useEffect(() => {
    let newIcons = {
      home: location.pathname === "/" ? homeHover : home,
      practice: location.pathname === "/practice" ? practiceHover : practice,
      study: location.pathname === "/study" ? studyHover : study,
      dashboard:
        location.pathname === "/dashboard" ? dashboardHover : dashboard
    };
    setCurrentIcon(newIcons);
  }, [location]);

  return (
    <nav className="w-[6.25rem] bg-color3">
      <ul>
        <li className="w-[6.25rem] h-[6.25rem] flex-all-center">
          <button>
            <img src={logo} alt="로고" className="w-[4.625rem] h-[4.625rem]" />
          </button>
        </li>
        <NavLink to="/">
        <li
            className="w-[6.25rem] h-[6.25rem] flex-all-center hover:bg-color5"
            onMouseEnter={() =>
              setCurrentIcon({ ...currentIcon, home: homeHover })
            }
            onMouseLeave={() =>
              setCurrentIcon({ ...currentIcon, home: getIcon("/") })
            }
          >
            <img src={currentIcon.home} alt="홈" />
          </li>
        </NavLink>
        <NavLink to="/practice">
        <li
            className="w-[6.25rem] h-[6.25rem] flex-all-center hover:bg-color5"
            onMouseEnter={() =>
              setCurrentIcon({ ...currentIcon, practice: practiceHover })
            }
            onMouseLeave={() =>
              setCurrentIcon({ ...currentIcon, practice: getIcon("/practice") })
            }
          >
            <img src={currentIcon.practice} alt="실습하기" />
          </li>
        </NavLink>
        <NavLink to="/study">
        <li
            className="w-[6.25rem] h-[6.25rem] flex-all-center hover:bg-color5"
            onMouseEnter={() =>
              setCurrentIcon({ ...currentIcon, study: studyHover })
            }
            onMouseLeave={() =>
              setCurrentIcon({ ...currentIcon, study: getIcon("/study") })
            }
          >
            <img src={currentIcon.study} alt="학습하기" />
          </li>
        </NavLink>
        <NavLink to="/dashboard">
        <li
            className="w-[6.25rem] h-[6.25rem] flex-all-center hover:bg-color5"
            onMouseEnter={() =>
              setCurrentIcon({ ...currentIcon, dashboard: dashboardHover })
            }
            onMouseLeave={() =>
              setCurrentIcon({ ...currentIcon, dashboard: getIcon("/dashboard") })
            }
          >
            <img src={currentIcon.dashboard} alt="나의 학습방" />
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Sidebar;
