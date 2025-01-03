import React, { useState } from 'react';
import { addTask } from '../utils/storage';

const TaskForm = ({ refreshTasks }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      await addTask({ text: taskText });
      setTaskText('');
      refreshTasks();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="New Task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
