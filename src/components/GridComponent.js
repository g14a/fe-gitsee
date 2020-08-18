import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import RepoForksComponent from "./StatComponents/RepoForksComponent"
import RepoStarsComponent from "./StatComponents/RepoStarsComponent"
import RepoLanguagesComponent from "./StatComponents/RepoLanguagesComponent"
import PrimaryLanguageStarsComponent from "./StatComponents/PrimaryLanguageStarsComponent"
import CalendarHeatMap from './StatComponents/CalendarHeatMap';
import MediaQuery from 'react-responsive';

class GridComponent extends Component {

  render() {
    return (
      <Row style={{justifyContent:"center",color:"white",padding:"30px 30px "}}> 
        <h4 className="heatmap-title">Contributions in the last year</h4>
        <Row className="heatmap">
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
            <MediaQuery minDeviceWidth={992}>
              <RepoLanguagesComponent username={this.props.username} legendPosition="left"/>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={991}>
              <RepoLanguagesComponent username={this.props.username} legendPosition="top"/>
            </MediaQuery>
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
            <MediaQuery minDeviceWidth={992}>
              <PrimaryLanguageStarsComponent username={this.props.username} legendPosition="left"/>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={991}>
              <PrimaryLanguageStarsComponent username={this.props.username} legendPosition="top"/>
            </MediaQuery>
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
            <MediaQuery minDeviceWidth={992}>
              <RepoForksComponent username={this.props.username} legendPosition="left"/>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={991}>
              <RepoForksComponent username={this.props.username} legendPosition="top"/>
            </MediaQuery>
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
            <MediaQuery minDeviceWidth={992}>
              <RepoStarsComponent username={this.props.username} legendPosition="left"/>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={991}>
              <RepoStarsComponent username={this.props.username} legendPosition="top"/>
            </MediaQuery>
          </Card>
        </Col>

      </Row>
    );
  }
}

export default GridComponent;
