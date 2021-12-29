import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Header = () =>{
    const classes = useStyles();
    
  
    
  
    return (
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          
           <Link to="/">
          <Typography variant="h6" className={classes.title}>
            MERN TO-DO APP
          </Typography>
          </ Link>
        <Link to="/create">
          <Button color="inherit" >
          Create
          </Button>
        </Link>
        </Toolbar>
        
      </AppBar>
    );
  };
export default Header;