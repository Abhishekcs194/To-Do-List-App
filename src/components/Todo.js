import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    _id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit._id, value);
    setEdit({
      _id: null,
      value: "",
    });
  };

  if (edit._id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={todo._id}
    >
      <div onClick={() => completeTodo(todo._id)}>{todo.text}</div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo._id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ _id: todo._id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
