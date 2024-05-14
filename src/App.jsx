import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const inputTask = useRef(null);

  const addTask = () => {
    setTodoList([...todoList, { task: currentTask, completed: false }]);
    inputTask.current.value = '';
    setCurrentTask('');
  };

  const deleteTask = (taskToDelete) => {
    setTodoList(
      todoList.filter((task) => {
        return task.task !== taskToDelete;
      })
    );
  };

  const completeTask = (taskToComplete) => {
    setTodoList(
      todoList.map((task) => {
        return task.task == taskToComplete
          ? { task: taskToComplete, completed: true }
          : { task: task.task, completed: task.completed ? true : false };
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
          onKeyDown={(event) => {
            if (event.keyCode == 13) addTask();
          }}
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
                <li> {val.task} </li>
                <button onClick={() => completeTask(val.task)}>
                  Completed
                </button>
                <button onClick={() => deleteTask(val.task)}>X</button>
                {val.completed ? (
                  <h2>Task completed</h2>
                ) : (
                  <h2>Task not completed</h2>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
