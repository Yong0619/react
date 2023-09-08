//액션타입, 액션생성함수, 리듀서
//1. 액션타입

const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREAS';
const DECREASE = 'counter/DECREASE';

//2. 액션생성함수
//function setDiff(diff){
//  return{type:SET_DIFF, diff: diff}    
//}

export const setDiff = diff => ({type:SET_DIFF, diff:diff});
export const increase = () => ({type:INCREASE});
export const decrease = () => ({type:DECREASE});

//초기상태
const initialState = {
    number:0,
    diff: 1
}

//3.reduser
export function counter(state=initialState,action) {
    switch(action.type) {
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff
            };
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff
            };
        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff
            };
        default:
                return state;
    }
}