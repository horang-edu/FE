import React from "react";
import scroll from "../../assets/img/scroll.png";
import profile from "../../assets/svg/profile.svg";
import { useQuery } from "react-query";
import { getMyRanking, getUserRanking } from "../../apis/ranking";

function UserRanking() {
  // const { data, isLoading, isError } = useQuery("myRanking", getMyRanking);
  // const { data: ranking, isLoading: rankingLoading, isError: rankingError } = useQuery("userRanking", getUserRanking);

  // if (rankingLoading) return <div>Ranking Loading...</div>;
  // if (rankingError) return <div>랭킹 데이터 처리 중 ERROR가 발생하였습니다.</div>;

  // if (isLoading) return <div>My Ranking Loading...</div>;
  // if (isError) return <div>나의 랭킹 데이터 처리 중 ERROR가 발생하였습니다.</div>;
  // console.log(ranking);

  const { data, isLoading, isError } = useQuery("userRanking", getUserRanking);
  if (isLoading) return <div>User Ranking Loading...</div>;
  if (isError) return <div>사용자 랭킹 데이터 처리 중 ERROR가 발생하였습니다.</div>;
  console.log(data);
  return (
    <div className="w-full h-full flex flex-col items-center overflow-hidden">
      <p className="font-yg-jalnan text-[#6F3A22] mt-[27px] mb-[21px]">나는 몇 위?</p>
      <div className="w-[60%] h-[64%] overflow-y-auto">
        <div className="flex justify-center items-center w-[444px] h-[62px] bg-[#FFF8EF] rounded-[20px]">
          <span className="text-[20px] font-semibold text-[#6F3A22] mr-[23px]">{data.loginUserRank}위</span>
          <img src={profile} alt="프로필 사진" className="w-[26px] h-[26px] rounded-full mr-[40px]" />
          <span className="w-[22px] h-[22px] bg-[#F99363] text-[#fff] rounded-[3px] mr-[14px] flex justify-center items-center">3</span>
          <span className="text-[18px] font-semibold mr-[57px]">{data.loginUserName}</span>
          <span className="text-[#6F3A22] text-[20px] font-semibold">{data.loginUserExp}</span>
        </div>
        <div className="w-[81%] mx-auto mt-[17px]">
          {data.userRankDtoList.map((user) => {
            return (
              <div className="flex justify-between items-center mb-[0.5rem]">
                <span className="font-bold">{user.rank}위</span>
                <img src={profile} alt="프로필 사진" className="w-[26px] h-[26px] rounded-full" />
                <span className="w-[22px] h-[22px] bg-[#F99363] text-[#fff] rounded-[3px] flex justify-center items-center">3</span>
                <span className="">{user.userName}</span>
                <span className="text-[#464646] font-semibold">{user.exp}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-all-center py-2">
        <img src={scroll} alt="스크롤아이콘" />
      </div>
    </div>
  );
}

export default UserRanking;
