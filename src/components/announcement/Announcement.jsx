import React from 'react'

function Announcement() {
  return (
    <div class='py-[2.375rem] flex flex-col'>
    <div class='flex flex-row mb-[1.625rem]'>
        <div class='text-16 font-medium px-[2.375rem]'>1</div>
        <div class='text-16 font-semibold w-[49.5625rem]'>2학기 수업 커리큘럼</div>
        <div class='text-gray'>23/09/01</div>
    </div>
    <div class='flex flex-row mb-[1.625rem]'>
        <div class='text-16 font-medium px-[2.375rem]'>2</div>
        <div class='text-16 font-semibold w-[49.5625rem]'>수업 자료 다운로드 설명서 첨부합니다.</div>
        <div class='text-gray'>23/09/14</div>
    </div>
    <div class='flex flex-row'>
        <div class='text-16 font-medium px-[2.375rem]'>3</div>
        <div class='text-16 font-semibold w-[49.5625rem]'>과제 공지입니다.</div>
        <div class='text-gray'>23/09/16</div>
    </div>
    </div>
  )
}

export default Announcement