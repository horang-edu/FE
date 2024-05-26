import React, { useEffect } from "react";
import useForm from "../../hook/useForm";
import { useMutation } from "react-query";
import emailLogin from "../../apis/login";
import { useNavigate } from "react-router-dom";

function EmailLogin() {
  const initialState = {
    email: "",
    password: "",
  };
  const [form, handleFormChange, resetForm] = useForm(initialState);
  const { email, password } = form;
  const navigate = useNavigate();

  const mutation = useMutation(emailLogin, {
    onSuccess: (result) => {
      if (result.data.statusCode === "OK") {
        alert("로그인에 성공하였습니다.");
        navigate("/");
      }
    },
  });

  const handleLoginClick = () => {
    if (!email || !password) {
      alert("아이디/패스워드를 모두 입력해주세요.");
      return;
    }
    mutation.mutate(form);
  };

  return (
    <div className="px-[2.4375rem] py-[4.875rem]">
      <h2 className="font-yg-jalnan text-[1.125rem] text-[#6F3A22] mb-[2.3125rem]">이메일 로그인</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLoginClick();
        }}
      >
        <label className="block text-[0.875rem] font-semibold mb-[0.625rem]">아이디</label>
        <input
          className="w-full h-[2.8125rem] mb-[2.5rem] text-[0.875rem] p-[0.75rem] rounded-[10px] border-solid border-[1px] border-[#FFD7C3]"
          type="email"
          name="email"
          value={form.email}
          placeholder={"이메일 주소 입력"}
          onChange={handleFormChange}
        />
        <label className="block text-[0.875rem] font-semibold mb-[0.625rem]">비밀번호</label>
        <input
          className="w-full h-[2.8125rem] mb-[2.5rem] text-[0.875rem] p-[0.75rem] rounded-[10px] border-solid border-[1px] border-[#FFD7C3]"
          type="password"
          name="password"
          value={form.password}
          placeholder={"8자리 이상 영문, 숫자, 특수문자 포함"}
          onChange={handleFormChange}
        />
        <div>
          <button type="submit" className="w-full h-[2.8125rem] font-yg-jalnan text-white bg-[#FFD7C3] rounded-[10px] hover:bg-[#F99363]">
            로그인
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmailLogin;
