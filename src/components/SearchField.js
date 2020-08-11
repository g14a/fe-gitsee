import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Axios from 'axios';
import { store } from 'react-notifications-component';
import { withRouter } from 'react-router-dom';
import 'react-notifications-component/dist/theme.css'
import  * as URL from './Constants'

class UserSearchForm extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        const username = this.props.username

        Axios.get(URL.httpURL + username)
            .then(response => {
                this.props.history.push(`/user/${this.props.username}`);
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
                        onChange={this.props.handleInputChange}
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

export default withRouter(UserSearchForm);