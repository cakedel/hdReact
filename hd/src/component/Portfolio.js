import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const PORTFOLIO = [
    { id: 1, title: "서울시청" },
    { id: 2, title: "서울드래곤시티(용산호텔)" },
    { id: 3, title: "부산파크하얏트" },
    { id: 4, title: "송도G타워" },
    { id: 5, title: "롯데월드몰" },
    { id: 6, title: "파라다이스시티호텔" },
    { id: 7, title: "명동대신증권신사옥" },
    { id: 8, title: "동대구복합환승센터" },
    { id: 9, title: "부산국제금융센터" },
]

const NewPORTFOLIO = [...PORTFOLIO, PORTFOLIO[0]].slice(1, PORTFOLIO.length)

const Portfolio = () => {
    // const NewPORTFOLIO = PTF
    const [rightState, setRightState] = useState();
    const [leftState, setLeftState] = useState();
    const rightSlide = useRef();
    const leftSlide = useRef();
    useEffect(() => {
        setRightState(rightSlide.current)
        setLeftState(leftSlide.current)
    }, [])
    return (
        <section className="Portfolio csc">
            <div className="container">
                <div className="left">
                    <div className="slide">
                        <Slider fade={true} arrows={false} ref={leftSlide}>
                            {
                                PORTFOLIO.map((slide) => {
                                    return (
                                        <figure key={slide.id}>
                                            <div className="box">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/main_m0" + slide.id + ".jpg"} />
                                            </div>
                                            <div className="des">
                                                {slide.title}
                                            </div>
                                        </figure>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
                <div className="right">
                    <h2>건물의 가치를 높이는 현대엘리베이터</h2>
                    <p>특별한 기술을 실현할수록 여러분의 삶의 무대도 특별해 집니다.</p>
                    <div className="arrows">
                        <i className="xi-angle-left" onClick={() => rightSlide.current.slickPrev()}></i>
                        <i className="xi-angle-right" onClick={() => rightSlide.current.slickNext()}></i>
                    </div>
                    <div className="slide">
                        <Slider slidesToShow={5} className="right_slide" ref={rightSlide} asNavFor={leftState} arrows={false}>
                            {
                                NewPORTFOLIO.map((slide) => {
                                    return (
                                        <figure key={slide.id}>
                                            <div className="box">
                                                <img src={process.env.PUBLIC_URL + "/assets/img/main_m0" + slide.id + ".jpg"} />
                                            </div>
                                            <div className="des">
                                                {slide.title}
                                            </div>

                                        </figure>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;
