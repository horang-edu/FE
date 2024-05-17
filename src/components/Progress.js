import React, { useEffect, useState } from "react";
import { ReactComponent as Profile } from "../assets/svg/profile.svg";
import ProgressBar from "react-progressbar";
import { fetchUserData } from "../apis/mystudyroom";


function Progress() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async (userId) => {
      try {
        const data = await fetchUserData(userId);
        setUserData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Default values for progress if user data is not available
  const defaultUserData = {
    data: {
      name: "사용자",
      level: 1,
      chapter: 1,
      progress: 0,
      exp: 0,
    },
  };

  // Use userData or defaultUserData depending on availability
  const user = userData || defaultUserData;

  // Calculate remaining percent
  const remainingPercent = user ? 100 - user.data.progress : null;

  return (
    <div className="mb-8">
      <div className="flex justify-between p-3">
        <div class="text-[#6F3A22] font-noto-sans font-semibold text-xl leading-118">
          학습 진도율
        </div>
        <div>
          <span>안녕하세요,</span>
          <span className="font-semibold">{user.data.name}님!</span>
        </div>
      </div>
      <div className="w-full h-[208px] mb-[68px]">
        <div className="progress-layout">
          <div className="progress-profile">
            <Profile />
            <div className="profile-text">
              <div className="flex items-center text-center">
                <div class="w-16 h-16 flex-shrink-0 border-4 border-[#F99363] flex items-center justify-center text-center rounded-sm bg-[#F99363] text-white text-xs font-bold mr-1 ">
                  {user.data.level}
                </div>
                <div className="text-black font-noto-sans text-l font-semibold leading-118">
                  {user.data.name}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full p-5">
            <div>
              <div className="text-[1.13rem] items-center flex justify-between">
                <div>
                  현재 <span className=" text-[#F99363]">학습</span>
                  <span className="profile-text1">
                    {user.data.chapter}-{user.data.level}단계
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-end items-center">
                <span className="text-base text-[#F99363] font-medium">
                  {user.data.progress}
                </span>
                <span className="text-xs font-normal">/100</span>
              </div>
              <div className="mb-[33px]">
                <ProgressBar
                  completed={user.data.progress}
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
                <span className="text-[#F99363] ">2단계</span>까지
                <span className="font-semibold pl-1">{remainingPercent}</span>
                %남았어요. 파이팅!
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
}

export default Progress;
