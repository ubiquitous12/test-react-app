import { Task } from '../types/task';

const TASKS_STORAGE_KEY = 'tasks';

export const getTasks = (): Task[] => {
  const tasks = localStorage.getItem(TASKS_STORAGE_KEY);
  return tasks ? JSON.parse(tasks) : [];
};

export const saveTasks = (tasks: Task[]) => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};

export const addTask = (title: string): Task => {
  const newTask: Task = { id: Date.now().toString(), title, completed: false };
  const tasks = getTasks();
  saveTasks([...tasks, newTask]);
  return newTask;
};

export const removeTask = (id: string): Task[] => {
  const tasks = getTasks().filter(task => task.id !== id);
  saveTasks(tasks);
  return tasks;
};

export const toggleTaskCompletion = (id: string): Task[] => {
  const tasks = getTasks().map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks(tasks);
  return tasks;
};
