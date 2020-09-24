import React, { Component } from "react";
import "../App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import SongsPage from "../pages/SongsPage";
import AlbumsPage from "../pages/AlbumsPage";
import ArtistsPage from "../pages/ArtistsPage";
import { logout } from "../actions/AuthActions";

import styles from "./Navigation.module.css";
import { connect } from "react-redux";

class Navigation extends Component {
  render() {
    return (
      <div className={styles.navigation} id="Navigation">
        <Router>
          <ul className="justify-content-center">
            <div
              className="d-flex justify-content-between"
              style={{ minWidth: "400px" }}
            >
              {this.props.authenticated ? null : (
                <li>
                  <Link to="/">Home</Link>
                </li>
              )}
              {this.props.authenticated ? (
                <>
                  <li>
                    <Link to="/artists">Artists</Link>
                  </li>
                  <li>
                    <Link to="/albums">Albums</Link>
                  </li>
                  <li>
                    <Link to="/songs">Songs</Link>
                  </li>
                  <li>
                    <Link onClick={this.props.reduxLogout} to="/">
                      Logout
                    </Link>
                  </li>
                </>
              ) : null}
            </div>
          </ul>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/artists" component={ArtistsPage} />
            <Route path="/albums" component={AlbumsPage} />
            <Route path="/songs" component={SongsPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxLogout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
 