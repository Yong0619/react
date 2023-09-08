import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleTodo, addTodo } from '../moduls/todo';
import Todos from './Todos';

function TotosContainer(props) {
    const todos = useSelector(state=>state.todos);
    const dispatch = useDispatch();
    //dispatch({액션객체}) 액션객체 생성함수 > return action
    const onCreate = text => dispatch(addTodo(text));
    const onToggle = id => dispatch(toggleTodo(id));
    const onRemove = id => dispatch(deleteTodo(id));
    return (
        <Todos 
        todos={todos}
        onCreate={onCreate} 
        onToggle={onToggle} 
        onRemove={onRemove}/>
    );
}

export default TotosContainer;