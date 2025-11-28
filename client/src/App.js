import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import EditTodo from "./components/EditTodo";
import CreateTodo from "./components/CreateTodo";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <br/>
          <Route path="/" exact component={TodoList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
