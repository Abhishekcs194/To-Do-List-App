import React, { useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState("");
    const handleChange = e => {
        setInput(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            Text: input
        });
        setInput('')
    };

    return (
        <form className='todo-form'>
            <input type="text"
                placeholder='Add a todo'
                value={input}
                name='text'
                className='todo-input'
                onChange={handleChange}
            />
            <button className="todo-button">Add a Task</button>
        </form>
    )
}

export default TodoForm
