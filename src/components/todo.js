import React from 'react';
import { useParams } from 'react-router-dom';

const Todo = () => {
    const { todo } = useParams();
    return (
        <div>
        <div>Todo: { todo }</div>
        <div>Todo: { todo.id }</div>
        </div>
    );
}

export default Todo;