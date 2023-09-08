import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Header(props) {
    const navigate = useNavigate();
    const goBack = () => {
        //이전페이지 이동
        navigate(-1);
    }
    const goHome = () => {
        //홈으로이동 ( / )
        navigate("/");
    }
    //스타일 객체 생성
    const activeStyle = {
        backgroundColor: 'pink',
        fontSize: '24px'
    }
    return (
        <div>
            <h1>Green</h1>
            <ul>
                <li><NavLink to="/" style={({isActive}) => isActive ? activeStyle : null}>home</NavLink></li>
                <li><NavLink to="/product/product1" style={({isActive}) => isActive ? activeStyle : null}>Product</NavLink></li>
                <li><NavLink to="/view?name=green&color=white" style={({isActive}) => isActive ? activeStyle : null}>View</NavLink></li>
                <li><NavLink to="/subpages" style={({isActive}) => isActive ? activeStyle : null}>Subpages</NavLink></li>
            </ul>
            <div>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goHome}>홈으로가기</button>
            </div>
        </div>
    );
}

export default Header;