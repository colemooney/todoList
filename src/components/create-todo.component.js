import React, { Component } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

import { createTheme } from '@mui/material/styles';




export default class CreateTodo extends Component {
    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
        console.log(`Todo Completed: ${this.state.todo_completed}`);

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }

    render() {
        return (
            
        <Box
        sx={{
            width: 600,
            height: 600,
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            marginTop: 5,
            borderRadius: 5,
            backgroundColor: '#f5f5f5',
            
        
          }}
        
        
        >
            
            <Stack
            component="form"
            sx={{
              
              display: 'flex',
              justifyContent: 'Center',
              alignItems: 'Center',
            }}
            spacing={2}
            noValidate
            autoComplete="off"
          >
              <h2> Create To-Do </ h2>
            <TextField
              
              id="outlined-basic"
              label="Description"
              
              variant="outlined"
              
            />
            <TextField
              
              id="outlined-basic"
              label="Responsible"
              
              variant="outlined"
            />
            <FormControl component="fieldset">
                
            <FormLabel component="legend">Priority</FormLabel>
             <RadioGroup
                 aria-label="priority"
                 defaultValue="female"
                 name="radio-buttons-group"
                 
               >
              <FormControlLabel value="High" control={<Radio />} label="High" />
              <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
              <FormControlLabel value="Low" control={<Radio />} label="Low" />
             </RadioGroup>
    </FormControl>
    <Button variant="contained">Submit</Button>
          </Stack>
          </Box>
        )
    }
}