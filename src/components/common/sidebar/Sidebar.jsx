import React, { useState } from "react";
import home from "../../../assets/img/home.png";
import lecture from "../../../assets/img/lecture.png";
import study from "../../../assets/img/study.png";
import dictionary from "../../../assets/img/dictionary.png";
import community from "../../../assets/img/community.png";
import mypage from "../../../assets/img/mypage.png";
import idea_logo from "../../../assets/img/idea_logo.png";
import logout from "../../../assets/img/logout.png";
import { NavLink } from "react-router-dom";
import Chat from "../../chat/Chat"; // Chat 컴포넌트를 올바르게 불러옵니다.
import { getCookie, setCookie } from "../../../utils/cookie";

const Sidebar = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // 야옹이에게 질문하기 버튼을 클릭할 때 호출되는 함수입니다.
  const handleChatButtonClick = () => {
    setIsChatOpen((prevIsChatOpen) => !prevIsChatOpen);
  };

  const handleLogoutClick = () => {
    setCookie("token", "", -1);
    alert("로그아웃 되었습니다.");
    window.location.href = "/login";
  };

  return (
    <div className="w-full h-full bg-[#fff]">
      <ul className="w-full pt-[8.6875rem] flex flex-col items-center">
        <li className="w-[84%]">
          <NavLink to="/" className={({ isActive }) => `w-full h-[58px] hover:bg-[#FFF8EF] rounded-[10px] flex items-center font-yg-jalnan text-[0.875rem] ${isActive ? "bg-[#FFF8EF] text-[#F99363]" : "text-[#97705E] hover:text-[#F99363]"}`}>
            <img src={home} alt="홈" className="ml-[18px] mr-[15px]" />홈
          </NavLink>
        </li>
        <li className="w-[84%]">
          <NavLink to="/study" className={({ isActive }) => `w-full h-[58px] hover:bg-[#FFF8EF] rounded-[10px] flex items-center font-yg-jalnan text-[0.875rem] ${isActive ? "bg-[#FFF8EF] text-[#F99363]" : "text-[#97705E] hover:text-[#F99363]"}`}>
            <img src={lecture} alt="강의 영상" className="ml-[18px] mr-[15px]" />
            강의 영상
          </NavLink>
        </li>
        <li className="w-[84%]">
          <NavLink to="/learning" className={({ isActive }) => `w-full h-[58px] hover:bg-[#FFF8EF] rounded-[10px] flex items-center font-yg-jalnan text-[0.875rem] ${isActive ? "bg-[#FFF8EF] text-[#F99363]" : "text-[#97705E] hover:text-[#F99363]"}`}>
            <img src={study} alt="학습하기" className="ml-[18px] mr-[15px]" />
            야옹 학습하기
          </NavLink>
        </li>
        <li className="w-[84%]">
          <NavLink
            to="/dictionary"
            className={({ isActive }) => `w-full h-[58px] hover:bg-[#FFF8EF] rounded-[10px] flex items-center font-yg-jalnan text-[0.875rem] ${isActive ? "bg-[#FFF8EF] text-[#F99363]" : "text-[#97705E] hover:text-[#F99363]"}`}
          >
            <img src={dictionary} alt="사전" className="ml-[18px] mr-[15px]" />
            야옹 사전
          </NavLink>
        </li>
        <li className="w-[84%]">
          <NavLink to="/community" className={({ isActive }) => `w-full h-[58px] hover:bg-[#FFF8EF] rounded-[10px] flex items-center font-yg-jalnan text-[0.875rem] ${isActive ? "bg-[#FFF8EF] text-[#F99363]" : "text-[#97705E] hover:text-[#F99363]"}`}>
            <img src={community} alt="커뮤니티" className="ml-[18px] mr-[15px]" />
            커뮤니티
          </NavLink>
        </li>
        <li className="w-[84%]">
          <NavLink to="/dashboard" className={({ isActive }) => `w-full h-[58px] hover:bg-[#FFF8EF] rounded-[10px] flex items-center font-yg-jalnan text-[0.875rem] ${isActive ? "bg-[#FFF8EF] text-[#F99363]" : "text-[#97705E] hover:text-[#F99363]"}`}>
            <img src={mypage} alt="나의 학습방" className="ml-[18px] mr-[15px]" />
            나의 학습방
          </NavLink>
        </li>
      </ul>
      <div className="w-full flex flex-col items-center mt-[240px]">
        <button onClick={handleChatButtonClick} className="w-[84%] h-[72px] flex justify-center items-center relative bg-[#FFF8EF] font-yg-jalnan text-[#F99363] rounded-[10px]">
          <img src={idea_logo} alt="로고" className="w-[98px] h-[98px] absolute top-[-100%]" />
          야옹이에게 질문하기
        </button>
        <button className="w-[66%] flex justify-between mt-[50px]" onClick={handleLogoutClick}>
          <h3 className="text-[#97705E]"> 로그아웃 하기</h3>
          <img src={logout} alt="로그아웃" />
        </button>
      </div>
      {isChatOpen && <Chat />}
    </div>
  );
};

export default Sidebar;
