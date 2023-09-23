import React, { useState } from "react";

function Tab({ tabData }) {
  const [currentTab, setCurrentTab] = useState(0);
  const type = [];

  const padding = {
    userRanking: "px-[2.625rem] py-5",
    schoolRanking: "px-[5.5rem] py-5",
    campusRanking: "px-[2.625rem] py-5",
    notice: "px-[2.375rem] py-0",
    question: "px-[2.375rem] py-0",
    myquestion: "px-[1.8125rem] py-0",
  };

  const h = {
    userRanking: "h-[23.4375rem]",
    schoolRanking: "h-[23.4375rem]",
    campusRanking: "h-[23.4375rem]",
    notice: "h-[12.8125rem]",
    question: "h-[12.8125rem]",
    myquestion: "h-[21.75rem]",
  };

  return (
    <div>
      <ul className="flex ml-[1.4375rem]">
        {tabData.map((item, index) => {
          type.push(item.type);
          return (
            <li onClick={() => setCurrentTab(index)} className={index === currentTab ? "tabMenu-active" : "tabMenu"}>
              {item.menu}
            </li>
          );
        })}
      </ul>
      <div className={`${padding[type[currentTab]]} ${h[type[currentTab]]} w-full rounded-custom shadow-custom bg-white`}>{tabData[currentTab].content}</div>
    </div>
  );
}

export default Tab;
