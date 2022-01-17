import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Todo = props => (
    <Item>
        <h2>{props.todo.todo_description}</h2>
        <p>Made by: {props.todo.todo_responsible}</p>
        <p>{props.todo.todo_priority} Priority</p>
        <p>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </p>
    </Item>

)

export default class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
                console.log("hahahahahha", this.state);
            })
            .catch(function (error){
                console.log(error);
            })
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <p>Welcome to Todos List Component!!</p>

                <Stack spacing={2}>
                    
                    { this.todoList() }
                    
                </Stack>
            </div>
        )
    }
}