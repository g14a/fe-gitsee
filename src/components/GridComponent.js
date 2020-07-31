import React, { Component } from 'react';
import { Row, Col, Card } from "react-bootstrap";
import ChartComponent from "./ChartComponent";

const dummy = {
    key1: "1",
    key2: "2",
    key3: "3",
    key4: "4",
    key5: "5",
    key6: "6",
    key7: "7",
    key8: "8",
};

class GridComponent extends Component {
    render() {
        return (
            <Col
                xs={9}
                style={{
                    backgroundColor: "#121212",
                    position: "absolute",
                    overflowY: "scroll",
                    minHeight: "100vh",
                    maxHeight: "100vh",
                    right: "0",
                }}
            >
                <Row>
                    {Object.entries(dummy).map(([key, item]) => { //key,value in dummy json
                        return (
                            <Col xs={12} md={6}>
                                <Card key={key} style={{
                                    minHeight: "45vh",
                                    marginTop: "4vh",
                                    backgroundColor: "#121212",
                                    color: "white"
                                }}>
                                    <ChartComponent />
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Col>
        )
    }
}

export default GridComponent