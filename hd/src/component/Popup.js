import { useState } from 'react';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';

const PopupStyle = styled.div`
position:fixed;
top: 50%;
left:50%;
transform: translate(-50%, -50%);
background: #fff;
z-index:1000;
box-shadow:0 0 3px rgba(0, 0, 0, 0.3);

&.on{
    display:none;
}
& .bottom {
    padding: 10px 0;
    vertical-align: middle;
}

& input {
    display:inline-block;
    margin: 0 10px;
} 

& .des {
    display:inline-block;
}
& button {
    float:right;
    vertical-align: middle;
}
`

const Popup = () => {
    const [close, setClose] = useState(false);
    const [cookie, setCookie] = useCookies();

    let now = new Date();
    let dayAfter = new Date();


    return (
        <PopupStyle className={cookie.popup && 'on'}>
            {console.log(cookie)}
            <div>
                <img src={
                    process.env.PUBLIC_URL + "assets/img/main_news02.jpg"
                } />
            </div>
            <div className="bottom">
                <input type="checkbox" onChange={
                    () => {
                        dayAfter.setDate(now.getDate() + 1);
                        setCookie('popup', 'newCookie', { path: '/', expires: dayAfter })
                    }} />
                <div className="des">
                    오늘 하루 열지 않기
                </div>
                <button onClick={() => {

                    setClose(true);
                }}>Close</button>
            </div>
        </PopupStyle>
    )
}

export default Popup;