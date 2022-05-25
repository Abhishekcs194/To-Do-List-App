
import './App.css';

<<<<<<< Updated upstream
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import { useState } from "react"
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {


  return (
    <div className='togo-app'>
      <TodoList />
>>>>>>> Stashed changes
    </div>
  );
    
}

export default App;
