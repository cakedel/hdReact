import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const solutionSlide = [
    { id: 1, title: "블루투스 태깅", des: "H-Mobile Thru (현대 모바일 스루) 앱으로 엘리베이터를 제어할 수 있는 신개념 이동시스템입니다." },
    { id: 2, title: "모션 콜 버튼", des: "모션인식센서를 활용하여, 손을 위아래로 움직이는 동작만으로 버튼인식이 가능하기 때문에, 박테리아와 바이러스로부터 자유롭습니다." },
    { id: 3, title: "터치리스 버튼", des: "버튼 표면 접촉 없이, 홀을 통과하는 동작만으로 목적층을 등록하고 엘리베이터 호출이 가능합니다. 바이러스 전파 및 감염을 방지할 수 있어서 위생적입니다." },
    { id: 4, title: "터치리스 풋버튼", des: "홀버튼 하부에 장착된 센서 인식을 통해 손을 사용하지 않고 엘리베이터를 호출할 수 있습니다." },
    { id: 5, title: "헤파필터 자동 냉온풍기", des: "온도 인식 센서를 통해, 스스로 알아서 제어하는 스마트 냉난방시스템으로 일년 내내 쾌적한 공기를 제공합니다." },
    { id: 6, title: "헤파필터 음이온 공기청정기", des: "헤파필터 적용 음이온 기능으로, 세균 및 미세먼지를 해결하고 항상 쾌적한 실내공간을 유지해 줍니다." },
    { id: 7, title: "스마트 인디케이터", des: "헤층 표시, 절전 표시, CCTV 작동 등 종합 디스플레이 장치와 초음파 해충방지 및 무오존 음이온 공기청정기 기능은 엘리베이터의 환경을 편리하고 쾌적하게 유지할 수 있습니다." },
    { id: 8, title: "항바이러스 핸드레일", des: "바이러스에 쉽게 노출되는 핸드레일에 항바이러스 인증 소재를 적용하여 세균을 99% 차단하고 바이러스 전염 및 전파를 효과적으로 예방합니다." },
    { id: 9, title: "울트라 UV 클리너", des: "에스컬레이터 핸드레일의 각종 먼지, 오염물질을 완벽하게 세척, 살균해줍니다." },
]

const Solution = () => {
    const [slideNum, setslideNum] = useState(0);
    const SLSlide = useRef();

    return (
        <section className="Solution csc">
            <h2>클린 무빙 솔루션</h2>
            <p>접촉 없이 편하게 이동합니다.</p>
            <div className="container">
                <Slider ref={SLSlide} arrows={false} centerMode={true} centerPadding={'300px'} afterChange={(idx) => {
                    setslideNum(idx)
                }} className="solution_slide">
                    {
                        solutionSlide.map((img, idx) => {
                            return (
                                <figure key={img.id} className={slideNum === idx ? 'on' : ''}>
                                    <img src={process.env.PUBLIC_URL + "/assets/img/main_s0" + img.id + ".jpg"} />
                                </figure>

                            )
                        })
                    }
                </Slider>
                <div className="des">
                    <div className="content">
                        <h3>{solutionSlide[slideNum].title}</h3>
                        <p>{solutionSlide[slideNum].des}</p>
                        <a href="" className="cbtn">자세히보기</a>
                    </div>
                    <div className="num">
                        0{slideNum + 1}<span> / 0{solutionSlide.length}</span>
                    </div>

                </div>
                <div className="arrows">
                    <i className="xi-arrow-left"
                        onClick={() => SLSlide.current.slickPrev()}></i>
                    <i className="xi-arrow-right"
                        onClick={() => SLSlide.current.slickNext()}></i>
                </div>
            </div>
            <ul className="dots">
                    {
                        solutionSlide.map((dot, idx) => <li key={dot.id}
                            onClick={() => SLSlide.current.slickGoTo(idx)}
                            className={slideNum === idx ? 'on' : ''}
                        >{dot.id}</li>)
                    }
                </ul>
        </section>
    )
}

export default Solution;