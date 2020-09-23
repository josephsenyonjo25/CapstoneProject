import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import {Container, Row} from 'reactstrap';

import './index.css'

const App = () => {
  return (
    <Container className="d-flex align-items-center flex-column">
      <Header/>
      <Navigation />
      <Footer />
    </Container>
  );
}


export default App;
