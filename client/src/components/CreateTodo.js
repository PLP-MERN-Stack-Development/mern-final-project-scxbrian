import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {
    constructor(props) {
        super(props);

        this.onChangeTodoTask = this.onChangeTodoTask.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            task: '',
            completed: false
        }
    }

    onChangeTodoTask(e) {
        this.setState({
            task: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Task: ${this.state.task}`);

        const newTodo = {
            task: this.state.task,
            completed: this.state.completed
        };

        axios.post('http://localhost:5000/todos/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            task: '',
            completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Task: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.task}
                                onChange={this.onChangeTodoTask}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
