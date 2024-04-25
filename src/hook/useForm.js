import { useState } from "react";

function useForm(initialState) {
  const [form, setForm] = useState(initialState);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const reset = (resetState = initialState) => {
    setForm(resetState);
  };

  return [form, handleFormChange, reset, setForm];
}

export default useForm;
