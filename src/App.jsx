import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const inputTask = useRef(null);

  const addTask = () => {
    setTodoList([...todoList, currentTask]);
    inputTask.current.value = '';
    setCurrentTask('');
  };

  const deleteTask = (taskToDelete) => {
    setTodoList(
      todoList.filter((task) => {
        return task !== taskToDelete;
      })
    );
  };
  return (
    <div className="App">
      <h1>Todo list</h1>
      <div>
        <input
          ref={inputTask}
          type="text"
          placeholder="Task..."
          onChange={(event) => {
            setCurrentTask(event.target.value);
          }}
        />
        <button onClick={addTask}>Add task</button>
        <hr />
        <ul>
          {todoList.map((val, key) => {
            return (
              <div key={key} id="task">
                <li> {val} </li>
                <button onClick={() => deleteTask(val)}>X</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
