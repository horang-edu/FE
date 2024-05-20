import React, { useState } from "react";
import axios from "axios";
import { getCookie } from "../utils/cookie";

function WriteModal({ isOpen, onClose, category }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = () => {
    // Create postRequestDto
    const token = getCookie("token");
    const postRequestDto = {
      title: title,
      content: content,
      category: category,
    };

    // API call
    axios
      .post("http://3.34.10.94:8080/api/post", postRequestDto, {
        headers: {
          Authorization: `${token}`, // Added "Bearer" prefix
          "Content-Type": "application/json", // Set content type to JSON
        },
      })
      .then((response) => {
        // Handle success
        console.log("글이 성공적으로 작성되었습니다.", response.data);
        onClose(); // Close modal
      })
      .catch((error) => {
        // Handle error
        console.error("글 작성 중 오류가 발생했습니다.", error);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div
        className="bg-white p-8 rounded-3xl "
        style={{
          width: "702px",
          height: "542px",
        }}
      >
        <h2 className="text-2xl font-bold mb-8" style={{ color: "#6F3A22" }}>
          글 작성하기
        </h2>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="w-full border border-gray-300 rounded p-2 mb-4"
          style={{ color: "gray", width: "635px", height: "47px" }}
          placeholder="제목을 입력해주세요."
        />
        <textarea
          value={content}
          onChange={handleContentChange}
          className="w-full h-40 border border-gray-300 rounded p-2 mb-6"
          style={{ color: "gray", width: "635px", height: "286px" }}
          placeholder="내용을 입력해주세요."
        ></textarea>
        <div className="flex justify-center items-center gap-5">
          <div
            onClick={onClose}
            className="flex justify-center items-center w-[11.9375rem] h-[4.1875rem] rounded-[1.25rem] border border-transparent hover:border-[#C0C0C0] bg-[#ffffff]"
          >
            <span className="">취소</span>
          </div>
          <div
            onClick={handleSubmit}
            className="flex justify-center items-center w-[11.9375rem] h-[4.1875rem] rounded-[1.25rem] border border-transparent hover:border-[#F99363] bg-[#FFF8EF]"
          >
            <span className="">등록하기</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteModal;
