import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './TaskForm.module.css';

const TaskForm = ({ addTask, updateTask, currentTask, setCurrentTask }) => {
  const [task, setTask] = useState({ id: null, title: '', deadline: null });

  useEffect(() => {
    if (currentTask) {
      setTask(currentTask);
    } else {
      setTask({ id: null, title: '', deadline: null });
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      updateTask(task);
    } else {
      task.id = Date.now();
      addTask(task);
    }
    setTask({ id: null, title: '', deadline: null });
    setCurrentTask(null);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.TaskForm}>
      <input
        type="text"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        required
      />
      <DatePicker
        selected={task.deadline}
        onChange={(date) => setTask({ ...task, deadline: date })}
        placeholderText="Select a deadline"
      />
      <button type="submit">{task.id ? 'Update' : 'Add'} Task</button>
    </form>
  );
};

export default TaskForm;
