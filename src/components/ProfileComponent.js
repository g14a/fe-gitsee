import React, { Component } from "react";
import { Card } from "react-bootstrap";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Axios from 'axios';
import * as URL from './Constants'

class ProfileComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {},
    }
  }

  componentDidMount() {
    Axios.get(URL.httpURL + this.props.username)
      .then(response => {
        if (response.data.location === "") {
          this.setState({
            data: {
              ...this.state.data,
              location: ""
            }
          })
        }
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
          src={this.state.data.avatar_url}
        />
        <Card.Body>
          <Card.Text style={{ fontSize: "18px", color: "white" }}>
            {this.state.data.username}
          </Card.Text>
          <Card.Subtitle style={{ fontSize: "13px", color: "white" }}>
            <AccessTimeIcon style={{ fontSize: 'medium' }} />
            {" "} {this.state.data.created_at}
          </Card.Subtitle>
          <Card.Text style={{ fontSize: '13px', marginTop: '10px' }}>
            <LocationOnIcon style={{ fontSize: 'medium' }} />
            {" "}{this.state.data.location}
          </Card.Text>
          <Card.Text style={{ fontSize: "14px", color: "white" }}>
            {this.state.data.followers} followers
          </Card.Text>
          <Card.Link href={this.state.data.url} target="_blank" style={{ fontSize: '18px', display: 'block' }}> Visit on Github </Card.Link>
        </Card.Body>

      </Card>
    );
  }
}

export default ProfileComponent;
