import React, { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import TaskForm from './components/TaskForm/TaskForm';
import styles from './App.module.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className={styles.App}>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} updateTask={updateTask} currentTask={currentTask} setCurrentTask={setCurrentTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} setCurrentTask={setCurrentTask} />
    </div>
  );
};

export default App;
