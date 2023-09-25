import React from "react";
import profile2 from "../../assets/img/profile2.png";
import scroll from "../../assets/img/scroll.png";
import profile from "../../assets/svg/profile.svg";
import { useQuery } from "react-query";
import { getMyRanking, getUserRanking } from "../../apis/ranking";

function UserRanking() {
  const { data, isLoading, isError } = useQuery("myRanking", getMyRanking);
  const { data: ranking, isLoading: rankingLoading, isError: rankingError } = useQuery("userRanking", getUserRanking);

  if (rankingLoading) return <div>Ranking Loading...</div>;
  if (rankingError) return <div>랭킹 데이터 처리 중 ERROR가 발생하였습니다.</div>;

  if (isLoading) return <div>My Ranking Loading...</div>;
  if (isError) return <div>나의 랭킹 데이터 처리 중 ERROR가 발생하였습니다.</div>;
  console.log(ranking);

  return (
    <div className="w-full h-full overflow-hidden">
      <h3 className="ranking-title">나는 몇 위?</h3>
      <div className="h-[74.9%] overflow-y-auto px-2">
        <div className="flex items-center bg-color2 rounded-xl h-[3.875rem] shadow-myRanking mb-3">
          <div className="w-[21.3%] ranking-myRank flex-row-center">{data.rank}위</div>
          <div className="w-[9.5%] flex-row-center">
            <div className="ranking-profile">
              <img src={profile2} alt="프로필사진" />
            </div>
          </div>
          <div className="flex items-center w-[42.8%] ml-[9.5%]">
            <div className="ranking-myLevel flex-all-center  mr-[3.8%]">{Math.floor(data.exp / 100)}</div>
            <div className="ranking-name">{data.name}</div>
          </div>
          <div className="w-[26.4%] text-color1 text-4 font-semibold ">{data.exp}</div>
        </div>
        <div>
          {ranking.content.map((user) => {
            return (
              <div className="flex py-4">
                <div className="w-[21.3%] text-center font-semibold flex-row-center">{user.rank}위</div>
                <div className="w-[9.5%] flex-row-center">
                  <div className="ranking-profile">
                    <img src={profile2} alt="프로필사진" />
                  </div>
                </div>
                <div className="flex items-center w-[42.8%] ml-[9.5%]">
                  <div className="ranking-level flex-all-center mr-[3.8%]">{Math.floor(user.exp / 100)}</div>
                  <div className="font-medium">{user.name}</div>
                </div>
                <div className="w-[26.4%] font-semibold text-[#464646]">{user.exp}</div>
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
