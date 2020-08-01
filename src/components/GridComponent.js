import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import ChartComponent from "./ChartComponent";

class GridComponent extends Component {
  render() {
    return (
      <Row>
        <Col xs={10} md={7}>
          <Card
            style={{
              minHeight: "45vh",
              marginTop: "4vh",
              backgroundColor: "#121212",
              color: "white",
              marginRight: '60px',
            }}
          >
            <ChartComponent />
          </Card>
        </Col>

        <Col xs={10} md={7}>
          <Card
            style={{
              minHeight: "45vh",
              marginTop: "4vh",
              backgroundColor: "#121212",
              color: "white",
              marginRight: '60px'
            }}
          >
            <ChartComponent />
          </Card>
        </Col>

      </Row>
    );
  }
}

export default GridComponent;
