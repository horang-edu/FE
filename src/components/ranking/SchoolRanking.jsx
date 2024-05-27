import React from "react";
import { useQuery } from "react-query";
import { getSchoolRanking } from "../../apis/ranking";
import school_icon from "../../assets/img/school.png";
import scroll from "../../assets/img/scroll.png";

function SchoolRanking() {
  const { data, isLoading, isError } = useQuery("SchoolRanking", getSchoolRanking);
  console.log(data);

  if (isLoading) return <div>School Ranking Loading...</div>;
  if (isError) return <div>학교 랭킹 데이터 처리 중 ERROR가 발생하였습니다.</div>;

  return (
    <div className="w-full h-full flex flex-col items-center overflow-hidden">
      <h3 className="font-yg-jalnan text-[#6F3A22] mt-[27px] mb-[21px]">우리 학교는 몇 위?</h3>
      <div className="w-[60%] h-[64%] overflow-y-auto">
        <div className="flex justify-center items-center w-[444px] h-[62px] bg-[#FFF8EF] rounded-[20px] mb-4">
          <span className="text-[20px] font-semibold text-[#6F3A22] mr-[23px] w-[60px] text-center">{data.userSchoolRank}위</span>
          <img src={school_icon} alt="학교아이콘" className="w-[26px] h-[26px] rounded-full mr-[40px]" />
          <span className="text-[18px] font-semibold mr-[57px] w-[100px] text-center">{data.userSchoolName}</span>
        </div>
        <div className="w-[81%] mx-auto mt-[17px]">
          {data.schoolRankDtoList.map((school) => (
            <div key={school.rank} className="flex justify-between items-center w-full  rounded-[20px] mb-4 py-2 px-4">
              <span className="font-bold text-[20px] text-[#6F3A22] w-[60px] text-center">{school.rank}위</span>
              <img src={school_icon} alt="학교아이콘" className="w-[26px] h-[26px] rounded-full" />
              <span className="text-[18px] font-semibold text-[#6F3A22] w-[200px] text-center">{school.schoolName}</span>
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

export default SchoolRanking;
