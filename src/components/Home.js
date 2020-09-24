import React, { Component } from "react";
import "../App.css";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import { Card, CardBody, Container, Row, Col } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <Container>
        <Row className="d-flex justify-content-center pt-5">
          <Col xs={4}>
            <Card>
              <CardBody>
                <RegistrationForm />
              </CardBody>
            </Card>
          </Col>
          <Col xs={4}>
            <Card style={{ height: "100%" }}>
              <CardBody>
                <LoginForm />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
