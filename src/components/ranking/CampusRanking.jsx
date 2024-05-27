import React from "react";
import { useQuery } from "react-query";
import profile from "../../assets/img/profile2.png";
import scroll from "../../assets/img/scroll.png";
import { getUserRanking } from "../../apis/ranking";

function CampusRanking() {
  const { data, isLoading, isError } = useQuery("userRanking", getUserRanking);
  if (isLoading) return <div>User School Ranking Loading...</div>;
  if (isError) return <div>교내 랭킹 데이터 처리 중 ERROR가 발생하였습니다.</div>;
  console.log(data);
  return (
    <div className="w-full h-full flex flex-col items-center overflow-hidden">
      <p className="font-yg-jalnan text-[#6F3A22] mt-[27px] mb-[21px]">나는 몇 위?</p>
      <div className="w-[60%] h-[64%] overflow-y-auto">
        <div className="flex justify-center items-center w-[444px] h-[62px] bg-[#FFF8EF] rounded-[20px] mb-4">
          <span className="text-[20px] font-semibold text-[#6F3A22] mr-[23px] w-[60px] text-center">{data.loginUserRank}위</span>
          <img src={profile} alt="프로필 사진" className="w-[26px] h-[26px] rounded-full mr-[40px]" />
          <span className="w-[22px] h-[22px] bg-[#F99363] text-[#fff] rounded-[3px] mr-[14px] flex justify-center items-center">3</span>
          <span className="text-[18px] font-semibold mr-[57px] w-[100px] text-center">{data.loginUserName}</span>
          <span className="text-[#6F3A22] text-[20px] font-semibold w-[60px] text-right">{data.loginUserExp}</span>
        </div>
        <div className="w-[81%] mx-auto mt-[17px]">
          {data.userRankDtoList.map((user) => (
            <div key={user.rank} className="flex justify-between items-center w-fullrounded-[20px] mb-4 py-2 px-4">
              <span className="font-bold text-[20px] text-[#6F3A22] w-[60px] text-center">{user.rank}위</span>
              <img src={profile} alt="프로필 사진" className="w-[26px] h-[26px] rounded-full" />
              <span className="w-[22px] h-[22px] bg-[#F99363] text-[#fff] rounded-[3px] flex justify-center items-center">3</span>
              <span className="text-[18px] font-semibold text-[#6F3A22] w-[100px] text-center">{user.userName}</span>
              <span className="text-[#6F3A22] text-[20px] font-semibold w-[60px] text-right">{user.exp}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-all-center py-2">
        <img src={scroll} alt="스크롤아이콘" />
      </div>
    </div>
  );
}

export default CampusRanking;
