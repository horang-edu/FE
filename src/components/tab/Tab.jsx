import React, { useState } from "react";

function Tab({ tabData }) {
  const [currentTab, setCurrentTab] = useState(0);
  const type = [];

  const padding = {
    userRanking: "px-[2.625rem] py-5",
    schoolRanking: "px-[8rem] py-5",
    campusRanking: "px-[2.625rem] py-5",
    // campusRanking: "px-[4.5rem] py-5",
    notice: "px-[2.375rem] py-8",
    question: "px-[1.875rem] pt-5 pb-[2.375rem]",
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
      <div className={`${padding[type[currentTab].type]} w-full rounded-custom shadow-custom bg-white`}>{tabData[currentTab].content}</div>
    </div>
  );
}

export default Tab;
