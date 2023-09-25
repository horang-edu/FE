import React from "react";

function Question() {
  return (
    <div class="py-[2.375rem] flex flex-col">
      <div class="flex flex-row mb-[1.625rem]">
        <div class="text-16 font-medium">•</div>
        <div class="text-16 w-[49.5625rem] px-3.5">질문있어요. 오늘 일간미션 도와주세요 ㅜㅜ..</div>
        <div class="text-gray">23/09/01</div>
      </div>
      <div class="flex flex-row mb-[1.625rem]">
        <div class="text-16 font-medium">•</div>
        <div class="text-16 w-[49.5625rem] px-3.5">다른 풀이법도 아는 사람?</div>
        <div class="text-gray">23/09/07</div>
      </div>
      <div class="flex flex-row">
        <div class="text-16 font-medium">•</div>
        <div class="text-16 w-[49.5625rem] px-3.5">어제 진도 공부 안 하면 2단계 통과가 어렵나??</div>
        <div class="text-gray">23/09/08</div>
      </div>
    </div>
  );
}

export default Question;
