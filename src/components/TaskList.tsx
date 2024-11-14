import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types/task';
import { removeTask, toggleTaskCompletion } from '../utils/api';

interface TaskListProps {
  tasks: Task[];
  onUpdateTasks: (updatedTasks: Task[]) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onUpdateTasks }) => {
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>(
    (localStorage.getItem('taskFilter') as 'all' | 'completed' | 'incomplete') || 'all'
  );
  const [sort, setSort] = useState<'date' | 'title'>(
    (localStorage.getItem('taskSort') as 'date' | 'title') || 'date'
  );

  useEffect(() => {
    localStorage.setItem('taskFilter', filter);
  }, [filter]);

  useEffect(() => {
    localStorage.setItem('taskSort', sort);
  }, [sort]);

  const handleRemove = (id: string) => {
    const updatedTasks = removeTask(id);
    onUpdateTasks(updatedTasks);
  };

  const handleToggle = (id: string) => {
    const updatedTasks = toggleTaskCompletion(id);
    onUpdateTasks(updatedTasks);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as 'all' | 'completed' | 'incomplete');
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value as 'date' | 'title');
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });


  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sort === 'title') {
      return a.title.localeCompare(b.title);
    }
    return parseInt(b.id) - parseInt(a.id);
  });

  return (
    <div style={{textAlign: "center"}}>
      <div style={{ marginBottom: '15px', display: "inline-block" }}>
        <label htmlFor="filter-tasks">Filter:</label>
        <select id="filter-tasks" value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <label htmlFor="sort-tasks" style={{ marginLeft: '15px' }}>Sort:</label>
        <select id="sort-tasks" value={sort} onChange={handleSortChange}>
          <option value="date">By Date</option>
          <option value="title">By Title</option>
        </select>
      </div>
      {sortedTasks.length === 0 ? (
        <p style={{ color: '#888', textAlign: 'center' }}>No tasks found for the selected filter ({filter}).</p>
      ) : (
        <ul>
          {sortedTasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onRemove={handleRemove}
              onToggle={handleToggle}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
