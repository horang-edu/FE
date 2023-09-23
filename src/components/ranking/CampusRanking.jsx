import React from "react";
import { getCampusRanking, getMyCampusRanking } from "../../apis/ranking";
import { useQuery } from "react-query";
import school from "../../assets/img/school.png";
import profile2 from "../../assets/img/profile2.png";
import scroll from "../../assets/img/scroll.png";

function CampusRanking() {
  const { data, isLoading, isError } = useQuery("myCampusRanking", getMyCampusRanking);
  const { data: schoolRanking, isLoading: rankingLoading, isError: rankingError } = useQuery("campusRanking", getCampusRanking);

  if (isLoading) return <div>MY Campus Ranking Loading...</div>;
  if (isError) return <div>나의 교내 랭킹 데이터 처리 중 ERROR가 발생하였습니다.</div>;

  if (rankingLoading) return <div>Campus Ranking Loading...</div>;
  if (rankingError) return <div>교내 랭킹 데이터 처리 중 ERROR가 발생하였습니다.</div>;

  return (
    <div className="w-full h-full overflow-hidden">
      <h3 className="ranking-title">학교에서 나는 몇 위?</h3>
      <div className="h-[66.3%] overflow-y-auto px-2">
        <div className="flex-row-center">
          <div className="flex items-center justify-between px-6 w-[67.5%] bg-color2 rounded-xl h-[3.875rem] shadow-myRanking">
            <img src={school} alt="학교아이콘" />
            <div className="ranking-name">{data.school}</div>
            <div className="text-sm">전체 {schoolRanking.totalElements}명</div>
          </div>
        </div>
        <div className="flex items-center h-[3.875rem] mb-3 border-b border-[#CFCDFF]">
          <div className="w-[21.3%] ranking-myRank flex-row-center">{data.rank}위</div>
          <div className="w-[9.5%] flex-row-center">
            <div className="ranking-profile">
              <img src={profile2} alt="프로필사진" />
            </div>
          </div>
          <div className="flex items-center w-[42.8%] ml-[9.5%]">
            <div className="ranking-myLevel flex-all-center  mr-[3.8%]">{data.level}</div>
            <div className="ranking-name">{data.name}</div>
          </div>
          <div className="w-[26.4%] text-color1 text-4 font-semibold ">{data.exp}</div>
        </div>
        <div>
          {schoolRanking.content.map((student) => {
            return (
              <div className="flex py-4">
                <div className="w-[21.3%] text-center font-semibold flex-row-center">{student.rank}위</div>
                <div className="w-[9.5%] flex-row-center">
                  <div className="ranking-profile">
                    <img src={profile2} alt="프로필사진" />
                  </div>
                </div>
                <div className="flex items-center w-[42.8%] ml-[9.5%]">
                  <div className="ranking-level flex-all-center mr-[3.8%]">{Math.floor(student.exp / 100)}</div>
                  <div className="font-medium">{student.name}</div>
                </div>
                <div className="w-[26.4%] font-semibold text-[#464646]">{student.exp}</div>
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

export default CampusRanking;
