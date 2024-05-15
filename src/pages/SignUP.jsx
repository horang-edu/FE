import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isTeacher, setIsTeacher] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      alert("이름과 비밀번호를 입력해주세요.");
      return;
    }
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const userData = {
      username,
      password,
      role: isTeacher, // 'role' is set based on 'isTeacher'
    };

    try {
      const response = await axios.post("https://example.com/api/signup", userData);
      console.log("Response:", response);
      alert("Signup successful!");
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred during signup.");
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col justify-center" style={{ margin: "auto" }}>
        <div className="absolute top-[-81px] left-[46%]">
          <button
            onClick={() => setIsTeacher(false)}
            style={{ fontWeight: !isTeacher ? "bold" : "normal" }}
            className="w-[100px] h-[54px] bg-[white] rounded-[20px] border-solid border-[1px] border-[#FFD7C3] font-yg-jalnan text-[#F99363] text-[18px]"
          >
            학생
          </button>
          <button
            onClick={() => setIsTeacher(true)}
            style={{ fontWeight: isTeacher ? "bold" : "normal" }}
            className="w-[100px] h-[54px] bg-[white] rounded-[20px] border-solid border-[1px] border-[#FFD7C3] font-yg-jalnan text-[#F99363] text-[18px] ml-[10px]"
          >
            선생님
          </button>
        </div>
        {/* <div className="flex justify-between">
          <div className="flex justify-center items-center">
            <div onClick={() => setIsTeacher(false)} style={{ fontWeight: !isTeacher ? "bold" : "normal" }}>
              학생
            </div>
            <div onClick={() => setIsTeacher(true)} style={{ fontWeight: isTeacher ? "bold" : "normal" }}>
              선생님
            </div>
          </div>
        </div> */}
        <div
          className="border"
          style={{
            width: "391px",
            height: "553px",
            padding: "77px 33px 77px 33px",
            borderColor: "#FFD7C3",
            borderRadius: "10px",
            background: "#fff8ef",
          }}
        >
          <div className="text-xl font-yg-jalnan text-yellow-900 mb-9">회원정보 입력</div>
          <input type="text" placeholder="이메일 주소 입력" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full h-[2.8125rem] mb-9 text-[0.875rem] p-[0.75rem] rounded-[10px] border-solid border-[1px] border-[#FFD7C3]" />
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
          <button onClick={handleSubmit} type="submit" className="w-full h-[2.8125rem] font-yg-jalnan text-white bg-[#FFD7C3] rounded-[10px] hover:bg-[#F99363]">
            회원가입 완료
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
