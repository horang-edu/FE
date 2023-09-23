import React from "react";
import Todaystask from "../components/Todaystask";
import Wishlist from "../components/Wishlist";
import Progress from "../components/Progress";
import bg from "../assets/img/dashboradimg.png";
import Question from "../components/qna/Question";
import Answer from "../components/qna/Answer";
import Tab from "../components/tab/Tab";
function Dashboard() {
  const tabData = [
    { menu: "내가 한 질문", content: <Question />, type: "myquestion" },
    { menu: "내가 답변한 질문", content: <Answer />, type: "myquestion" },
  ];

  return (
    <div className="reletive w-full h-full bg-gray-100">
      <img src={bg} alt="s" className="absolute right-0 bottom-0" />
      <div className="flex-all-center ">
        <div className="text-indigo-600 font-bold text-2xl pt-20">나의 학습방</div>
        <div>
          <Progress />
          <div className="flex">
            <div className="mr-[4.0625rem]">
              <Todaystask />
              <Wishlist />
            </div>
            <div className="w-[29.0625rem]">
              <Tab tabData={tabData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
