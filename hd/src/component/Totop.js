import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import ScrollToPlugin from 'gsap/ScrollToPlugin';

// gsap javascript animation, styled-component

const TotopButton = styled.div`
    position: fixed;
    bottom: 100px;
    right: 100px;
    border-radius:50%;
    color: #fff;
    padding: 15px;
    font-size: 30px;
    background: rgba(0, 0, 0, 0.2);
    visibility: hidden;
    opacity:0;
    cursor:pointer;    
    transition: 0.5s;
    &.on {
        opacity:1;
        visibility:visible;
    }
`
const Totop = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const toTopHandler = () => {
        gsap.to(window, { duration: 0.5, scrollTo: 0 })
    }
    const scrollEvent = () => {
        let scrollY = window.scrollY;
        setScrollTop(scrollY)
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);
        // gsap 플러그인 적용시키기
    }, [])
    useEffect(() => {
        window.addEventListener('scroll', scrollEvent);
        return () => {
            window.removeEventListener('scroll', scrollEvent);
        }
        // clean, 메모리 관리, useEffect 벨로그 포스팅 참조
    }, [])

    return (
        <TotopButton onClick={toTopHandler} className={scrollTop > 500 ? 'on' : null}>
            <i className='xi-arrow-top'></i>
        </TotopButton >
    )
}
export default Totop;