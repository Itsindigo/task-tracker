import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../utils/storage';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const storedTasks = await getTasks();
      setTasks(storedTasks);
    };
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
