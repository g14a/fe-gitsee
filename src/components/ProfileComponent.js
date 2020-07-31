import React, { Component } from 'react';
import { Row, Col, Card, Button } from "react-bootstrap";

class ProfileComponent extends Component {
    render() {
        return (
            <Row style={{ minHeight: "100vh" }}>
                <Col
                    fixed
                    xs={4}
                    style={{
                        backgroundColor: "#121212",
                        fontSize: "10vh",
                        textAlign: "center",
                    }}
                >
                    <Card style={{
                        width: '16rem',
                        marginTop: '100px',
                        marginLeft: '20px',
                        backgroundColor: '#121212'
                    }}>
                        <Card.Img variant="top" src="https://avatars3.githubusercontent.com/u/17702388?u=9c7235b6f5909386ad20945df7414f88246fe581&v=4" />
                        <Card.Body>
                            <Card.Text style={{ fontSize: '30px', color: 'white' }}>gowtham</Card.Text>
                            <Card.Text style={{ fontSize: '30px', color: 'white' }}>gowtham</Card.Text>
                            <Card.Title style={{ color: 'white' }}>Gowtham Munukutla</Card.Title>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default ProfileComponent