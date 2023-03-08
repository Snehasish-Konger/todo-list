import React from 'react';
import Task from './Task';

interface TaskListProps {
  tasks: { id: number; title: string; description: string }[];
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;