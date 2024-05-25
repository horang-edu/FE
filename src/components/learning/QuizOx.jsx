import React from 'react'
import OButton from "../../assets/img/O.png"
import XButton from "../../assets/img/X.png"

function QuizOx() {
  return (
    <div className='quiz-layout'>
      <div class='flex items-center'>
        <div className='text-24 text-text4 mr-502'>0과 1로 이루어진 세상</div>
        <div className='flex justify-center'>
          <div className='quiz-tag mr-16'>0단계</div>
          <div className='quiz-tag'>경험치 +10</div>
        </div>
      </div>
      <div class='quiz-content'>
        <div className='text-22 text-main'>퀴즈를 풀며 복습해요!</div>
        <div className='text-28 tracking-0.5 mt-32'>컴퓨터의 언어는 0과 1로 이루어져 있다.</div>
        <div className='mt-68 flex'>
          <button class='quiz-button mr-30'>
            <img src={OButton} alt='맞아요' />
            <span>맞아요</span>
          </button>
          <button class='quiz-button'>
            <img src={XButton} alt='아니에요' />
            <span>아니에요</span>
          </button>
        </div>
      </div>
      <button class='quiz-submit'>
        제출하기
      </button>
    </div>
  )
}

export default QuizOx