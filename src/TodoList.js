import React, { useState } from "react";

const TodoList = () => {
  // Component logic and rendering will go here
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = e.target[0].value;
    // Make sure the input is not empty
    if (newTask.trim() === "") {
      return;
    }
  
    setTasks([...tasks, newTask]);
    e.target[0].value = "";

  };

  return (

    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
          )
        )}
      </ul>
    </div>
  );


};

export default TodoList;
