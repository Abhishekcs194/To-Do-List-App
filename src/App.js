
import './App.css';

import { useState } from "react"
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {


  return (
    <div className='togo-app'>
      <TodoList />
    </div>
  );
    
}

export default App;
