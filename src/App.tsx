import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Task } from './types/task';
import { addTask as addTaskToAPI, getTasks, saveTasks } from './utils/api';
import './styles/App.css';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const savedTasks = getTasks();
    setTasks(savedTasks);
  }, []);

  const handleAddTask = (title: string) => {
    const newTask = addTaskToAPI(title);
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleUpdateTasks = (updatedTasks: Task[]) => {
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  return (
    <div>
      <h1>TODO List</h1>
      <TaskForm onTaskAdded={handleAddTask} />
      <TaskList tasks={tasks} onUpdateTasks={handleUpdateTasks} />
    </div>
  );
};

export default App;
