
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Header from "./components/header"

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";


class App extends Component {
  render(){
  return (
    <Router>
      <Header />
      <div className="App">
      
      <Routes>
        <Route path="/" exact element={<TodosList />} />
        <Route path="/edit/:id" element={<EditTodo />} />
        <Route path="/create" element={<CreateTodo />} />
      </Routes>
      </div>
    </Router>
  );
}
}
export default App;
