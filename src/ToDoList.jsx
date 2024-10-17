import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(e) {
    setNewTask(e.target.value);
    console.log(e.target.value);
  }

  function addTask() {
    if (newTask) {
      setTasks((t) => [...t, { text: newTask, completed: false }]);
      setNewTask('');
    }
  }

  function deleteTask(index) {
    const deletedArray = tasks.filter((_, i) => i !== index);
    setTasks(deletedArray);
  }

  function editTask(index) {}

  function completeTask(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    console.log(updatedTasks);
  }

  return (
    <div className="toDoList">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Add new task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="addTaskBtn" onClick={addTask}>
          Add Task
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.completed ? (
              <span className="completed">{task.text}</span>
            ) : (
              <span className="notCompleted"><s>{task.text}</s></span>
            )}

            <button className="deleteTaskBtn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button
              className="editTaskBtn"
              onClick={(editTask) => editTask(index)}
            >
              edit
            </button>
            <button
              className="completeTaskBtn"
              onClick={() => completeTask(index)}
            >
              complete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
