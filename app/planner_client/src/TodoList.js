import React, { Component } from 'react';

class TodoList extends Component {

  static defaultProps = {
    onDelete(){}
  }

  handleDelete = (todo, e) => {
    e.preventDefault()
    console.log("item to delete is: ",todo, this)
    this.props.onDelete(todo)
  }
  
  render(){
    const todos = this.props.todos.map((todo, i) => (
      <li key={i}>{todo.title}<button onClick={(e) => this.handleDelete(todo, e)}>Delete</button></li>
    ));

    return(
      <ul>{todos}</ul>
    )
  }
}

export default TodoList;
