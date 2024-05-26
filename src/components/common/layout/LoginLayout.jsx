import React from "react";
import { Outlet } from "react-router-dom";
import login_bg from "../../../assets/img/login_bg.png";
import coding_lang from "../../../assets/img/coding-language.png";
import kitty from "../../../assets/img/kitty.png";

function LoginLayout() {
  return (
    <div className="h-[100vh] flex">
      <div className="w-[40%] h-full bg-[#FFF8EF] flex flex-col justify-between">
        <div className="bg-[#FFF8EF] mt-[15.31rem]">
          <p className="font-yg-jalnan text-center relative mb-4 text-[#F99363] text-[1.875rem]">
            <img src={coding_lang} alt="코딩 언어들" className="absolute top-[-2.75rem] left-[59%]" />
            야옹이와 즐겁게 코딩 공부해요!
          </p>
          <p className="text-center text-[#97705E] text-[1.25rem]">로그인 후 더 많은 서비스를 이용해보세요</p>
        </div>
        <div className="w-full bg-[#FFF8EF]">
          <img src={login_bg} alt="로그인 배경" />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="relative w-[24.4375rem] h-[34.5625rem] bg-[#FFF8EF] border border-[#F99363] rounded-xl border-opacity-20">
          <img src={kitty} alt="고양이 캐릭터" className="w-[6.625rem] h-[6.625rem] absolute top-[-70px] left-[1.625rem] -z-10" />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LoginLayout;
