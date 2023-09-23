import React from 'react'
import logo from '../assets/svg/logo.svg'

function Update() {
    return (
        <div class='w-[26.0625rem] h-[26.125rem] bg-white shadow-custom rounded-custom py-[0.9375rem] px-[1.625rem]'>
            <div>
                <div class='text-color6 font-semibold mb-[0.875rem]'>1단계</div>
                <div class='mb-[3.125rem]'>주석 사용해보기</div>
            </div>
            <div>
                <div class='text-color6 font-semibold mb-[0.875rem]'>2단계</div>
                <div class='mb-[0.5625rem]'>계산기 만들기</div>
                <div class='mb-[0.5625rem]'>로봇 움직이기</div>
                <div class='mb-[0.5625rem] mb-[3.125rem]'>장미꽃 옮기기</div>
            </div>
            <img src={logo} alt="배경"/>
        </div>
    )
}

export default Update