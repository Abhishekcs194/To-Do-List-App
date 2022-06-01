
import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import axios from "axios";

function TodoList() {
  // Store the todos
  const [todos, setTodos] = useState([]);

  // Flag to wait for loading
  const [isLoaded, setIsLoaded] = useState(false);


  // useEffect called once after the component is loaded
  useEffect(() => {
    loadTodos();
  }, []);

  /**
   * Load todos and update list for ui
   */
  const loadTodos = async () => {
    try {
      const { data } = await axios.get("/api/todos");
      setTodos(data);
      setIsLoaded(true);
    } catch (e) {
      console.error(e);

  };

  /**
   * Add Todo
   * @param {*} todo
   * @returns
   */
  const addTodo = async (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    try {
      // Axios POST data to api and get response object
      const response = await axios.post("/api/todos", {
        ...todo,
      });

      // Extract response data
      const newTodo = response.data;

      // Update ui list of todos
      const newTodos = [newTodo, ...todos];
      setTodos(newTodos);
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * Update a todo with id
   * @param {*} todoId
   * @param {*} newValue
   * @returns
   */
  const updateTodo = async (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    try {
      // Axios POST data to api and get response object
      const response = await axios.put(`/api/todos/${todoId}`, {
        text: newValue.text,
      });

      // Extract response data
      const newTodo = response.data;

      setTodos((prev) =>
        prev.map((item) => (item._id === todoId ? newTodo : item))
      );
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * Remove todo item
   * @param {*} _id
   */
  const removeTodo = async (_id) => {
    try {
      // Axios POST data to api and get response object
      await axios.delete(`/api/todos/${_id}`);

      const removedArr = [...todos].filter((todo) => todo._id !== _id);

      setTodos(removedArr);
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * Toggle todo status
   * @param {*} id
   */
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo._id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Early return pattern
  // Render loading
  if (!isLoaded) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <>
      <h1>What&apos;s the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
