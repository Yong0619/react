import React from "react";

function TotoList({todos, onRemove, onToggle}) {
    return(
        <div>
            <ul id="todos">
                {todos.map(todo=>(
                    <li key={todo.id}><b onClick={()=>onToggle(todo.id)} style={{ color:todo.active ? 'lightgray' : 'black'}}>{todo.content}</b>
                    <button onClick={()=>onRemove(todo.id)}>X</button></li>
                ))}
            </ul>
        </div>
    )
}
export default TotoList;