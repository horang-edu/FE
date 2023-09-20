import React, { useEffect, useState } from "react";
import { ReactComponent as Profile } from "../assets/profile.svg";
import axios from "axios";
import ProgressBar from "react-progressbar";
function Progress() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://54.180.142.251:8080/api/student/8"
        );
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
    <div>
      <div>학습 진도율</div>
      <div className="layout">
        <div className="progress-layout">
          <div className="progress-profile">
            <Profile />
            <div className="profile-text">
              <div>레벨</div>
              <div>코딩짱호랭이</div>
            </div>
          </div>
          <div className="w-full p-5">
            <div>
              <div className="text-[1.13rem]">
                현재{" "}
                <span className="profile-text1">
                  학습 {userData.data.chapter}-{userData.data.level}단계
                </span>
              </div>
              <div className="profile-text2">{userData.data.progress}/100</div>
              <div>
                <ProgressBar
                  completed={userData.data.progress}
                  height="40px"
                  color="#907EFF"
                  style={{
                    backgroundColor: "#F2F2F2",
                    boxShadow: "0px 4px 4px rgba(159, 156, 240, 0.15)",
                    //   borderRadius: "10px",
                    height: "40px",
                  }}
                />
              </div>
              <div className="layout">
                3단계까지 {remainingpercent}%남았어요. 파이팅!
              </div>
            </div>
            <div>
              <div className="font-size: 1.125rem line-height: 1.75rem;">
                경험치
              </div>
              <div className="profile-text2">
                {userData.data.exp}/총 경험치 100
              </div>
              <div className="progress">
                <div>{userData.data.level}</div>
                <div>
                  <ProgressBar
                    completed={userData.data.exp}
                    height="30px"
                    color="#907EFF"
                    style={{
                      backgroundColor: "#F2F2F2",
                      boxShadow: "0px 4px 4px rgba(159, 156, 240, 0.15)",
                      // borderRadius: "10px",
                      height: "30px",
                      width: "650px",
                    }}
                  />
                </div>
                <div>{userData.data.level + 1}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
