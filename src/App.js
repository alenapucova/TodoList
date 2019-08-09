import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Title from './Components/Title';
import Todos from './Components/ToDos';
import AddItem from './Components/AddItem';
import About from './Components/Pages/About';
import uuid from 'uuid';


import './App.css';

class App extends React.Component {

  state = {
    todos: []
  }
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })

  }
  render() {
    return (
      <Router>
        <div className="container">
          <Title />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddItem addTodo={this.addTodo} />
              <Todos 
                  todos={this.state.todos} 
                  markComplete={this.markComplete} 
                  delTodo={this.delTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

export default App;
