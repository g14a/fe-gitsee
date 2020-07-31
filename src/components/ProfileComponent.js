import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class ProfileComponent extends Component {
  render() {
    return (
      <Card
        style={{
          width: "16rem",
          backgroundColor: "#121212",
          margin: "0 auto",
          marginTop: "10vh"
        }}
      >
        <Card.Img
          variant="top"
          src="https://avatars3.githubusercontent.com/u/17702388?u=9c7235b6f5909386ad20945df7414f88246fe581&v=4"
        />
        <Card.Body>
          <Card.Text style={{ fontSize: "30px", color: "white" }}>
            gowtham
          </Card.Text>
          <Card.Text style={{ fontSize: "30px", color: "white" }}>
            gowtham
          </Card.Text>
          <Card.Title style={{ color: "white" }}>Gowtham Munukutla</Card.Title>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default ProfileComponent;
