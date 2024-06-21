import React from 'react';
import styles from './Task.module.css';
import format from 'date-fns/format';

const Task = ({ task, deleteTask, setCurrentTask }) => {
  return (
    <div className={styles.Task}>
      <span>{task.title}</span>
      {task.deadline && (
        <span className={styles.Deadline}>
          {format(new Date(task.deadline), 'yyyy-MM-dd')}
        </span>
      )}
      <button onClick={() => setCurrentTask(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
