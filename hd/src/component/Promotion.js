import React, { useRef } from 'react';
import YouTube from 'react-youtube';

const Promotion = () => {
    const VIDEO = useRef()
    const opts = {
        height: '450',
        width: '800',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            loop: 1,
            playlist: 'raw3Nu0_mBQ'
        },
    };
    return (
        <section className="Promotion csc">
            <h2>홍보영상</h2>
            <p>건물 특성에 맞는 다양한 제품으로 고객의 요구를 충족시켜드립니다.</p>
            <div className="container">
                <div className="movie" ref={VIDEO}>
                    <YouTube videoId="raw3Nu0_mBQ" opts={opts} className="youtube"/>
                </div>
                <div className="des">
                    <div className="left">
                        <h3>IT Technology</h3>
                        <p>IT 기술이 창조하는 승강기 스마트 시스템</p>
                    </div>
                    <div className="right">
                        <h3>Green Technology</h3>
                        <p>지구환경을 생각하는 녹색기술</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Promotion;