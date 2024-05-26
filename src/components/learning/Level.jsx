import React from 'react'
import { Link } from 'react-router-dom';
import level1 from "../../assets/img/level1.png"
import level2 from "../../assets/img/level2.png"
import level3 from "../../assets/img/level3.png"
import level4 from "../../assets/img/level4.png"
import play from "../../assets/img/play.png"

function Level() {
    return (
        <div className="mt-48">
            <div className='text-24 mb-24'>단계별 학습하기</div>
            <div class='level-container'>
                <div class='level-select'>
                    <div class='level-select-image-wrapper'>
                        <img src={level1}></img>
                    </div>
                    <div className='ml-34'>
                        <div className='font-yg-jalnan text-22 color-[#ffffff]'>0단계</div>
                        <div className='tracking-0.5'>코딩의 세계</div>
                    </div>
                </div>
                <div class='level'>
                    <div class='level-image-wrapper'>
                        <img src={level2}></img>
                    </div>
                    <div className='ml-34'>
                        <div className='font-yg-jalnan text-22'>1단계</div>
                        <div className='tracking-0.5'>야옹이의 문법</div>
                    </div>
                </div>
                <div class='level'>
                    <div class='level-image-wrapper'>
                        <img src={level3}></img>
                    </div>
                    <div className='ml-34'>
                        <div className='font-yg-jalnan text-22'>2단계</div>
                        <div className='tracking-0.5'>게임 만들기</div>
                    </div>
                </div>
                <div class='level'>
                    <div class='level-image-wrapper'>
                        <img src={level4}></img>
                    </div>
                    <div className='ml-34'>
                        <div className='font-yg-jalnan text-22'>3단계</div>
                        <div className='tracking-0.5'>야옹 실전 응용</div>
                    </div>
                </div>
            </div>

            <div class='list-container'>
                <div class='list'>
                    <div>
                        <div className='mt-31 ml-43 text-20 tracking-0.5 font-bold'>0과 1로 이루어진 세상</div>
                        <div className='mt-19 ml-43 text-16 tracking-0.5 text-text3'>
                            0과 1로 이루어진 세상에 오신 것을 환영합니다!<br />
                            컴퓨터는 단지 0과 1로만 이루어진 숫자 세상이죠. 컴퓨터와 대화하는 방법을 알아갈 거예요.
                        </div>
                    </div>
                    <Link to="/quiz">
                        <img className="w-50 h-50 mr-43 flex mt-55" src={play} />
                    </Link>
                </div>

                <div class='list'>
                    <div>
                        <div className='mt-31 ml-43 text-20 tracking-0.5 font-bold'>프로그래밍이란?</div>
                        <div className='mt-19 ml-43 text-16 tracking-0.5 text-text3'>
                            컴퓨터와 대화하는 방법이 뭘까?<br />
                            여러분은 0과 1로 이루어진 세상을 알게 되었어요. 이제는 그 세상과 대화하는 방법을 하나씩 배워 볼 거예요.
                        </div>
                    </div>
                    <Link to="/quiz">
                        <img className="w-50 h-50 mr-43 flex mt-55" src={play} />
                    </Link>
                </div>

                <div class='list'>
                    <div>
                        <div className='mt-31 ml-43 text-20 tracking-0.5 font-bold'>왜 배워야 할까요?</div>
                        <div className='mt-19 ml-43 text-16 tracking-0.5 text-text3'>
                            프로그래밍을 배우면 뭐가 좋나요?<br/>
                            코딩을 하면, 무엇이 좋을까요? 멋진 게임 만들기? 논리적으로 사고하기? 신난다!
                        </div>
                    </div>
                    <Link to="/quiz">
                        <img className="w-50 h-50 mr-43 flex mt-55" src={play} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Level