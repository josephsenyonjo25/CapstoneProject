export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_ATTEMPT = "LOGIN_ATTEMPT";

export const LOGOUT = "LOGOUT";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const REGISTER_ATTEMPT = "REGISTER_ATTEMPT";

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

export function loginAttempt(loginInfo) {
  return {
    type: LOGIN_ATTEMPT,
    payload: loginInfo,
  };
}

export function registerAttempt() {
  return {
    type: REGISTER_ATTEMPT,
  };
}

export function registerSuccess() {
  return {
    type: REGISTER_SUCCESS,
  };
}

export function registerFailure() {
  return {
    type: REGISTER_FAILURE,
  };
}

export function tryRegistration(userInfo) {
  return (dispatch) => {
    dispatch(registerAttempt());

    const newUser = {
      firstName: userInfo.firstName.value,
      lastName: userInfo.lastName.value,
      email: userInfo.email.value,
      address: userInfo.address.value,
      password: userInfo.password.value,
    };

    fetch("https://rocky-mesa-30385.herokuapp.com/api/registrations", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then(() => dispatch(registerSuccess()))
      .catch(() => dispatch(registerFailure()));
  };
}

function searchForLoginInfo(dispatch, users, loginInfo) {
  const userIndex = users.findIndex(
    (user) => user.email === loginInfo.email.value
  );
  if (userIndex)
    users[userIndex].password === loginInfo.password.value
      ? dispatch(loginSuccess())
      : dispatch(loginFailure());
}

export function tryLogin(loginInfo) {
  return (dispatch) => {
    dispatch(loginAttempt());
    fetch("https://rocky-mesa-30385.herokuapp.com/api/registrations")
      .then((res) => res.json())
      .then((json) => searchForLoginInfo(dispatch, json, loginInfo))
      .catch(() => dispatch(loginFailure()));
  };
}
