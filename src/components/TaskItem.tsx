import React from 'react';
import { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
  onRemove: (id: string) => void;
  onToggle: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onRemove, onToggle }) => {
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(parseInt(task.id)));
  return (
    <li>
      <input
        type="checkbox"
        id={task.id}
        aria-labelledby={task.id + "-label"}
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span id={task.id + "-label"} style={{textDecoration: task.completed ? 'line-through' : 'none', paddingLeft: 10}}>
        {task.title}
        <span style={{margin: '0 10px', color: '#888'}}>({formattedDate})</span>
        <button aria-label={"Remove task: " + task.title} onClick={() => onRemove(task.id)}>Remove</button>
      </span>


    </li>
  );
};

export default TaskItem;
