import React from "react";

function CreateTodo({onChange, content, onCreate}) {
    return(
        <header>
            <h1>To do List</h1>
            <div>
                <input name="content" value={content} onChange={onChange} />
                <button onClick={onCreate}>+</button>
            </div>
        </header>
    )
}
export default CreateTodo;