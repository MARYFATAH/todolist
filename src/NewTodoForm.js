import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./NewToDoForm.css"

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
    
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createToDo({...this.state, id:uuidv4(), completed: false});
    this.setState({ task: "" });
  }

  render() {

    return (
      <form className='NewTodoForm'
        onSubmit={this.handleSubmit}>
            <label htmlFor='task'>
                New To Do
            </label>
          <input
            type="text"
            placeholder='new task'
            value={this.state.task}
            id='task'
            name='task'
            onChange={this.handleChange}  
          >
        </input>
        <button>Add To Do</button>
      </form>
    )
  }
}
