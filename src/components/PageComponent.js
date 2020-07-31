import React, { Component } from "react";
import ProfileComponent from "./ProfileComponent";
import GridComponent from "./GridComponent";
import { Container, Row, Col } from "react-bootstrap";

class PageComponent extends Component {
  render() {
    return (
      <Container fluid>
        <Row style={{ minHeight: "100vh" }}>
          <Col
            xs={4}
            style={{
              backgroundColor: "#112232",
              fontSize: "10vh",
              textAlign: "center",
              color: "white",
              minHeight: "100vh",
            }}
          >
            <ProfileComponent />
          </Col>
          <Col
            xs={8}
            style={{
              backgroundColor: "#121212",
              position: "absolute",
              overflowY: "scroll",
              minHeight: "100vh",
              maxHeight: "100vh",
              right: "0",
            }}
          >
            <GridComponent />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PageComponent;