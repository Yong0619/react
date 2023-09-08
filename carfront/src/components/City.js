import React, { useState } from 'react';
import { SERVER_URL } from '../constants';

function City(props) {
    const [citydate, setCdate] = useState({
        cdate: "",
        id: ""
    });
    const [cities, setCities] = useState([]);
    const onChange = (e) => {
        setCdate({
            ...citydate,
            [e.target.name] : e.target.value
        });
    }
    const getCity = () => {
        fetch(`${SERVER_URL}city/wea?CurrentDate=${citydate.cdate}&CityId=${citydate.id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.response.body.items.item);
            setCities(data.response.body.items.item);
        })
        .catch(e => console.log(e));
    } 
    return (
        <div>
            <h2>도시별 관광기후지수 조회</h2>
            <input name="cdate" value={citydate.cdate} onChange={onChange}/>
            <select name="id" onChange={onChange}>
                <option value="">선택</option>
                <option value="1168000000">서울</option>
                <option value="2717000000">대구</option>
                <option value="3023000000">대전</option>
                <option value="2644000000">부산</option>
                <option value="2920000000">광주</option>
                <option value="3114000000">울산</option>
                <option value="2824500000">인천</option>
                <option value="4111100000">경기</option>
                <option value="4211000000">강원</option>
                <option value="4423000000">충남</option>
                <option value="4313000000">충북</option>
                <option value="4611000000">전남</option>
                <option value="4511100000">전북</option>
                <option value="4812100000">경남</option>
                <option value="4715000000">경북</option>
                <option value="5011000000">제주</option>
            </select>
            <button onClick={getCity}>조회</button>
            <div>
                <ul>
                    {cities.map((t,index)=><li key={index}>{t.tm} {t.doName} : {t.TCI_GRADE} {t.kmaTci}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default City;