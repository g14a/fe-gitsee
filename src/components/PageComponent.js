import React, { Component } from 'react';
import ProfileComponent from './ProfileComponent';
import GridComponent from './GridComponent';
import { Container } from "react-bootstrap";

class PageComponent extends Component {
    render() {
        return (
            <Container fluid>
                <ProfileComponent />
                <GridComponent />
            </Container>
        )
    }
}

export default PageComponent