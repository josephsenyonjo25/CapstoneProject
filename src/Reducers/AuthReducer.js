import * as actions from "../actions/AuthActions";

function isAuthenticated() {
  const authenticationState = localStorage.getItem("authenticated");
  console.log(authenticationState);
  return authenticationState === "true";
}

function authenticated(state, action) {
  localStorage.setItem("authenticated", "true");
  return {
    ...state,
    authenticating: false,
    authenticated: true,
  };
}

function notAuthenticated(state, action) {
  localStorage.setItem("authenticated", "false");
  return {
    ...state,
    authenticating: false,
    authenticated: false,
  };
}

function logout(state, action) {
  localStorage.setItem("authenticated", "false");
  return { ...state, authenticated: false };
}

const initialState = {
  authenticated: isAuthenticated(),
  authenticating: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.REGISTER_ATTEMPT:
      return {
        ...state,
        authenticating: true,
      };
    case actions.REGISTER_SUCCESS:
      return authenticated(state, action);
    case actions.registerFailure:
      return notAuthenticated(state, action);
    case actions.LOGOUT:
      return logout(state, action);
    case actions.LOGIN_SUCCESS:
      return authenticated(state, action);
    case actions.LOGIN_FAILURE:
      return notAuthenticated(state, action);
    case actions.LOGIN_ATTEMPT:
      return {
        ...state,
        authenticating: true,
      };
    default:
      return state;
  }
}
