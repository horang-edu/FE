import React from "react";
import axios from "axios";

function WriteModal({ isOpen, onClose }) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = () => {
    // API 호출하여 글 작성하기
    const postData = { title, content };

    axios
      .post("your-api-endpoint", postData)
      .then((response) => {
        // 성공적으로 글이 작성되었을 때 할 작업 추가
        console.log("글이 성공적으로 작성되었습니다.", response.data);

        // 모달 닫기
        onClose();
      })
      .catch((error) => {
        // 에러 발생 시 처리
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
          <button
            className="border border-gray font-bold py-2 px-4 rounded-xl"
            style={{ width: "137px", height: "48px" }}
            onClick={onClose}
          >
            닫기
          </button>
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-xl"
            style={{ background: "#F99363", width: "137px", height: "48px" }}
            onClick={handleSubmit}
          >
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default WriteModal;
