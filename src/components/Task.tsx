import React from 'react';
import { IconButton, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import './task.css';

interface TaskProps {
  id: number;
  title: string;
  description: string;
  onDelete: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ id, title, description, onDelete }) => {
  return (
    <div className='task'>
      <Typography variant="h5">{title}</Typography>
      <Typography>{description}</Typography>
      <IconButton onClick={() => onDelete(id)}>
         <Delete/>
      </IconButton>
    </div>
  );
}

export default Task;