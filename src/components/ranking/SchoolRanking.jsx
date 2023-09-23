import React from "react";
import { useQuery } from "react-query";
import { getMySchoolRanking, getSchoolRanking } from "../../apis/ranking";
import school from "../../assets/img/school.png";
import scroll from "../../assets/img/scroll.png";

function SchoolRanking() {
  const chart = {
    0: "bg-color3 h-[8.125rem]",
    1: "bg-color4 h-[6.875rem]",
    2: "bg-color2 h-[5.625rem]",
    3: "bg-[#D4D4D4] h-[4.375rem]",
    4: "bg-[#C0C0C0] h-[3.125rem]",
  };

  const { data, isLoading, isError } = useQuery("mySchoolRanking", getMySchoolRanking);
  const { data: schoolRanking, isLoading: rankingLoading, isError: rankingError } = useQuery("schoolRanking", getSchoolRanking);

  if (isLoading) return <div>MY School Ranking Loading...</div>;
  if (isError) return <div>나의 학교 랭킹 데이터 처리 중 ERROR가 발생하였습니다.</div>;

  if (rankingLoading) return <div>School Ranking Loading...</div>;
  if (rankingError) return <div>학교 랭킹 데이터 처리 중 ERROR가 발생하였습니다.</div>;

  return (
    <div className="w-full h-full overflow-hidden">
      <h3 className="ranking-title">우리 학교는 몇 위?</h3>
      <div className="w-full h-[74.9%] overflow-y-auto px-2">
        <div className="flex-row-center w-full">
          <div className="w-full px-[6%]">
            <div className="flex items-center justify-evenly px-6 w-full border border-[#F1E7FF] rounded-xl h-[3.875rem]">
              <div className="ranking-myRank">{data.rank}위</div>
              <div className="flex-row-center">
                <img src={school} alt="학교아이콘" className="mr-[1.375rem]" />
                <div className="ranking-name">{data.name}</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex mt-[1.625rem] justify-center">
            {schoolRanking.content
              .map((school, index) => {
                return (
                  <div className="flex-all-center self-end">
                    <div className={`w-[65px] mr-[0.1875rem] rounded-xl ${chart[index]} flex justify-center items-center`}>
                      <img src={require(`../../assets/img/${index + 1}.png`)} alt={`${index}등 아이콘`} />
                    </div>
                    <div className="h-[3rem] text-center">{school.name.substring(0, school.name.lastIndexOf("학교"))}</div>
                  </div>
                );
              })
              .filter((item, index) => {
                return index < 5;
              })}
          </div>
        </div>
        {/* <div>
          {schoolRanking.content.map((school) => {
            return (
              <div>
                <div>{school.name.substring(0, school.name.lastIndexOf("학교"))}</div>
              </div>
            );
          })}
        </div> */}
      </div>
      <div className="flex-all-center py-2">
        <img src={scroll} alt="스크롤아이콘" />
      </div>
    </div>
  );
}

export default SchoolRanking;
