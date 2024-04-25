import React, { useState } from "react";
import { ReactComponent as BG } from "../assets/svg/signUp.svg";
import { ReactComponent as Cat } from "../assets/svg/signUpCat.svg";

function SignUP() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isTeacher, setIsTeacher] = useState(false); // 선생님 여부 상태 추가
  const [verificationCode, setVerificationCode] = useState(""); // 인증 번호 상태 추가

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에 폼 제출 로직을 추가할 수 있습니다.
    console.log("Submitted!");
    console.log("Username:", username);
    console.log("Password:", password);
    if (isTeacher) {
      console.log("Verification Code:", verificationCode);
    }
  };

  return (
    <div className="flex">
      <div className="fix">
        <BG />
      </div>
      <div className="flex flex-col justify-center" style={{ margin: "auto" }}>
        <div className="flex justify-between ">
          <div>
            <Cat />
          </div>
          <div className="flex justify-center items-center">
            <div onClick={() => setIsTeacher(false)}>학생</div>
            <div onClick={() => setIsTeacher(true)}>선생님</div>
          </div>
        </div>
        <div
          className="border"
          style={{
            width: "391px",
            height: "553px",
            padding: "77px 33px 77px 33px",
            borderColor: "#f99363",
            borderRadius: "10px",
            background: "#fff8ef",
          }}
        >
          <div className="text-xl font-bold text-yellow-900 mb-9">
            회원정보 입력
          </div>
          <div className="mb-3">아이디</div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded w-full p-2 mb-9"
          />
          <div className="mb-3">비밀번호</div>
          <input
            type="password"
            placeholder="비밀번호 "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-#f99363 rounded w-full p-2 mb-3"
          />
          <input
            type="password"
            placeholder="비밀번호 확인 "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded w-full p-2 mb-9"
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded block w-full h-11"
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUP;
