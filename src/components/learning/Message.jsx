import React from 'react'
import can from "../../assets/img/message2.png";
import message from "../../assets/img/message.png";

function Message() {
  return (
    <div>
        <div className='message-container'>
            <div className='flex flex-col'>
                <div className='font-yg-jalnan text-24 text-white ml-43 mt-55'>코딩짱호랭이님!<br/>오늘도 열코해 볼까요?</div>
                <div className='text-18 text-white mt-28 ml-43 tracking-0.5'>야옹 학습하고 경험치도 쌓아요! 차근차근 알려드립니다^0^</div>
            </div>
            <div class='message-image-container flex flex-row ml-292'>
                <img src={can} alt="캔" className="w-76 h-76 mt-134"></img>
                <img src={message} alt="고양이" className="w-210 h-210 ml-21"></img>
            </div>
        </div>
    </div>
  )
}

export default Message