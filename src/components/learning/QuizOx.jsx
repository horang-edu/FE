import React, { useState } from 'react';
import OButton from "../../assets/img/O.png";
import XButton from "../../assets/img/X.png";
import instance from '../../apis/instance';
import { getCookie } from '../../utils/cookie';


function QuizOx() {
  const token = getCookie("token");
  const [answer, setAnswer] = useState(null); // 선택된 답변 상태
  const [message, setMessage] = useState(null); // 메시지 상태

  // 답안 선택 함수
  const selectAnswer = (selectedAnswer) => {
    setAnswer(selectedAnswer);
  };

  // 답안 제출 함수
  const handleSubmit = async () => {
    try {

      const response = await instance.post('http://3.34.10.94:8080/api/quiz', {
        id: 1,
        answer: answer
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        }
      });

      const data = response.data;

      // 팝업 메시지 설정
      alert(data.message);
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };

  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className='quiz-layout'>
        <div className='flex items-center'>
          <div className='font-yg-jalnan text-24 text-text4 mr-480'>0과 1로 이루어진 세상</div>
          <div className='flex justify-center'>
            <div className='quiz-tag mr-16'>0단계</div>
            <div className='quiz-tag'>경험치 +10</div>
          </div>
        </div>
        <div className='quiz-content'>
          <div className='font-yg-jalnan text-22 text-main'>퀴즈를 풀며 복습해요!</div>
          <div className='text-28 tracking-0.5 mt-32'>컴퓨터의 언어는 0과 1로 이루어져 있다.</div>
          <div className='mt-68 flex'>
            {/* 답안 버튼들 */}
            <button className={`quiz-button mr-30 ${answer === true ? 'selected' : ''}`} onClick={() => selectAnswer(true)}>
              <img src={OButton} alt='맞아요' />
              <span>맞아요</span>
            </button>
            <button className={`quiz-button ${answer === false ? 'selected' : ''}`} onClick={() => selectAnswer(false)}>
              <img src={XButton} alt='아니에요' />
              <span>아니에요</span>
            </button>
          </div>
        </div>
        {/* 제출하기 버튼 */}
        <button className='font-yg-jalnan quiz-submit' onClick={handleSubmit}>
          제출하기
        </button>
      </div>
    </div>
  );
}

export default QuizOx;
