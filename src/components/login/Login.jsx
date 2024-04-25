import React from "react";
import { Link } from "react-router-dom";
import kakao_bg from "../../assets/img/kakao_bg.png";
import google_bg from "../../assets/img/google_bg.png";
import email_bg from "../../assets/img/email_bg.png";

function Login() {
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="w-[8.0625rem] h-[8.0625rem] mt-[2.1981rem] bg-[#F4F4F4]">로고</div>
      </div>
      <div className="mt-[3.5444rem] w-full flex flex-col items-center">
        <p>
          <button
            className="w-[18.6875rem] h-[2.8125rem] mb-[1.1625rem] text-[0.875rem] text-[#222]"
            style={{
              backgroundImage: `url(${kakao_bg})`,
            }}
            onClick={() => alert("준비중입니다.")}
          >
            카카오로 로그인하기
          </button>
        </p>
        <p>
          <button
            className="w-[18.6875rem] h-[2.8125rem] mb-[1.1625rem] text-[0.875rem] text-[#222]"
            style={{
              backgroundImage: `url(${google_bg})`,
            }}
            onClick={() => alert("준비중입니다.")}
          >
            구글로 로그인하기
          </button>
        </p>
        <p className="mb-[3.5994rem]">
          <Link to="/emailLogin">
            <button
              className="w-[18.6875rem] h-[2.8125rem] text-[0.875rem] text-[#fff]"
              style={{
                backgroundImage: `url(${email_bg})`,
              }}
            >
              이메일로 로그인하기
            </button>
          </Link>
        </p>
        <p className="flex justify-center items-center text-[#838181] mb-[1.5rem] text-[0.75rem]">
          <span className="w-[8.5rem] h-[1px] bg-[#CDCDCD] mr-[0.625rem]"></span> 또는 <span className="w-[8.5rem] h-[1px] bg-[#CDCDCD] ml-[0.625rem]"></span>
        </p>
        <p className="text-[0.75rem] mb-[2.8887rem] text-[#222]">
          아직 회원이 아니신가요?
          <span className="ml-[0.625rem] text-[#F99363] font-semibold">가입하기</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
