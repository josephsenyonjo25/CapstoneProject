import React, {Component} from 'react';
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Artists from './Artists';
import Albums from './Albums';
import Songs from './Songs';

class Navigation extends Component {
    render() { 
      return (
        <div className="Navigation"> 
           
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
  }


export default Navigation;
