import React, { useState } from "react";
import AttendanceTab from "./AttendanceTab";
import studyBackground from "../../assets/svg/studyBackground.svg";

function Modal({ show, onClose }) {
    
    const [activeTab, setActiveTab] = useState(1);
    if (!show) {
        return null;
    }
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    return (
        <div class='modal-overlay'>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col" onClick={handleCloseClick}>
            <div className="flex pl-[1.4375rem]" onClick={(e) => e.stopPropagation()}>
                {['출석 체크', '일간 미션', '주간 미션'].map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index + 1)}
                        className={`h-[2.6875rem] w-[5.8125rem] p-10 rounded-t-[10px] ${activeTab === index + 1 ? 'text-color6 font-semibold shadow-select bg-white' : 'text-gray font-medium bg-unselect'} focus:outline-none`}
                    >
                        {tab}
                    </button>
                ))}
                <button class='w-[2.4rem] h-[2.4rem] ml-[9rem] bg-color1 rounded-full font-bold text-white text-lg shadow-custom' onClick={handleCloseClick}>✕</button>
            </div>
            <div className="w-500 h-500 bg-white rounded-custom shadow-custom overflow-y-auto">
                {activeTab === 1 &&
                    <div class='flex flex-col items-center'>
                        <div class='shadow-custom m-[0.8rem] rounded-[1.25rem]' />
                        <AttendanceTab />
                    </div>
                }
                {activeTab === 2 &&
                    <>
                        <div class='flex flex-col items-center justify-between h-full'>
                            <div class='font-semibold text-color6 text-24'>
                                <div class='m-[2rem] rounded-[1.25rem]' />
                                오늘의 미션!
                            </div>
                            <div class='flex flex-col items-center justify-center relative p-[3.5rem] flex-grow'>
                                <img src={studyBackground} alt="배경" class='absolute w-[60%]' />
                                <div class='z-10 text-[1.25rem] font-semibold text-22 mb-6'>찜 목록에 저장 후 복습하기</div>
                                <div class='z-10 text-[1rem] text-16'>다시 풀고 싶은 문제를 찜 목록에 저장한 후, 복습해 보세요.</div>
                            </div>
                            <button class='w-139 h-49 bg-color1 rounded-custom font-bold text-white text-18 mb-[2rem] shadow-custom'>학습하기</button>
                        </div>
                    </>
                }
                {activeTab === 3 &&
                    <>
                        <div class='flex flex-col items-center justify-between h-full'>
                            <div class='font-semibold text-color6 text-24'>
                                <div class='m-[2rem] rounded-[1.25rem]'/>
                                이번 주의 미션!
                            </div>
                                <div class="z-10 w-full flex flex-col items-center content-center">
                                    {["일", "월", "화", "수", "목", "금", "토"].map((day, index) => (
                                        <div className="flex overflow-y-auto mb-3 w-[60%]">
                                            <span className="flex justify-center mr-[15%] text-16 font-semibold text-color5 bg-color2 rounded-full w-[2rem]">{day}</span>
                                            {index === 0 && <span className="text-16 line-through ">프로그래밍이란? 문제 풀이</span>}
                                            {index === 1 && <span className="text-16 line-through">일간 미션 성공하기</span>}
                                            {index === 2 && <span className="text-16 line-through">찜 목록 복습하기</span>}
                                            {index === 3 && <span class='text-16'>Q&A 답글 작성하기</span>}
                                            {index === 4 && <span class='text-16'>학습 단계 올라가기</ span>}
                                            {index === 5 && <span class='text-16'>일간 미션 성공하기</ span>}
                                            {index === 6 && <span class='text-16'>질문 작성하기</ span>}
                                        </div>
                                    ))}
                                </div>
                            <button class='w-139 h-49 bg-color1 rounded-custom font-bold text-white text-18 mb-[2rem] shadow-custom'>오늘 미션하기</button>
                        </div>
                    </>
                }
            </div>
        </div> 
        </div>
       
    );
}

export default Modal;
