import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import YouTube from "react-youtube";
import { videoList } from "./Study";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill 스타일시트 import
import "../style/styles.css";
// import { eachDayOfInterval } from "date-fns";
function Video() {
  const { id } = useParams();
  const [videoPlayTime, setVideoPlayTime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editorHtml, setEditorHtml] = useState("");
  const [showNotes, setShowNotes] = useState(true);
  const [showQuestion, setShowQuestion] = useState(true);
  const [questionInput, setQuestionInput] = useState("");
  const [questionTitle, setQuestionTitle] = useState("");

  useEffect(() => {
    const fetchVideoPlayTime = async () => {
      try {
        const response = await axios.get(
          `https://horang.site/api/video/${id}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTExQGRhdW0uY29tIiwiYXV0aCI6IlVTRVIiLCJ1c2VySWQiOjYsImV4cCI6MTcwOTA0NTI4MSwiaWF0IjoxNzA5MDQxNjgxfQ.U9givafPUqeesy7XTKXuB122UWD2kUFgEYwUzXrEJ04",
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
      await axios.patch(
        "https://horang.site/api/video",
        { id: parseInt(id), playTime: Math.floor(newPlayTime) },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTExQGRhdW0uY29tIiwiYXV0aCI6IlVTRVIiLCJ1c2VySWQiOjYsImV4cCI6MTcwOTA0NTI4MSwiaWF0IjoxNzA5MDQxNjgxfQ.U9givafPUqeesy7XTKXuB122UWD2kUFgEYwUzXrEJ04",
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

  if (loading) {
    return <div>Loading...</div>;
  }

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

  const handleSubmitQuestion = async () => {
    try {
      const response = await axios.post(
        "https://horang.site/api/questions",
        {
          title: questionTitle,
          question: questionInput,
          videoId: parseInt(id),
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTExQGRhdW0uY29tIiwiYXV0aCI6IlVTRVIiLCJ1c2VySWQiOjYsImV4cCI6MTcwOTA0NTI4MSwiaWF0IjoxNzA5MDQxNjgxfQ.U9givafPUqeesy7XTKXuB122UWD2kUFgEYwUzXrEJ04",
          },
        }
      );
      console.log("Question submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting question:", error);
    }
  };

  const handleQuestionInputChange = (e) => {
    setQuestionInput(e.target.value);
  };

  const handleQuestionTitleChange = (e) => {
    setQuestionTitle(e.target.value);
  };

  return (
    <div className="flex flex-col bg-red-400 m-20">
      <div className="flex justify-center bg-blue-400">
        <div className="bg-pink-300">
          <div className="text-2xl font-bold text-464646 bg-yellow-500">
            {videoList.find((item) => item.id === parseInt(id)).title}
          </div>
          <div className="flex">
            <div>
              <div className="rounded-youtube" style={roundedYouTubeStyle}>
                <YouTube
                  videoId={video.url}
                  opts={opts}
                  onStateChange={handleVideoStateChange}
                />
              </div>
              <div className="flex flex-row bg-red-500">
                <div onClick={() => setShowQuestion(!showQuestion)}>
                  학습 질문
                </div>
                <div>찜하기</div>
                <div onClick={() => setShowNotes(!showNotes)}>
                  나의 강의 노트
                </div>

                {/* <p>{video.description}</p>
                <p>Video Play Time: {Math.floor(videoPlayTime)}</p> */}
              </div>
            </div>
            <div className="bg-green-500">
              {showNotes && showQuestion ? (
                <div className="videolist">
                  <div className="videolist-font">강의 목록</div>
                  {videoList.map((item, index) => (
                    <li className="videolist-font1" key={item.id}>
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
                    style={{ width: "20rem", height: "45rem" }}
                  />
                </div>
              ) : (
                <div className="videolist">
                  <div>
                    {videoList.find((item) => item.id === parseInt(id)).title}
                  </div>
                  <textarea
                    value={questionTitle}
                    onChange={handleQuestionTitleChange}
                    placeholder="Enter your question title here..."
                  />
                  <textarea
                    value={questionInput}
                    onChange={handleQuestionInputChange}
                    placeholder="Enter your question here..."
                  />
                  <button onClick={handleSubmitQuestion}>Submit</button>
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
