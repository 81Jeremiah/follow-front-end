const URL = "http://127.0.0.1:8000/api/v1/"

const authRequest = () => {
  return {
    type: "AUTHENTICATION_REQUEST"
  }
}

const authSuccess = (user, token) => {
  return {
    type: "AUTHENTICATION_SUCCESS",
    user: user,
    token: token
  }
}
const authFailure = (errors) => {
  return {
    type: "AUTHENTICATION_FAILURE",
    errors: errors
  }
}
export const login = (credentials) =>{

  return dispatch => {
    dispatch(authRequest())
    return fetch(URL + 'rest-auth/login/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({auth: credentials})
    })
      .then(res => res.json())
      .then((response) => {
        const token = response.key;
        localStorage.setItem('token', token);

        return getUser(credentials)
      })
      .then((user) =>{
        dispatch(authSuccess(user, localStorage.token))
      })
      .catch((errors) => {
          dispatch(authFailure(errors))
          localStorage.clear()


      })
   }
}

export const getUser = (credentials) => {
  const request = new Request(`/api/find_user`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.token}`,
    }),
    body: JSON.stringify(credentials)
  })
  return fetch(request)
    .then(response => response.json())
    .then(userJson => {return userJson})

    .catch(error => {
      return false;
    });

}
