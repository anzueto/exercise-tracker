import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        // eslint-disable-next-line
        {/* binding methods */ }
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // eslint-disable-next-line
        {/* this is how we crate variables in react */ }
        this.state = {
            username: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            username: this.state.username
        }

        console.log(newUser);

        // eslint-disable-next-line
        {/* send user data to backend */ }
        axios.post('https://an-exercise-tracker-backend.herokuapp.com/users/add', newUser)
            .then(res => console.log(res.data));

        alert(this.state.username + 'has been added');
        // eslint-disable-next-line
        {/* continue to keep adding names */ }

        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" required className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        )
    }
}