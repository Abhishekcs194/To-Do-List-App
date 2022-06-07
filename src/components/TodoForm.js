import React, { useState, useEffect, useRef } from "react";
import { VscAdd } from "react-icons/vsc";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
<<<<<<< Updated upstream
          <button onClick={handleSubmit} className="todo-button edit">
=======
          <button onClick={() => window.location.reload()} className="todo-button edit">
>>>>>>> Stashed changes
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
<<<<<<< Updated upstream
          <button onClick={handleSubmit} className="todo-button">
=======
          <button onClick={() => window.location.reload()} className="todo-button">
>>>>>>> Stashed changes
            <VscAdd />
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
