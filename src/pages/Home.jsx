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

function Home() {
  const [showModal, setShowModal] = useState(false);
  const tabData = [
    { menu: "사용자 순위", content: <UserRanking /> ,type:'userRank'},
    { menu: "학교 별 순위", content: <SchoolRanking />,type:'schoolRank' },
    { menu: "학교 내 순위", content: <CampusRanking />,type:'campusRank' },
  ];

  const announcement = [
    { menu: "공지사항", content: <Announcement />, type: 'notice' },
    { menu: "Q & A", content: <QA />, type: 'question' },
  ]

  return (
    <div>
      <div>
        안녕하세요, <span>코딩짱호랭이</span>님!
      </div>
      <div class="w-[62.1875rem]">
        <Tab tabData={announcement}/>
      </div>
      <div class='flex'>
        <CalendarMission/>
        <Mission showModal={showModal} setShowModal={setShowModal}/>
      </div>
      {showModal && (
        <Modal show={showModal} onClose={() => setShowModal(false)} />
      )}
      <div>새로 업데이트 된 문제</div>
      <div className="w-[33.875rem]">
        <h2>순위 차트</h2>
        <Tab tabData={tabData} />
      </div>
    </div>
  );
}

export default Home;
