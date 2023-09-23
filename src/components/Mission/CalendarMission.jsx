import React from "react";
import Stamp from "../../assets/svg/Stamp.svg";

function CalendarMission() {
  return (
    <div class="mission-layout w-417 flex flex-row bg-color2 relative shadow-custom">
      <img class="absolute top-0 bottom-0 left-1/3 transform -translate-x-1/8 w-1/4 h-auto" src={Stamp} alt="stamp" />
      <div class="flex flex-col pl-25 pt-16 pb-19 justify-start relative">
        <div class="font-semibold text-color6 text-24">9월</div>
        <div class="font-semibold text-22 mb-10">매일 출석체크</div>
        <div class="font-medium text-16">
          꾸준히 코딩 학습하고 <span class="font-semibold">경험치</span>도 받아요!
        </div>
      </div>
    </div>
  );
}

export default CalendarMission;
