import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isTeacher, setIsTeacher] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !password) {
      alert("이름, 이메일, 비밀번호를 입력해주세요.");
      return;
    }
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const userData = {
      name,
      email,
      password,
      role: isTeacher,
    };

    try {
      const response = await axios.post(
        "http://13.209.48.232:8080/api/user/signup",
        userData
      );
      console.log("Response:", response);
      alert("회원가입 완료!");
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
      alert("회원가입 실패!");
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col justify-center" style={{ margin: "auto" }}>
        <div className="absolute top-[-81px] left-[46%]">
          <button
            onClick={() => setIsTeacher(false)}
            style={{
              fontWeight: !isTeacher ? "bold" : "normal",
              backgroundColor: !isTeacher ? "#F99363" : "#FFF8EF",
              color: !isTeacher ? "white" : "#F99363",
              borderColor: "#F99363",
            }}
            className="w-[100px] h-[54px] rounded-[20px] border-solid border-[1px] font-yg-jalnan text-[18px] hover:border-[#F99363]"
          >
            학생
          </button>
          <button
            onClick={() => setIsTeacher(true)}
            style={{
              fontWeight: isTeacher ? "bold" : "normal",
              backgroundColor: isTeacher ? "#F99363" : "#FFF8EF",
              color: isTeacher ? "white" : "#F99363",
              borderColor: "#F99363",
            }}
            className="w-[100px] h-[54px] rounded-[20px] border-solid border-[1px] ml-[10px] font-yg-jalnan text-[18px] hover:border-[#F99363]"
          >
            선생님
          </button>
        </div>
        <form
          className="border"
          style={{
            width: "391px",
            height: "613px",
            padding: "77px 33px 77px 33px",
            borderColor: "#FFD7C3",
            borderRadius: "10px",
            background: "#fff8ef",
          }}
          onSubmit={handleSubmit}
        >
          <div className="text-xl font-yg-jalnan text-yellow-900 mb-9">
            회원정보 입력
          </div>
          <input
            type="text"
            placeholder="이름 입력"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-[2.8125rem] mb-9 text-[0.875rem] p-[0.75rem] rounded-[10px] border-solid border-[1px] border-[#FFD7C3]"
          />
          <input
            type="email"
            placeholder="이메일 주소 입력"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[2.8125rem] mb-9 text-[0.875rem] p-[0.75rem] rounded-[10px] border-solid border-[1px] border-[#FFD7C3]"
          />
          <input
            type="password"
            placeholder="8자리 이상 영문, 숫자, 특수문자 포함"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[2.8125rem] mb-3 text-[0.875rem] p-[0.75rem] rounded-[10px] border-solid border-[1px] border-[#FFD7C3]"
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full h-[2.8125rem] mb-9 text-[0.875rem] p-[0.75rem] rounded-[10px] border-solid border-[1px] border-[#FFD7C3]"
          />
          <button
            type="submit"
            className="w-full h-[2.8125rem] font-yg-jalnan text-white bg-[#FFD7C3] rounded-[10px] hover:bg-[#F99363]"
          >
            회원가입 완료
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
