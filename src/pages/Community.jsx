import React, { useState } from "react";
import { ReactComponent as Write } from "../assets/svg/write.svg";
import { ReactComponent as FreeBoard } from "../assets/svg/freeBoard.svg";
import { ReactComponent as Announcement } from "../assets/svg/announcement.svg";
import { ReactComponent as Question } from "../assets/svg/communityQuestion.svg";
import WriteModal from "../components/WriteModal";

function Community() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center gap-8 mt-24">
        <div>
          <FreeBoard />
        </div>
        <div>
          <Announcement />
        </div>
        <div>
          <Question />
        </div>
        <div>
          <Write />
        </div>
        <div>
          <Write onClick={openModal} />
        </div>
        <WriteModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <div style={{ maxWidth: "1024px", width: "100%" }}>
        <div className="flex gap-12 mb-14">
          <div className="font-bold text-lg">최신순</div>
          <div className="font-bold text-lg">댓글 많은 순</div>
        </div>
        <div>
          <div className="font-bold text-lg mb-6">
            혹시 출석체크는 안해도 되나요?
          </div>
          <div className="text-base text-gray mb-8">
            출석체크는 어떻게 하나요?
          </div>
          <div className="flex justify-between mb-14 border-gray">
            <div className="flex gap-10">
              <div className="text-sm">코딩짱호랭이</div>
              <div className="text-sm  text-gray">시간</div>
            </div>
            <div className="flex gap-10">
              <div className="text-sm  text-gray">댓글</div>
              <div className="text-sm  text-gray">조회수</div>
            </div>
          </div>
          <div className="border"></div>
        </div>
      </div>
    </div>
  );
}

export default Community;
