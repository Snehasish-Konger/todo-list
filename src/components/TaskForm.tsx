import React, { useState } from 'react';
import { TextField, Button, Card } from '@material-ui/core';
import './task.css';

interface TaskFormProps {
  onSubmit: (title: string, description: string) => void;
  task?: { title: string; description: string };
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, task }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(title, description);
  };

  return (
    <form onSubmit={handleSubmit} className="taskform">
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="field"
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="field"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default TaskForm;