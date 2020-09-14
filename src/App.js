import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Navigation from './components/Navigation';
import Albums from './pages/AlbumsPage';
import Artists from './pages/ArtistsPage';
import Songs from './pages/SongssPage';

const App = () => {
  return (
    <div className="Navigation"> 
           <Navigation />
          <Router>
	          <ul className ='links'>
	            <li><Link to='/'>Home</Link></li>
              <li><Link to='/artists'>Artists</Link></li>
	            <li><Link to='/albums'>Albums</Link></li>
                <li><Link to='/songs'>Songs</Link></li>
            </ul>
            
	          <Switch>
	            <Route exact path ='/' component={Home} />
	            <Route path ='/artists' component={Artists} />
              <Route path ='/albums' component={Albums} />
              <Route path ='/songs' component={Songs} />
	          </Switch>
          </Router>
        </div>
      );
    }
  

export default App;
