import React, {Component} from 'react';
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import SongsPage from '../pages/SongsPage';
import AlbumsPage from '../pages/AlbumsPage';
import ArtistsPage from '../pages/ArtistsPage';

import styles from "./Navigation.module.css";

class Navigation extends Component {
    render() { 
      return (
        <div className={styles.navigation}> 
           
          <Router>
	          <ul className ='text-center'>
	            <li><Link to='/'>Home</Link></li>
              <li><Link to='/artists'>Artists</Link></li>
	            <li><Link to='/albums'>Albums</Link></li>
                <li><Link to='/songs'>Songs</Link></li>
            </ul>
            
	          <Switch>
	            <Route exact path ='/' component={Home} />
	            <Route path ='/artists' component={ArtistsPage} />
              <Route path ='/albums' component={AlbumsPage} />
              <Route path ='/songs' component={SongsPage} />
	          </Switch>
          </Router>
        </div>
      );
    }
  }


export default Navigation;
