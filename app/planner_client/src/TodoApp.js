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
      {title: 'take out trash'}
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
                    onDelete={this.handleDeletion}/>
      </div>
    );
  }
}

export default DayPlannerApp;
