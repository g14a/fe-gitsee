import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Axios from 'axios';

class UserSearchForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const username = this.state.username
        console.log("username is", username)

        Axios.get("http://localhost:8000/user/" + username)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })

    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div style={{ marginTop: '100px' }}>
                <h1 style={{ color: 'white' }}>
                    Enter GitHub Username
                  </h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField id="standard-basic" 
                        label="username" 
                        placeholder="ex: g14a" 
                        name="username"
                        onChange={this.handleInputChange}
                        InputProps={{
                            style: { color: 'white' },
                        }}
                        InputLabelProps={{ style: { color: 'white' } }}
                    />
                </form>
            </div>
        );
    }
}

export default UserSearchForm;