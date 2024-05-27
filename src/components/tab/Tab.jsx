import React, { useState } from "react";

function Tab({ tabData }) {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div>
      <ul className="flex justify-between mt-[1rem] mb-[7px]">
        {tabData.map((item, index) => {
          return (
            <li onClick={() => setCurrentTab(index)} className={index === currentTab ? "tabMenu-active" : "tabMenu"}>
              {item.menu}
            </li>
          );
        })}
      </ul>
      <div className="flex justify-center">
        <div className="w-[738px] h-[375px] bg-[#fff] rounded-[20px] border border-[#FEDDCA]">{tabData[currentTab].content}</div>
      </div>
    </div>
  );
}

export default Tab;
