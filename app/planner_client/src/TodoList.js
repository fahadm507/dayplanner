import React, { Component } from 'react';

class TodoList extends Component {

  static defaultProps = {
    onDelete(){}
  }

  render(){
    const todos = this.props.todos.map((todo, i) => {
      let markAsDone = todo.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'};
      return <li key={i} style={markAsDone}>
        {todo.title}
        <button  onClick={() => this.props.onDelete(todo)}>Delete</button>

        {!todo.completed && <button onClick={() => this.props.onCompletion(todo)}>Done</button>}

      </li>
    });

    return(
      <ul>{todos}</ul>
    )
  }
}

export default TodoList;
