import React, { useState } from "react";
import Tab from "../components/tab/Tab";
import UserRanking from "../components/ranking/UserRanking";
import SchoolRanking from "../components/ranking/SchoolRanking";
import CampusRanking from "../components/ranking/CampusRanking";
import CalendarMission from "../components/mission/CalendarMission";
import Mission from "../components/mission/Mission";
import Modal from "../components/mission/Modal";
import Update from "../components/Update";
import logo from "../assets/svg/alarm.svg";
import Cookies from "js-cookie";
import StudyCard from "../components/studycard/StudyCard";
import profile from "../assets/img/profile2.png";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const tabData = [
    { menu: "사용자 순위", content: <UserRanking /> },
    { menu: "학교 별 순위", content: <SchoolRanking /> },
    { menu: "학교 내 순위", content: <CampusRanking /> },
  ];

  return (
    <div className="w-full h-full flex">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <div class="flex mb-[3.5rem]">
          <CalendarMission showModal={showModal} setShowModal={setShowModal} />
          <Mission showModal={showModal} setShowModal={setShowModal} />
        </div>
        {showModal && <Modal show={showModal} onClose={() => setShowModal(false)} />}
        <div className="w-[753px] h-[490px]">
          <h3 className="font-yg-jalnan text-[1.5rem] text-[#6F3A22]">순위 차트</h3>
          <Tab tabData={tabData} />
        </div>
      </div>
      <div className="w-[27.5%] h-full bg-[#fff]">
        <StudyCard />
      </div>
    </div>
  );
}

export default Home;
