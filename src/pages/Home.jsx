import React from "react";
import Tab from "../components/tab/Tab";
import UserRanking from "../components/ranking/UserRanking";
import SchoolRanking from "../components/ranking/SchoolRanking";
import CampusRanking from "../components/ranking/CampusRanking";
import CalendarMission from "../components/mission/CalendarMission";
import Mission from "../components/mission/Mission";

function Home() {
  const tabData = [
    { menu: "사용자 순위", content: <UserRanking />, type: "userRanking" },
    { menu: "학교 별 순위", content: <SchoolRanking />, type: "schoolRanking" },
    { menu: "학교 내 순위", content: <CampusRanking />, type: "campusRanking" },
  ];

  const announcement = [
    { menu: "공지사항", content: <SchoolRanking />, type: "schoolRanking" },
    { menu: "Q & A", content: <UserRanking />, type: "userRanking" },
  ];
  const announcement = [
    { menu: "공지사항", content: <UserRanking /> },
    { menu: "Q & A", content: <UserRanking /> },
  ]

  return (
    <div>
      <div>
        안녕하세요, <span>코딩짱호랭이</span>님!
      </div>
      <div>
        <div>공지사항</div>
        <Tab tabData={announcement} />
      </div>
      <div class='flex'>
        <CalendarMission/>
        <Mission/>
      </div>
      <div>새로 업데이트 된 문제</div>
      <div className="w-[33.875rem]">
        <h2>순위 차트</h2>
        <Tab data={tabData} />
      </div>
    </div>
  );
}

export default Home;
