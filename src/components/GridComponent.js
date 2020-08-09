import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import RepoForksComponent from "./StatComponents/RepoForksComponent"
import RepoStarsComponent from "./StatComponents/RepoStarsComponent"
import RepoLanguagesComponent from "./StatComponents/RepoLanguagesComponent"
import PrimaryLanguageStarsComponent from "./StatComponents/PrimaryLanguageStarsComponent"
import CalendarHeatMap from './StatComponents/CalendarHeatMap';

class GridComponent extends Component {

  render() {
    return (
      <Row>
        <h4 style={{ marginTop: '2%', marginLeft: '30%', color: '#fff' }}>Contributions in the last year</h4>
        <Row style={{ width: '95%', height: '30%', marginLeft: '1%', marginTop: '2%', marginBottom: '5%' }}>
          <CalendarHeatMap username={this.props.username} />
        </Row>

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
            <RepoLanguagesComponent username={this.props.username} />
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
            <PrimaryLanguageStarsComponent username={this.props.username} />
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
            <RepoForksComponent username={this.props.username} />
          </Card>
        </Col>

        <Col xs={8} md={6}>
          <Card
            style={{
              height: '48vh',
              minHeight: "45vh",
              marginTop: "4vh",
              backgroundColor: "#121212",
              color: "white",
              marginRight: '10px',
            }}
          >
            <RepoStarsComponent username={this.props.username} />
          </Card>
        </Col>

      </Row>
    );
  }
}

export default GridComponent;
