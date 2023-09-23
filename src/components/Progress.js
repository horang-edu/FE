import React, { useEffect, useState } from "react";
import { ReactComponent as Profile } from "../assets/svg/profile.svg";
import axios from "axios";
import ProgressBar from "react-progressbar";
function Progress() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://13.209.68.120:8080/api/student/8");
        const response = await axios.get("http://52.79.60.105:8080/api/student/8");
        const data = response.data;
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (userData === null) {
    return <div>로딩중입니당!!</div>;
  }
  let remainingpercent = userData ? 100 - userData.data.progress : null;
  return (
    <div className="mb-8">
      <div className="flex justify-between p-3">
        <div class="text-black font-noto-sans font-semibold text-xl leading-118">학습 진도율</div>
        <div>
          <span>안녕하세요,</span>
          <span className="font-semibold">{userData.data.name}님!</span>
        </div>
      </div>
      <div>
        <div className="progress-layout">
          <div className="progress-profile">
            <Profile />
            <div className="profile-text">
              <div className="flex items-center text-center">
                <div class="w-16 h-16 flex-shrink-0 border-4 border-indigo-600 flex items-center justify-center text-center rounded-sm bg-indigo-600 text-white text-xs font-bold mr-1 ">{userData.data.level}</div>

                <div className="text-black font-noto-sans text-l font-semibold leading-118">{userData.data.name}</div>
              </div>
            </div>
          </div>
          <div className="w-full p-5">
            <div>
              <div className="text-[1.13rem] items-center flex justify-between">
                <div>
                  현재 <span className="text-indigo-600 ">학습</span>
                  <span className="profile-text1">
                    {" "}
                    {userData.data.chapter}-{userData.data.level}단계
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-end items-center">
                <span className="text-base text-indigo-600 font-medium">{userData.data.progress}</span>
                <span className="text-xs font-normal">/100</span>
              </div>
              <div>
                <ProgressBar
                  completed={userData.data.progress}
                  height="40px"
                  color="#907EFF"
                  style={{
                    backgroundColor: "#F2F2F2",
                    boxShadow: "0px 4px 4px rgba(159, 156, 240, 0.15)",
                    borderRadius: "10px",
                    height: "40px",
                    overflow: "hidden",
                  }}
                />
              </div>
              <div className="flex justify-center items-center p-1">
                <span className="text-indigo-600">2단계</span>까지
                <span className="font-semibold pl-1">{remainingpercent}</span>
                %남았어요. 파이팅!
              </div>
            </div>
            <div>
              <div className="font-size: 1.125rem line-height: 1.75rem; font-semibold">경험치</div>
              <div className="flex flex-row justify-end items-center">
                <span className="text-base text-indigo-600 font-medium">{userData.data.exp}/</span>
                <span className="text-xs font-normal">총 경험치100</span>
              </div>
              <div className="progress">
                <div class="w-16 h-16 flex-shrink-0 border-4 border-indigo-600 flex items-center justify-center text-center rounded-sm bg-indigo-600 text-white text-xs font-bold ">{userData.data.level}</div>
                <div>
                  <ProgressBar
                    completed={userData.data.exp}
                    height="30px"
                    color="#907EFF"
                    style={{
                      backgroundColor: "#F2F2F2",
                      boxShadow: "0px 4px 4px rgba(159, 156, 240, 0.15)",
                      borderRadius: "10px",
                      height: "30px",
                      width: "650px",
                      overflow: "hidden",
                    }}
                  />
                </div>
                <div class="w-16 h-16 flex-shrink-0 border-4 border-indigo-600 flex items-center justify-center text-center rounded-sm bg-indigo-600 text-white text-xs font-bold ">{userData.data.level + 1}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
