import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Axios from 'axios';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

class UserSearchForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            error: null
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
                store.addNotification({
                    title: "Error",
                    message: "Could not find the user!",
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["fadeIn"],
                    animationOut: ["fadeOut"],
                    dismiss: {
                        duration: 500,
                        onScreen: true
                    },
                    slidingExit: {
                        duration: 800,
                        timingFunction: 'ease-out',
                        delay: 0
                    }
                })
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
            <div style={{ marginTop: '100px', maxHeight: '50%', maxWidth: '50%', marginLeft: '24%' }}>
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