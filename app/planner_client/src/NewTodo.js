import React, { Component } from 'react';

class NewTodo extends Component {
  static defaultProps = {
    onSave(){}
  }

  state = {
    todo: {title: ''}
  }

  //this action is triggered when the form is submitted.
  handleSubmit = (e) => {

    e.preventDefault()
    console.log("submit triggered why", this.state)
    this.props.onSave({...this.state})
    //empty the input field for next todo
    this.setState({todo:{title: ''}})
  }
  //this action is triggered when the input value changes
  handleChange = (e) => {
    e.preventDefault()

    this.setState({
      todo: { title: e.target.value}
    })
    console.log("state is now ", this.state)
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h5>Most Import todos of the day.</h5>
            <label htmlFor="priority-todo">
              <input type="text"
                   name="title"
                   value={this.state.todo.title}
                   onChange={this.handleChange}
                   placeholder="what are doing today?"/>
            </label>
          </div>
          <input type="submit" value="save" />
        </form>
      </div>
    );
  }
}

export default NewTodo;
