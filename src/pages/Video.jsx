import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import YouTube from "react-youtube";
import { videoList } from "./Study";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill 스타일시트 import
import "../style/styles.css";
// import { ReactComponent as QuestionIcon } from "../assets/svg/question.svg";
// import { ReactComponent as PickIcon } from "../assets/svg/pick.svg";
// import { ReactComponent as EditerIcon } from "../assets/svg/editer.svg";
import { getCookie } from "../utils/cookie";

function Video() {
  const { id } = useParams();
  const [videoPlayTime, setVideoPlayTime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editorHtml, setEditorHtml] = useState("");
  const [showNotes, setShowNotes] = useState(true);
  const [showQuestion, setShowQuestion] = useState(true);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [prevShowNotes, setPrevShowNotes] = useState(true);
  const [prevShowQuestion, setPrevShowQuestion] = useState(true);

  useEffect(() => {
    const fetchVideoPlayTime = async () => {
      try {
        const token = getCookie("token");
        const response = await axios.get(
          `http://3.34.10.94:8080/api/video/${id}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        setVideoPlayTime(response.data.data.playTime);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching video play time:", error);
        setLoading(false);
      }
    };

    fetchVideoPlayTime();
  }, [id]);

  const updateVideoPlayTime = async (newPlayTime) => {
    try {
      const token = getCookie("token");
      await axios.patch(
        "http://3.34.10.94:8080/api/video",
        { id: parseInt(id), playTime: Math.floor(newPlayTime) },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      setVideoPlayTime(newPlayTime);
    } catch (error) {
      console.error("Error updating video play time:", error);
    }
  };

  const handleVideoStateChange = (event) => {
    const playerState = event.data;

    if (playerState === 0 || playerState === 2) {
      updateVideoPlayTime(event.target.getCurrentTime().toString());
    }
  };

  const video = videoList.find((item) => item.id === parseInt(id));

  if (!video) {
    return <div>Video not found.</div>;
  }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  const opts = {
    height: "409",
    width: "727", //

    playerVars: {
      start: videoPlayTime,
    },
  };

  const roundedYouTubeStyle = {
    borderRadius: "20Px",
    overflow: "hidden",
  };

  const handleSubmitQuestion = () => {
    const token = getCookie("token");
    const postRequestDto = {
      title,
      content,
      category: "QUESTION",
    };

    axios
      .post("http://3.34.10.94:8080/api/post", postRequestDto, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        console.log("글이 성공적으로 작성되었습니다.", response.data);
        alert("글이 작성되었습니다.");
        setTitle("");
        setContent("");
        setShowNotes(prevShowNotes);
        setShowQuestion(prevShowQuestion);
      })
      .catch((error) => {
        console.error("글 작성 중 오류가 발생했습니다.", error);
      });
  };

  const handlePickVideo = async () => {
    try {
      const token = getCookie("token");
      const response = await axios.post(
        `http://3.34.10.94:8080/api/video/zzim/${id}`,
        {},
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      console.log("Video picked successfully:", response.data);
      alert("찜 등록되었습니다.");
    } catch (error) {
      console.error("Error picking video:", error);
    }
  };

  const handleQuestionInputChange = (e) => {
    setContent(e.target.value);
  };

  const handleQuestionTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCancel = () => {
    setShowNotes(prevShowNotes);
    setShowQuestion(prevShowQuestion);
  };

  const handleLectureNotesClick = (event) => {
    event.preventDefault();
    alert("준비중입니다");
  };
  return (
    <div className="flex flex-col m-16 ">
      <div className="flex justify-center">
        <div>
          <div className="text-2xl font-bold text-464646 font-yg-jalnan">
            {videoList.find((item) => item.id === parseInt(id)).title}
          </div>
          <div className="flex h-52rem">
            <div className="mr-12 h-52rem">
              <div className="rounded-youtube" style={roundedYouTubeStyle}>
                <YouTube
                  videoId={video.url}
                  opts={opts}
                  onStateChange={handleVideoStateChange}
                />
              </div>
              <div className="flex flex-row justify-between mt-6 mb-6">
                <div
                  className="font-yg-jalnan text-xl text-[#F99363] flex justify-center items-center w-[11.9375rem] h-[4.1875rem] rounded-[1.25rem] border border-[#FFF8EF] bg-[#FFD7C3] hover:bg-[#F99363] hover:text-[#FFD7C3]"
                  onClick={() => setShowQuestion()}
                >
                  학습 질문
                </div>
                <div>
                  <div
                    className="font-yg-jalnan text-xl text-[#F99363] flex justify-center items-center w-[11.9375rem] h-[4.1875rem] rounded-[1.25rem] border border-[#FFF8EF] bg-[#FFD7C3] hover:bg-[#F99363] hover:text-[#FFD7C3]"
                    onClick={handlePickVideo}
                  >
                    찜하기
                  </div>
                </div>
                <div
                  className="font-yg-jalnan text-xl text-[#F99363] flex justify-center items-center w-[11.9375rem] h-[4.1875rem] rounded-[1.25rem] border border-[#FFF8EF] bg-[#FFD7C3] hover:bg-[#F99363] hover:text-[#FFD7C3]"
                  // onClick={() => setShowNotes()}
                  onClick={handleLectureNotesClick}
                >
                  나의 강의 노트
                </div>
              </div>
              <div className="videodetail"></div>
            </div>
            <div>
              {showNotes && showQuestion ? (
                <div className="videolist">
                  <div className="videolist-font">강의 목록</div>
                  {videoList.map((item, index) => (
                    <li
                      className={`videolist-font1 ${
                        item.id === parseInt(id) ? "selected" : ""
                      }`}
                      key={item.id}
                    >
                      <Link to={`/video/${item.id}`}>{`${index + 1}. ${
                        item.title
                      }`}</Link>
                    </li>
                  ))}
                </div>
              ) : showQuestion ? (
                <div className="videolist">
                  <ReactQuill
                    theme="snow"
                    value={editorHtml}
                    onChange={handleChange}
                    modules={modules}
                    style={{ height: "24rem" }}
                  />
                  <div>
                    <button
                      className="videolist-question-button"
                      onClick={handleCancel}
                    >
                      취소
                    </button>
                  </div>
                </div>
              ) : (
                <div className="videolist-question">
                  <div className="text-#F99363 text-lg mt-16">학습 질문</div>
                  <div className="videolist-question-border">
                    {videoList.find((item) => item.id === parseInt(id)).title}
                  </div>
                  <textarea
                    className="videolist-question-border"
                    value={title}
                    onChange={handleQuestionTitleChange}
                    placeholder="제목을 입력해주세요"
                  />
                  <textarea
                    className="border border-gray rounded-lg p-10 h-full"
                    value={content}
                    onChange={handleQuestionInputChange}
                    placeholder="내용을 입력해주세요 "
                  />
                  <div className="flex flex-row items-center gap-16 mb-12 mt-3.5">
                    <button
                      className="videolist-question-button"
                      onClick={handleCancel}
                    >
                      취소
                    </button>
                    <button
                      className="videolist-question-button2"
                      onClick={handleSubmitQuestion}
                    >
                      등록하기
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
