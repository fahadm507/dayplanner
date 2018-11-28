import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import NewTodo from './NewTodo';

class DayPlannerApp extends Component {
  //initialize defaultProps
  static defaultProps = {
    onSave(){}
  }

  state = {
    todos: [
      {title: 'take out trash', completed: false }
    ]
  }

  handleSave = (formData) => {
    const todos = [...this.state.todos, formData.todo];
    this.setState({
      todos
    })
  }

  handleDeletion = (todo) => {
    const {todos} = this.state;
    const newTodos = todos.filter(t => t !== todo)
    this.setState({todos: newTodos})
  }

  handleCompletion = (todo) => {
    const {todos} = this.state;
    const targetTodo = Object.assign({}, todo)
    targetTodo.completed = true;
    todos[todos.indexOf(todo)] = targetTodo
    this.setState({todos})
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Day Planner</h1>
        </header>
          <div>
            <button>Day</button>
            <span>
              <button> Night</button>
            </span>
          </div>

          <NewTodo onSave={this.handleSave} />
          <TodoList todos={this.state.todos}
                    onDelete={this.handleDeletion}
                    onCompletion={this.handleCompletion}/>
      </div>
    );
  }
}

export default DayPlannerApp;
