
import React, { useEffect } from 'react';
import { getUsers, useUserDispatch, useUserState } from '../UsersContext';

function Users(props) {
    //상태를 리턴 useContext(UsersStateContext)
    const state = useUserState();
    //dispatch를 리턴 useContext(UserDispatchContext)
    const dispatch = useUserDispatch();
    // { loading: false, error: null, data: null}
    const {loading, error, data} = state;
    const refetch = () => {
        getUsers(dispatch);
    }
    useEffect(()=>{
        getUsers(dispatch);
    
    },[]);
    if(loading) return <div>로딩중.....</div>;
    if(error) return <div>에러가 발생했습니다.</div>;
    if(!data) return <div>데이터가 없습니다.</div>;
    return (
        <div>
            <ul>
                {data.map(user=> (
                    <li key={user.id}>
                        {user.brand} ({user.model})
                    </li>
                ))}
            </ul>
            <button onClick={refetch}>다시 불러오기</button>
        </div>
    );
}

export default Users;