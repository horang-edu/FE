import React from "react";
import check from "../../assets/img/check.png";
import more from "../../assets/img/more.png";
import { Link } from "react-router-dom";
import Gauge from "./Gauge";
import profile2 from "../../assets/img/profile2.png";

const StudyCard = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col items-center mt-[15%]">
        <div className="relative">
          <Gauge />
          <img src={profile2} alt="프로필사진" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] rounded-full z-0" />
        </div>
        <div className="mt-[25px] mb-[42px] relative">
          <div className="w-[16px] h-[16px] absolute top-[8px] left-[-24px] bg-[#F99363] text-[#fff] flex justify-center items-center text-[14px] rounded-sm">3</div>
          <h3 className="text-[22px] font-bold">코딩짱호랭이</h3>
          <p className="text-center text-[#97705E]">인헌초등학교</p>
        </div>
      </div>
      <div className="m-[25px] border rounded-[20px] border-[#F99363] border-opacity-[20%]">
        <div className="flex justify-between m-[22px]">
          <h3 className="font-yg-jalnan text-[#F99363] text-[1.25rem]">오늘의 과제</h3>
          <Link to="/study" className="flex items-center text-[#97705E]">
            더보기 <img src={more} alt="더보기" className="w-[16px] h-[16px] ml-[8px]" />
          </Link>
        </div>
        <div className="flex justify-between items-center mt-[14px] mx-[23px] mb-[27px]">
          <div>
            <h4 className="text-[#BDBFC3]">강의 영상</h4>
            <p className="text-[1.25rem] text-[#BDBFC3] font-semibold">프로그래밍이란?</p>
          </div>
          <div className="w-[33px] h-[33px] bg-[#FFF8EF] rounded-[12px] flex justify-center items-center">
            <img src={check} alt="체크" />
          </div>
        </div>
        <div className="flex justify-between items-center mt-[14px] mx-[23px] mb-[27px]">
          <div>
            <h4 className="text-[#464646]">학습하기</h4>
            <p className="text-[1.25rem] font-semibold">0과 1로 이루어진 세상</p>
          </div>
          <div className="w-[33px] h-[33px] bg-[#FFF8EF] rounded-[12px] flex justify-center items-center">{/* <img src={check} alt="체크" /> */}</div>
        </div>
      </div>
      <div className="m-[25px] border rounded-[20px] border-[#F99363] border-opacity-[20%]">
        <div className="flex justify-between m-[22px]">
          <h3 className="font-yg-jalnan text-[#F99363] text-[1.25rem]">새로운 학습</h3>
          <Link to="/study" className="flex items-center text-[#97705E]">
            더보기 <img src={more} alt="더보기" className="w-[16px] h-[16px] ml-[8px]" />
          </Link>
        </div>
        <div className="flex justify-between items-center mt-[14px] mx-[23px] mb-[27px]">
          <div>
            <h4 className="text-[#464646]">0단계</h4>
            <p className="text-[1.25rem] font-semibold">왜 배워야 할까요?</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-[14px] mx-[23px] mb-[27px]">
          <div>
            <h4 className="text-[#464646]">2단계</h4>
            <p className="text-[1.25rem] font-semibold">밭에 배추심기</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyCard;
