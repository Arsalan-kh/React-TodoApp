
import './App.css';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo'; 
import TodoList from './components/TodoList';
import React,{useState} from 'react';
function App() {



  return (
    <div className="App  d-flex justify-content-center align-items-center mt-5">
<div className='todo-container'>
<TodoList/>
</div>
    </div>
  );
}

export default App;
