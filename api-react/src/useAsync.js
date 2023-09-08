import { useEffect, useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
      case 'LOADING':
        return {
          loading: true,
          data: null,
          error: null
        };
      case 'SUCCESS':
        return {
          loading: false,
          data: action.data,
          error: null
        };
      case 'ERROR':
        return {
          loading: false,
          data: null,
          error: action.error
        };
      default:
        return state;
    }
  }
function useAsync(callback) {
    const [state, dispatch] = useReducer(reducer,{
        loading: false,
        users: null,
        error: false
    })
    //axios 요청
    const fetchData = async () => {
        dispatch({ type: 'LOADING' });
        try {
            const data = await callback();      //getUsers()호출
            dispatch({ type: 'SUCCESS', data: data });
        }
        catch (e) {
            dispatch({ type: 'ERROR', error: e });
        }
    };
    useEffect(()=>{
        fetchData();
    },[]);
    return [state, fetchData];
}

export default useAsync;