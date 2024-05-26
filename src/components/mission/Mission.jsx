import React from "react";

function Mission({ showModal, setShowModal }) {
  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div class="mission-layout w-[416px] h-[272px] bg-[#FFC0A2] text-[#6F3A22] font-semibold flex justify-between px-[22px] py-[28px]">
      <div>
        <h3 className="font-yg-jalnan text-[22px] mb-[27px]">일간미션 | 주간미션</h3>
        <div className="flex items-center">
          찜 목록에 저장 후 복습하기 <span className="w-[30px] h-[30px] rounded-full bg-[#FFFFFF] opacity-[50%] text-[#F99363] text-[12px] flex justify-center items-center ml-[10px]">+10</span>
        </div>
        <div className="flex items-center">
          질문 답변하기 <span className="w-[30px] h-[30px] rounded-full bg-[#FFFFFF] opacity-[50%] text-[#F99363] text-[12px] flex justify-center items-center ml-[10px]">+20</span>
        </div>
      </div>
      {/* 일간미션 */}
      {/* <div className="dayMission" class="pl-25 pt-16 pb-19 justify-start">
        <div class="flex flex-row items-center mb-40 ">
          <div class="font-bold text-color6 text-24">일간미션</div>
          <div class="bg-color2 text-color6 text-12 font-bold w-40 h-40 rounded-full flex items-center justify-center ml-12 shadow-custom">+10</div>
        </div>
        <div class="mr-31 font-medium">찜 목록에 저장 후 복습하기</div>
      </div> */}
      {/* 구역 나눔 */}
      {/* <div class="border-l-2 border-color3 h-full"></div> */}
      {/* 주간미션 */}
      {/* <div className="weekMission" class="pl-25 pt-16 pb-19 justify-start">
        <div class="flex flex-row items-center mb-40">
          <div class="font-bold text-color6 text-24">주간미션</div>
          <div class="bg-color2 text-color6 text-12 font-bold w-40 h-40 rounded-full flex items-center justify-center ml-12 shadow-custom">+20</div>
        </div>
        <div>
          <span class="text-color6 underline underline-offset-2 mr-1 font-medium">오늘</span>질문 답변하기
        </div>
      </div> */}
      {/* 모달 이동 버튼 */}
      <button onClick={handleClick} class="w-92 h-79 bg-white opacity-[50%] rounded-custom font-bold text-[#F99363] text-lg shadow-custom ml-24 my-auto">
        확인하기
      </button>
    </div>
  );
}

export default Mission;
