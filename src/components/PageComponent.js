import React, { Component } from "react";
import ProfileComponent from "./ProfileComponent";
import GridComponent from "./GridComponent";
import { Container, Row, Col } from "react-bootstrap";

class PageComponent extends Component {
  render() {
    return (
      <Container fluid>
        <Row style={{ minHeight: "100vh" }}>
          <Col xs={12} lg={3} className="profilecard">
            <ProfileComponent username={this.props.username} />
          </Col>

          <Col xs={12} md={9} className="gridcomponent">
            <GridComponent username={this.props.username} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PageComponent;
