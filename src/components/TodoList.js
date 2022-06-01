import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import axios from 'axios';





function TodoList() {
  const [todos, setTodos] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=>{
    const todosString = window.localStorage.todos;
    
    if(todosString){
      const todoParse = JSON.parse(todosString);
      
      setTodos(todoParse);
    }
    setIsLoaded(true);
  },[])

  useEffect(() =>{
    console.log(todos,"saving useEffect");
    if(isLoaded){window.localStorage.setItem('todos',JSON.stringify(todos))}
    
  })



  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);


  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);

    

  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

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