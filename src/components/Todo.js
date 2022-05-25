import React, { useState } from 'react'
import TodoForm from './todoForm'
import todoList from './TodoList'

function todo() {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    return todoList.map((todo, index) => (
        <div
            className={todo.isComplete ? 'todo-row complete' :
                'todo-row'} key={index} >



        </div>
    ));
}

export default todo
