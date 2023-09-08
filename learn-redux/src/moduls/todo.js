//액션타입, 액션생성함수, 리듀서
//1. 액션타입
//할 일 추가, 할 일 삭제, 할 일 값 변경

const ADD_TODO = 'todos/ADD_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

//2.액션함수생성
let nextId = 1; //todo데이터에서 사용할 고유 ID
export const addTodo = text => ({
    type:ADD_TODO,
    todo: {
        text: text,
        id: nextId++,
        isDone: false
    }
})
export const deleteTodo = id => ({
    type: DELETE_TODO,
    id: id
})
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id: id
})

//초기상태선언
const initialState = [];

//3.reducer
export default function todos(state=initialState,action) {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                action.todo
            ];
        case DELETE_TODO:
            return state.filter(todo=>todo.id !== action.id);
        case TOGGLE_TODO:
            //배열요소의 todo가 가지고있는 id와
            //액션객체가 가지고있는 id와 일치하는지 체크
            //일치하면 isDone을 반전시키고 리턴
            //일치하지 않으면 todo리턴
            return state.map(todo=>todo.id === action.id ? {...todo, isDone: !todo.isDone} : todo);
        default:
            return state;
    }
}