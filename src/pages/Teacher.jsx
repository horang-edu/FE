import React, { useState, useEffect } from "react";
import axios from "axios";
import { getCookie } from "../utils/cookie";

const Teacher = () => {
  const [schoolName, setSchoolName] = useState("");
  const [schoolGrade, setSchoolGrade] = useState("");
  const [groupCode, setGroupCode] = useState("");
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await getCookie("token");
        if (token) {
          const response = await axios.get(
            "http://3.34.10.94:8080/api/school",
            {
              headers: {
                Authorization: `${token}`,
              },
            }
          );

          setUserId(response.data.data.id);
        } else {
          console.error("Token is null");
          setMessage("토큰이 없습니다.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setMessage("유저 정보 조회에 실패했습니다.");
      }
    };

    fetchUserData();
  }, []);

  const handleCreateSchool = async () => {
    try {
      const token = await getCookie("token");
      if (token) {
        const response = await axios.post(
          "http://3.34.10.94:8080/api/school",
          {
            name: schoolName,
            grade: schoolGrade,
          },
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        setMessage(response.data.message);
      } else {
        console.error("Token is null");
        setMessage("토큰이 없습니다.");
      }
    } catch (error) {
      console.error("Error creating school:", error);
      setMessage("학교 생성에 실패했습니다.");
    }
  };

  const handleGenerateGroupCode = async () => {
    try {
      const token = await getCookie("token");
      if (token) {
        const response = await axios.patch(
          `http://3.34.10.94:8080/api/school/code/${userId}`,
          {},
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        setGroupCode(response.data.data);
        setMessage(response.data.message);
      } else {
        console.error("Token is null");
        setMessage("토큰이 없습니다.");
      }
    } catch (error) {
      console.error("Error generating group code:", error);
      setMessage("그룹 코드 생성에 실패했습니다.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-[50px]">
      <div className="border border-solid border-[#FFD7C3] rounded-[10px] bg-[#fff8ef] p-[77px] mb-[20px] w-[1440px]">
        <h2 className="text-[1.5rem] font-yg-jalnan text-yellow-900 mb-[1.5rem]">
          학교 생성
        </h2>
        <input
          type="text"
          placeholder="학교 이름"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          className="w-full h-[2.8125rem] mb-[1.5rem] p-[0.75rem] text-[0.875rem] border border-solid border-[#FFD7C3] rounded-[10px]"
        />
        <input
          type="text"
          placeholder="학년 및 반"
          value={schoolGrade}
          onChange={(e) => setSchoolGrade(e.target.value)}
          className="w-full h-[2.8125rem] mb-[1.5rem] p-[0.75rem] text-[0.875rem] border border-solid border-[#FFD7C3] rounded-[10px]"
        />
        <button
          onClick={handleCreateSchool}
          className="w-full h-[2.8125rem] font-yg-jalnan text-white bg-[#FFD7C3] rounded-[10px] hover:bg-[#F99363]"
        >
          학교 생성
        </button>
      </div>

      <div className="border border-solid border-[#FFD7C3] rounded-[10px] bg-[#fff8ef] p-[77px] mb-[20px] w-[1440px]">
        <button
          onClick={handleGenerateGroupCode}
          className="w-full h-[2.8125rem] font-yg-jalnan text-white bg-[#FFD7C3] rounded-[10px] hover:bg-[#F99363]"
        >
          그룹 코드 생성/재발급
        </button>

        {groupCode && (
          <div className="mt-[20px]">
            <h3 className="text-[1.5rem] font-yg-jalnan text-yellow-900 mb-[1.5rem]">
              생성된 그룹 코드: {groupCode}
            </h3>
          </div>
        )}
      </div>
      <div>
        {message && (
          <div className="mt-[20px]">
            <h3 className="text-[1.5rem] font-yg-jalnan text-yellow-900 mb-[1.5rem]">
              알림 : {message}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Teacher;
