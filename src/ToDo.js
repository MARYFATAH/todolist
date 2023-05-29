
import React, { Component } from 'react'
import "./toDo.css"

export default class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task:this.props.task
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleRemove(evt) {
        this.props.removeToDo(this.props.id);
    }
    toggleForm() {
        
        this.setState({ isEditing :!this.state.isEditing });
    }
    handleUpdate(evt) {
        evt.preventDefault();
        this.props.editToDo(this.props.id, this.state.task);
        this.setState({ isEditing: false});
        
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
        handleToggle(){
            this.props.toggleToDo(this.props.id)
    }
    
    render() {
        let result;
        if (this.state.isEditing) {
            result = (
            <div className='Todo-task'>
                <form onSubmit={this.handleUpdate} className='Todo-edit-form'>
                    <input type='text' placeholder='Edit' name='task'  value={this.state.task} onChange={this.handleChange}/>
                            
                    <button >
                        Save!    
                    </button>
                        
                </form>
            </div>
            )  
        }
        else {
            result = (
                <div className='Todo'>
                    <li className={this.props.completed ? "Todo completed" : "Todo"} onClick={this.handleToggle}>{this.props.task}</li>
                    <div className='Todo-buttons'>
                        <button onClick={this.handleRemove}><i class='fas fa-trash'/></button>
                        <button onClick={this.toggleForm}><i class='fas fa-pen'/></button>
                    </div>
                </div>
            )
            
        }
        return result;
  }
}
