import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { videoList } from "./Study";
import axios from "axios";

function Video() {
  const { id } = useParams();
  const [videoPlayTime, setVideoPlayTime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideoPlayTime = async () => {
      try {
        const response = await axios.get(
          `https://horang.site/api/video/${id}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTExQGRhdW0uY29tIiwiYXV0aCI6IlVTRVIiLCJ1c2VySWQiOjYsImV4cCI6MTcwMTk2NzE0OSwiaWF0IjoxNzAxOTYzNTQ5fQ.CdVRVQHYSVHdBFHQ4zH_dOZofNl4LkpwX8q2UJpBFBw",
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
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTExQGRhdW0uY29tIiwiYXV0aCI6IlVTRVIiLCJ1c2VySWQiOjYsImV4cCI6MTcwMTk2NzE0OSwiaWF0IjoxNzAxOTYzNTQ5fQ.CdVRVQHYSVHdBFHQ4zH_dOZofNl4LkpwX8q2UJpBFBw",
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

    // 0 corresponds to the "ended" state, and 2 corresponds to the "paused" state
    if (playerState === 0 || playerState === 2) {
      // Video is either ended or paused, update the playtime
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

  const opts = {
    height: "700",
    width: "1400",
    playerVars: {
      start: videoPlayTime,
    },
  };

  return (
    <div>
      <YouTube
        videoId={video.url}
        opts={opts}
        onStateChange={handleVideoStateChange}
      />
      <p>{video.description}</p>
      <p>Video Play Time: {Math.floor(videoPlayTime)}</p>
    </div>
  );
}

export default Video;
