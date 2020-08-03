import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import PrimaryLanguagesComponent from "./StatComponents/PrimaryLanguagesComponent";
import RepoForksComponent from "./StatComponents/RepoForksComponent"
import RepoStarsComponent from "./StatComponents/RepoStarsComponent"
import RepoLanguagesComponent from "./StatComponents/RepoLanguagesComponent"
import PrimaryLanguageStarsComponent from "./StatComponents/PrimaryLanguageStarsComponent"

class GridComponent extends Component {
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
            <PrimaryLanguagesComponent />
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
            <RepoLanguagesComponent />
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
            <PrimaryLanguageStarsComponent />
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
            <RepoForksComponent />
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
            <RepoStarsComponent />
          </Card>
        </Col>

      </Row>
    );
  }
}

export default GridComponent;
