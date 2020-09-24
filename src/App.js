import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Container, Col } from "reactstrap";

import "./index.css";

const App = () => {
  return (
    <Container className="d-flex align-items-center flex-column">
      <Header />
      <Col>
        <Navigation />
      </Col>
      <Footer />
    </Container>
  );
};

export default App;
