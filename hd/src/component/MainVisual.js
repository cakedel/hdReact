import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { id: 1, content: "The world expands along the new path created by Hyundai Elevator", desc: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.", link: "/" },
    { id: 2, content: "현대엘리베이터 스마트 테크놀로지 체험", desc: "2021 한국국제승강기엑스포 VR투어", link: "/" },
    { id: 3, content: "The No.1 for 14 years, we continue to make history of elevators in Korea", desc: "14년 연속 1위로 대한민국 엘리베이터의 역사를 만들어 갑니다.", link: "/" }
]


const MainVisual = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => { setIDX(0) }, [])
    const mainSlide = useRef(null);
    const slideSet = {
        arrows: false,
        afterChange: index => setIDX(index),
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    }
    return (
        <section className="MainVisual">
            <Slider {...slideSet} ref={mainSlide}>
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <figure className={`itm0${idx + 1} ${IDX === idx ? 'on' : ''}`} key={slide.id}>
                                <div div className="inner" >
                                    <h2>{slide.content}</h2>
                                    <p>{slide.desc}</p>
                                    <a href={slide.link} target="_blank">more</a>
                                </div>
                            </figure>
                        )
                    })
                }
            </Slider >
            {console.log(mainSlide)}
            <div className="slideNum">
                0{IDX + 1}<span>{` / 0${SLIDE.length}`}</span>
            </div>
            <ul className="slideTab">
                {
                    SLIDE.map((dots, idx) => {
                        return (
                            <li key={idx} className={IDX === idx ? 'on' : ''}>slide 0{dots.id}</li>
                        )
                    })
                }
            </ul>
            <div className="slideArrows">
                <button onClick={()=>mainSlide.current.slickPrev()}><i className="xi-arrow-left"></i></button>
                <button onClick={()=>mainSlide.current.slickNext()}><i className="xi-arrow-right"></i></button>
            </div>
        </section >
    )
}

export default MainVisual;