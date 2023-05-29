import React, { Component } from 'react';
import ToDo from './ToDo.js';
import NewTodoForm from './NewTodoForm.js';
import './TodoList.css'

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  create(newToDo) {
    this.setState({
      todos: [...this.state.todos, newToDo]
    });
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter(todo => id !== todo.id)
    });
  }

  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <ToDo
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          task={todo.task}
          removeToDo={this.remove}
          editToDo={this.update}
          toggleToDo={this.toggleCompletion}
        />
      );
    });

    return (
      <div className='TodoList'>
        <h1>
          To Do List
          <span>
            A Simple React ToDo List App!
          </span>
        </h1>
       
        <ul>{todos}</ul>
         <NewTodoForm createToDo={this.create} />
      </div>
    );
  }
}
