import React, { Component } from "react";
import { Card } from "react-bootstrap";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Axios from 'axios';

class ProfileComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: '',
    }
  }

  componentDidMount() {
    Axios.get("http://localhost:8000/user/reisub0")
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
          width: "15rem",
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
            {this.state.data.name}
          </Card.Text>
          <Card.Subtitle style={{ fontSize: "15px", color: "white" }}>
            <AccessTimeIcon style={{ fontSize: 'medium' }} />
            {" "} {this.state.data.created_at}
          </Card.Subtitle>
          <Card.Text style={{ fontSize: '15px', marginTop: '10px' }}>
            <LocationOnIcon style={{ fontSize: 'medium' }} />
          {" "}{this.state.data.location}
          </Card.Text>
          <Card.Link href={this.state.data.url} style={{ fontSize: '20px', marginBottom: '10px' }}> Visit on Github </Card.Link>
        </Card.Body>

      </Card>
    );
  }
}

export default ProfileComponent;
