import React, { useEffect, useState } from "react";
import { ReactComponent as Profile } from "../assets/svg/profile.svg";
import ProgressBar from "react-progressbar";
import { getCookie } from "../utils/cookie";
import axios from "axios";


function Progress() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [groupCode, setGroupCode] = useState("");
  const [groupData, setGroupData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = await getCookie("token");
        if (token) {
          const response = await axios.get(`http://3.34.10.94:8080/api/user`, {
            headers: {
              Authorization: `${token}`,
            },
          });
          if (response.data.statusCode === "OK") {
            setUserData(response.data);
            console.log(response.data.data.id);

          }
        } else {
          console.error("Token is null");
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchGroupData = async () => {
      try {
        const token = await getCookie("token");
        if (token) {
          const response = await axios.get('http://3.34.10.94:8080/api/school', {
            headers: {
              Authorization: `${token}`,
            },
          });

          if (response.data.statusCode === "OK") {
            setGroupData(response.data.data);
            console.log(response.data.data.name);
          } else {
            throw new Error("Failed to fetch group details");
          }
        } else {
          throw new Error("Token is null");
        }
      } catch (error) {
        console.error("Failed to fetch group details:", error);
      }
    };

    fetchUser();
    fetchGroupData();
  }, []);

  const joinGroup = async () => {
    try {
      const token = await getCookie("token");
      if (token) {
        const response = await axios.patch(`http://3.34.10.94:8080/api/user/detail`, {
          groupCode: groupCode,
        }, {
          headers: {
            Authorization: `${token}`,
          },
        });

        if (response.data.statusCode === "OK") {
          alert("그룹에 가입되었습니다.");
          window.location.reload();
        }
      }
    } catch (error) {
      console.error("Failed to join group:", error);
      alert("코드가 일치하지 않습니다.");
    }
  };

  const defaultUserData = {
    data: {
      name: "사용자",
      level: 1,
      chapter: 1,
      progress: 0,
      exp: 0,
    },
  };


  const user = userData || defaultUserData;


  const remainingPercent = 100 - user.data.exp;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mb-8">
      <div className="flex justify-between p-3">
        <div className="font-yg-jalnan text-[#6F3A22] font-noto-sans font-semibold text-xl leading-118">
          학습 진도율
        </div>
        <div className="flex flex-row items-center">
          {!groupData && (
            <div className="flex flex-row items-center">
              <input
                type="text"
                placeholder="그룹 코드 입력"
                value={groupCode}
                onChange={(e) => setGroupCode(e.target.value)}
                className="w-full h-[2.8125rem] p-[0.75rem] text-[0.875rem] border border-solid border-[#FFD7C3] rounded-[10px]"
              />
              <button onClick={joinGroup} className="w-full h-[2.8125rem] font-yg-jalnan text-white bg-[#FFD7C3] rounded-[10px] hover:bg-[#F99363] mr-2">
                그룹 가입하기
              </button>
            </div>
          )}
          <span>안녕하세요, </span>
          {groupData && (
            <div className="font-semibold flex ">
              <div className="ml-2 mr-2 font-yg-jalnan">{groupData.name}</div>
              <div className="mr-2 font-yg-jalnan">{groupData.grade}</div>
            </div>
          )}
          <span className="font-semibold font-yg-jalnan">{user.data.name}님!</span>
        </div>
      </div>
      <div className="w-full h-[208px] mb-[68px]">
        <div className="progress-layout">
          <div className="progress-profile">
            <Profile />
            <div className="profile-text">
              <div className="flex items-center text-center">
                <div className="w-16 h-16 flex-shrink-0 border-4 border-[#F99363] flex items-center justify-center text-center rounded-sm bg-[#F99363] text-white text-xs font-bold mr-1 ">
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
                  {user.data.exp}
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
              <div className="flex justify-center items-center p-1 font-yg-jalnan">
                <span className="text-[#F99363] font-yg-jalnan ">2단계</span>까지
                <span className="font-semibold pl-1 font-yg-jalnan">{remainingPercent}</span>
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
