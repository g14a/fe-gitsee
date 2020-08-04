import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import PrimaryLanguagesComponent from "./StatComponents/PrimaryLanguagesComponent";
import RepoForksComponent from "./StatComponents/RepoForksComponent"
import RepoStarsComponent from "./StatComponents/RepoStarsComponent"
import RepoLanguagesComponent from "./StatComponents/RepoLanguagesComponent"
import PrimaryLanguageStarsComponent from "./StatComponents/PrimaryLanguageStarsComponent"

class GridComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Row>
        <Col xs={8} md={6}>
          <Card
            style={{
              height: '45vh',
              minHeight: "45vh",
              marginTop: "4vh",
              backgroundColor: "#121212",
              color: "white",
              marginRight: '10px',
            }}
          >
            <PrimaryLanguagesComponent username = {this.props.username}/>
          </Card>
        </Col>

        <Col xs={8} md={6}>
          <Card
            style={{
              height: '45vh',
              minHeight: "45vh",
              marginTop: "4vh",
              backgroundColor: "#121212",
              color: "white",
              marginRight: '10px',
            }}
          >
            <RepoLanguagesComponent username = {this.props.username}/>
          </Card>
        </Col>

        <Col xs={8} md={6}>
          <Card
            style={{
              height: '45vh',
              minHeight: "45vh",
              marginTop: "4vh",
              backgroundColor: "#121212",
              color: "white",
              marginRight: '10px',
            }}
          >
            <PrimaryLanguageStarsComponent username = {this.props.username}/>
          </Card>
        </Col>

        <Col xs={8} md={6}>
          <Card
            style={{
              height: '45vh',
              minHeight: "45vh",
              marginTop: "4vh",
              backgroundColor: "#121212",
              color: "white",
              marginRight: '10px',
            }}
          >
            <RepoForksComponent username = {this.props.username}/>
          </Card>
        </Col>

        <Col xs={8} md={6}>
          <Card
            style={{
              height: '45vh',
              minHeight: "45vh",
              marginTop: "4vh",
              backgroundColor: "#121212",
              color: "white",
              marginRight: '10px',
            }}
          >
            <RepoStarsComponent username = {this.props.username}/>
          </Card>
        </Col>

      </Row>
    );
  }
}

export default GridComponent;
