import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="App">
          <Header /> 
          <Navigation />
          <Footer/>
          
        </div>
      );
    }
  

export default App;
