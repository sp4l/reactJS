import { ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';

export const ChatItem = ({ id, name, onDelete }) => {
    const handleDelete = () => {
        onDelete(id)
    }
    
    return (
        <ListItem>
            <Link to={`/home/${id}`}>{name}</Link>
            <button onClick={handleDelete}>❌</button>
        </ListItem>
    )
}