import React from "react";
import Stamp from "../../assets/svg/Stamp.svg";

function CalendarMission({ showModal, setShowModal }) {
  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div onClick={handleClick} class="mission-layout w-[303px] flex flex-row bg-[#F99363] relative shadow-custom mr-[2.125rem] cursor-pointer">
      <img class="absolute top-0 bottom-0 left-[50.7%] transform -translate-x-1/8 w-[40%] h-auto" src={Stamp} alt="stamp" />
      <div class="flex items-center mx-auto relative">
        <div>
          <div class="font-yg-jalnan text-white text-24">9월</div>
          <div class="font-yg-jalnan text-white text-22 mb-10">매일 출석체크</div>
          <div class="font-medium text-16 mt-[30px]">
            꾸준히 코딩 학습하고 <span class="font-semibold">경험치</span>도 받아요!
          </div>
        </div>
      </div>
    </div>
  );
}
export default CalendarMission;
