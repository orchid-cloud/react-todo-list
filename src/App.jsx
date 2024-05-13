import React, { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const addTask = () => {
    setTodoList([...todoList, currentTask]);
    console.log(todoList);
  };
  return (
    <div className="App">
      <h1>Todo list</h1>
      <div>
        <input
          type="text"
          placeholder="Task..."
          onChange={(event) => {
            setCurrentTask(event.target.value);
          }}
        />
        <button onClick={addTask}>Add task</button>
        <hr />
      </div>
    </div>
  );
}

export default App;
