import React from "react";
import { MDBInput, MDBBtn } from "mdbreact";
/*import "@fortawesome/fontawesome-free/css/all.min.css";*/
/*import "bootstrap-css-only/css/bootstrap.min.css";*/
/*import "mdbreact/dist/css/mdb.css";*/
import { connect } from "react-redux";

import { tryLogin } from "../actions/AuthActions";
import { useHistory, Redirect } from "react-router";

const LoginForm = (props) => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.attemptLogin(e);
  };

  if (props.authenticated) return <Redirect to="/songs" />;

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="d-flex flex-column"
      style={{ minHeight: "100%", margin: "auto" }}
    >
      <p className="h5 text-center mb-4">Sign in</p>
      <div
        style={{ flex: "1" }}
        className="d-flex align-items-center flex-column justify-content-between"
      >
        <div className="grey-text" style={{ width: "75%" }}>
          <MDBInput
            name="email"
            label="Type your email"
            icon="envelope"
            group
            type="email"
            validate
            error="wrong"
            success="right"
          />
          <MDBInput
            name="password"
            label="Type your password"
            icon="lock"
            group
            type="password"
            validate
          />
        </div>
        <div>
          <MDBBtn type="submit">Login</MDBBtn>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (e) => dispatch(tryLogin(e.target)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
