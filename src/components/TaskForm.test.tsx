import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';

describe('TaskForm Component', () => {
  it('should render the form with input and button', () => {
    render(<TaskForm onTaskAdded={jest.fn()} />);
    expect(screen.getByPlaceholderText('Add a new task')).toBeInTheDocument();
    expect(screen.getByText('Add Task')).toBeInTheDocument();
  });
  it('should call onTaskAdded when form is submitted with a non-empty input', () => {
    const mockOnTaskAdded = jest.fn();
    render(<TaskForm onTaskAdded={mockOnTaskAdded} />);

    const input = screen.getByPlaceholderText('Add a new task');
    const button = screen.getByText('Add Task');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);

    expect(mockOnTaskAdded).toHaveBeenCalledWith('New Task');
    expect(mockOnTaskAdded).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('');
  });

});
