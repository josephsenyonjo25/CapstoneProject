import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import Artists from './components/Artists';
import Albums from './components/Albums';
import Songs from './components/Songs';

const initialState = { 
  artist: '',
  album: '',
  song: ''
};

function reducer(state = initialState, action){
  switch(action.type){
    case 'ARTIST':
      return{

      };  
    case 'ALBUM':
      return{
  
      };  
    case 'SONG':
      return{
    
      };  
    default:
      return state;
  }
}

const store=createStore(reducer);

class App extends Component {
    render() {
      return(
      <Provider store={store}>
        <Header />
        <Navigation />
        <Footer />
      </Provider>
        
        
      );
    }
  }
export default App;
