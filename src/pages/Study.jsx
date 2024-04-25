import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import axios from "axios";
import ProgressBar from "react-progressbar";
import "../style/styles.css";

export const videoList = [
  {
    id: 1,
    title: "강의 1",
    description: "강의 1에 대한 설명",
    url: "7U77lgNsiy4", // YouTube 동영상의 ID만 사용
  },
  {
    id: 2,
    title: "강의 2",
    description: "강의 2에 대한 설명",
    url: "VIDEO_ID_HERE",
  },
  {
    id: 3,
    title: "강의 3",
    description: "강의 3에 대한 설명",
    url: "VIDEO_ID_HERE",
  },
  {
    id: 4,
    title: "강의 4",
    description: "강의 4에 대한 설명",
    url: "VIDEO_ID_HERE",
  },
  {
    id: 5,
    title: "강의 5",
    description: "강의 5에 대한 설명",
    url: "VIDEO_ID_HERE",
  },
  {
    id: 6,
    title: "강의 6",
    description: "강의 6에 대한 설명",
    url: "VIDEO_ID_HERE",
  },
  {
    id: 7,
    title: "강의 7",
    description: "강의 7에 대한 설명",
    url: "VIDEO_ID_HERE",
  },
  {
    id: 8,
    title: "강의 8",
    description: "강의 8에 대한 설명",
    url: "VIDEO_ID_HERE",
  },
];

function Study() {
  const [lastViewedVideo, setLastViewedVideo] = useState(null);
  const [playedVideo, setPlayedVideo] = useState(null);
  const [totalDuration, setTotalDuration] = useState(300);
  const [totalDuration2, setTotalDuration2] = useState(300);

  // Fetch last viewed video on component mount
  useEffect(() => {
    const fetchLastViewedVideo = async () => {
      try {
        const response = await axios.get("https://horang.site/api/video/last", {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTExQGRhdW0uY29tIiwiYXV0aCI6IlVTRVIiLCJ1c2VySWQiOjYsImV4cCI6MTcwOTA0NTI4MSwiaWF0IjoxNzA5MDQxNjgxfQ.U9givafPUqeesy7XTKXuB122UWD2kUFgEYwUzXrEJ04",
          },
        });
        const data = response.data.data;
        setLastViewedVideo(data);
        setTotalDuration(300);
        console.log(data);
        console.log(progressPercentage);
      } catch (error) {
        console.error("Error fetching last viewed video:", error);
      }
    };

    fetchLastViewedVideo();
  }, []);

  useEffect(() => {
    const fetchPlayedVideo = async () => {
      try {
        const response = await axios.get(
          "https://horang.site/api/video/played",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTExQGRhdW0uY29tIiwiYXV0aCI6IlVTRVIiLCJ1c2VySWQiOjYsImV4cCI6MTcwOTA0NTI4MSwiaWF0IjoxNzA5MDQxNjgxfQ.U9givafPUqeesy7XTKXuB122UWD2kUFgEYwUzXrEJ04",
            },
          }
        );
        const data = response.data.data;
        setPlayedVideo(data);
        setTotalDuration2(300);
        console.log(data);
      } catch (error) {
        console.error("Error fetching played video:", error);
      }
    };

    fetchPlayedVideo();
  }, []);

  const firstFourVideos = videoList.slice(0, 4);
  const remainingVideos = videoList.slice(4);
  const studyingVideos = playedVideo ? Object.keys(playedVideo.playedMap) : [];
  const progressPercentage = (lastViewedVideo?.playTime / totalDuration) * 100;
  const progressPercentage2 = (playedVideo?.playTime / totalDuration2) * 100;
  return (
    <div className="study-layout">
      <div>
        <div className="study-progresscontainer">
          <div className="study-progress1">
            <div className="study-table1">
              <div className="study-table-font">최근 학습한 영상</div>
              <Link to={`/video/${lastViewedVideo?.id}`}>
                <div>{lastViewedVideo?.title}</div>
              </Link>
              <ProgressBar
                completed={progressPercentage}
                height="8px"
                color="#87B7FF"
                style={{
                  width: "490px",
                  height: "134px",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
          <div className="study-progress2">
            <div className="study-table-font">학습 중인 강의</div>
            {studyingVideos.map((videoId) => (
              <Link key={videoId} to={`/video/${videoId}`}>
                <div>{studyingVideos}</div>
              </Link>
            ))}
            <ProgressBar
              completed={progressPercentage2}
              height="8px"
              color="#87B7FF"
              style={{
                width: "490spx",
                height: "100px",
                borderRadius: "20px",
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <div class="study-font1">영상으로 학습하기</div>
        <div className="study-font2">0단계</div>
        <div className="video-container">
          {firstFourVideos.map((video) => (
            <div key={video.id} className=" video-layout">
              <Link to={`/video/${video.id}`}>
                <div
                  className="youtube-box"
                  style={{
                    width: "251px",
                    height: "236px",
                  }}
                >
                  <div className="youtube-layout">
                    <YouTube
                      videoId={video.url}
                      opts={{
                        width: "251",
                        height: "127px",
                        borderRadius: "20px",
                      }}
                    />
                  </div>
                  <div className="video-font1">{video.title}</div>
                  <div>{video.description}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="study-font2">1 단계</div>
        <div className="video-container">
          {remainingVideos.map((video) => (
            <div key={video.id} className="video-layout">
              <Link to={`/video/${video.id}`}>
                <div
                  className="youtube-box"
                  style={{ width: "251px", height: "236px" }}
                >
                  <div className="youtube-layout">
                    <YouTube
                      videoId={video.url}
                      opts={{
                        width: "250px",
                        height: "127px",
                        borderRadius: "20px",
                        margin: "10px",
                      }}
                    />
                  </div>
                  <div className="video-font1">{video.title}</div>
                  <div>{video.description}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Study;
