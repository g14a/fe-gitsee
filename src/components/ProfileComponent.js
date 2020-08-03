import React, { Component } from "react";
import { Card } from "react-bootstrap";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Axios from 'axios';

const profile = {
  
}

class ProfileComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: '',
    }

    this.initialState = {
      data: ''
    }
  }

  resetInitialState() {
    this.setState({
      state: this.initialState
    })
  }

  componentDidMount() {
    this.resetInitialState()

    Axios.get("http://localhost:8000/user/probonopd")
      .then(response => {
        this.setState({
          data: response.data
        })
      })
  }

  render() {
    return (
      <Card
        style={{
          width: "12rem",
          backgroundColor: "#121212",
          margin: "0 auto",
          marginTop: "10vh"
        }}
      >
        <Card.Img
          variant="top"
          // src={this.state.data.avatar_url}
          src = 'https://avatars3.githubusercontent.com/u/25099244?u=3ebb5d2dae3ab8cb100eb3f614398d7f4926102f&v=4'
        />
        <Card.Body>
          <Card.Text style={{ fontSize: "18px", color: "white" }}>
            {/* {this.state.data.name} */}
            Govind KP
          </Card.Text>
          <Card.Subtitle style={{ fontSize: "13px", color: "white" }}>
            <AccessTimeIcon style={{ fontSize: 'medium' }} />
            {/* {" "} {this.state.data.created_at} */}
            Joined 3 years ago
          </Card.Subtitle>
          <Card.Text style={{ fontSize: '13px', marginTop: '10px' }}>
            <LocationOnIcon style={{ fontSize: 'medium' }} />
          {/* {" "}{this.state.data.location} */}
          Chennai, India
          </Card.Text>
          <Card.Text style={{ fontSize: "14px", color: "white" }}>
            {this.state.data.followers} followers
          </Card.Text>
          <Card.Link href={this.state.data.url} style={{ fontSize: '18px'}}> Visit on Github </Card.Link>
        </Card.Body>

      </Card>
    );
  }
}

export default ProfileComponent;
