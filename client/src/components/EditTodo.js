import React, { Component } from 'react';
import axios from 'axios';

export default class EditTodo extends Component {
    constructor(props) {
        super(props);

        this.onChangeTodoTask = this.onChangeTodoTask.bind(this);
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            task: '',
            completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/todos/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    task: response.data.task,
                    completed: response.data.completed
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeTodoTask(e) {
        this.setState({
            task: e.target.value
        });
    }

    onChangeTodoCompleted(e) {
        this.setState({
            completed: !this.state.completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            task: this.state.task,
            completed: this.state.completed
        };
        console.log(obj);
        axios.post('http://localhost:5000/todos/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Task: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.task}
                                onChange={this.onChangeTodoTask}
                                />
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeTodoCompleted}
                                checked={this.state.completed}
                                value={this.state.completed}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
