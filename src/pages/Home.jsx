import React, { useState } from "react";
import Tab from "../components/tab/Tab";
import UserRanking from "../components/ranking/UserRanking";
import SchoolRanking from "../components/ranking/SchoolRanking";
import CampusRanking from "../components/ranking/CampusRanking";
import CalendarMission from "../components/mission/CalendarMission";
import Mission from "../components/mission/Mission";
import Announcement from "../components/announcement/Announcement";
import QA from "../components/announcement/QA";
import Modal from "../components/mission/Modal";
import Update from "../components/Update";
import logo from "../assets/svg/alarm.svg";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const tabData = [
    { menu: "사용자 순위", content: <UserRanking />, type: "userRanking" },
    { menu: "학교 별 순위", content: <SchoolRanking />, type: "schoolRanking" },
    { menu: "학교 내 순위", content: <CampusRanking />, type: "campusRanking" },
  ];

  const announcement = [
    { menu: "학급 공지사항", content: <Announcement />, type: "notice" },
    { menu: "Q & A", content: <QA />, type: "question" },
  ];

  return (
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="flex ml-auto mt-[3.0625rem] mb-[0.9375rem] mr-[10%]">
        <div>
          안녕하세요, <span class="font-semibold">cozy 님!</span>
        </div>
        <img class="ml-2" src={logo} alt="배경" />
      </div>

      <div class="w-[62.1875rem] mb-[1.3125rem]">
        <Tab tabData={announcement} />
      </div>
      <div class="flex mb-[3.5rem]">
        <CalendarMission showModal={showModal} setShowModal={setShowModal} />
        <Mission showModal={showModal} setShowModal={setShowModal} />
      </div>
      {showModal && <Modal show={showModal} onClose={() => setShowModal(false)} />}
      <div class="flex">
        <div>
          <div class="text-24 font-semibold px-[1.3125rem] mb-[1.0625rem]">새로 업데이트 된 문제</div>
          <Update />
        </div>
        <div className="w-[33.875rem] ml-[2.125rem] h-[463px]">
          <h2 class="text-24 font-semibold px-[1.3125rem] mb-[1.0625rem]">순위 차트</h2>
          <Tab tabData={tabData} />
        </div>
      </div>
    </div>
  );
}

export default Home;
