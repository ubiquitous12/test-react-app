import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from './TaskItem';
import { Task } from '../types/task';

describe('TaskItem Component', () => {
  const mockTask: Task = {
    id: Date.now().toString(),
    title: 'Test Task',
    completed: false,
  };

  const mockOnRemove = jest.fn();
  const mockOnToggle = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call onRemove when the remove button is clicked', () => {
    render(
      <TaskItem task={mockTask} onRemove={mockOnRemove} onToggle={mockOnToggle} />
    );

    const removeButton = screen.getByRole('button', {
      name: `Remove task: ${mockTask.title}`,
    });
    fireEvent.click(removeButton);

    expect(mockOnRemove).toHaveBeenCalledTimes(1);
    expect(mockOnRemove).toHaveBeenCalledWith(mockTask.id);
  });

});
