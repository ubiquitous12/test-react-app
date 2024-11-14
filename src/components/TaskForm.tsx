import React, { useState } from 'react';

interface TaskFormProps {
  onTaskAdded: (title: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onTaskAdded(title);
      setTitle('');
    }
  };

  return (
    <form role={"form"} onSubmit={handleSubmit}>
      <label htmlFor="new-task" className="visually-hidden">Add a new task</label>
      <input
        type="text"
        id="new-task"
        placeholder="Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
