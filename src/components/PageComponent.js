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
            xs={3}
            style={{
              backgroundColor: "#121212",
              fontSize: "10vh",
              textAlign: "center",
              color: "white",
              minHeight: "100vh",
            }}
          >
            <ProfileComponent username={this.props.username} />
          </Col>

          <Col
            xs={8} md={9}
            style={{
              backgroundColor: "#121212",
              position: "absolute",
              overflowY: "scroll",
              minHeight: "100vh",
              maxHeight: "100vh",
              right: "0",
              width: '100%'
            }}
          >
            <GridComponent username={this.props.username} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PageComponent;
