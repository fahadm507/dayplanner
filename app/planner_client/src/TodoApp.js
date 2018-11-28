import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import NewTodo from './NewTodo';

class DayPlannerApp extends Component {
  //initialize defaultProps
  static defaultProps = {
    onSave(){}
  }

  state = {todos: []}

  componentDidMount(){
    fetch('/todos')
      .then(res => res.json())
      .then(data => this.setState({todos: data}))
      .catch(error => {
        return error.message
      })
  }

  handleSave = (formData) => {
      fetch('/todos', {
        method: 'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData.todo)
      })
      .then(res => res.json())
      .then(data => {
        const todos = [...this.state.todos, formData.todo];
        return this.setState({todos: todos})
      })
      .catch(error => {
        console.log("an error occured", error)
      })
  }

  handleDeletion = (todo) => {
    const {todos} = this.state;
    const newTodos = todos.filter(t => t !== todo)
    fetch(`/todos/${todo.id}`, {
      method: 'DELETE'
    }
  ).then(res => res).then(data => {
    return this.setState({
      todos: newTodos
    })
  })

  }

  handleCompletion = (todo) => {
    const {todos} = this.state;
    todo.completed = true;
      fetch(`/todos/${todo.id}`, {
        method: 'PUT',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify(todo)
      })
      .then(res => res.json())
      .then(data => {
        todos[todos.indexOf(todo)] = data
        return this.setState({todos: todos})
      })
      .catch(error => {
        console.log("an error occured", error.message)
      })
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
