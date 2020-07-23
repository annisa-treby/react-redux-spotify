import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Col, Container, Row} from "reactstrap";
import Sidebar from "./Sidebar";
import Routes from "../Routes/Routes";


function Content() {
return(
    <Container fluid bakcground-color = "green">
        <Router>
            <Row>
                <Col sm="2">
                    <Sidebar/>
                </Col>
                <Col sm="10">
                    <Routes/>
                </Col>
            </Row>
        </Router>
    </Container>
)
}

export default Content;