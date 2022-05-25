import React, { useState } from 'react'
import todoForm from './TodoForm'

function todoList() {
    const [todos, setTodos] = useState([]);
    const addTodo = todoForm => {
        if (!todoForm.text || /^\s*s/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        //console.log(todo, ...todos);
    };



    return (
        <div>
            <h1>Today's workload</h1>
            <todoForm onSbumit={addTodo} />
        </div>
    )
}

export default todoList
