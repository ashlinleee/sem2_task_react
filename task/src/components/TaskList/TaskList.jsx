import React from 'react';
import Task from '../Task/Task';
import styles from './TaskList.module.css';

const TaskList = ({ tasks, deleteTask, setCurrentTask }) => {
  return (
    <div className={styles.TaskList}>
      {tasks.map(task => (
        <Task key={task.id} task={task} deleteTask={deleteTask} setCurrentTask={setCurrentTask} />
      ))}
    </div>
  );
};

export default TaskList;
