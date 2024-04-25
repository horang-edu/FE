import React from "react";

function LoginInput({ type, name, value, readOnly, onChange, placeholder }) {
  return <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange}></input>;
}

export default LoginInput;
