import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <div>
        <input type="text" placeholder="Task..." />
        <button>Add task</button>
        <hr />
      </div>
    </div>
  );
}

export default App;
