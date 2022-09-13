import React from "react";
import Login from "./Login";
import Register from "./Register";
import {Container, Row, Col} from "react-bootstrap"
export default function Account() {
    return (
        <Container>
           <Row>
             <Col xs={12} sm={12} md={6} lg={6}>
               <Register />
             </Col>

             <Col xs={12} sm={12} md={6} lg={6}>
               <Login />
             </Col>
           </Row>
         </Container>
    )
}