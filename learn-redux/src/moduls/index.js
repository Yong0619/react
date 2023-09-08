import { combineReducers } from "redux";
import { counter } from "./Counter";
import todos from "./todo";

//리덕스 모듈 합치기 combineReducers()
const rootReducer = combineReducers({
    counter: counter,
    todos: todos
})

export default rootReducer;