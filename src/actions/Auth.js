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
    // debugger
    // let form = new FormData()
    // form.append("username", credentials.username)
    // form.append('password', credentials.password)
    return fetch(URL + 'rest-auth/login/', {

      method: "POST",

      headers: {
        // "Accept": "application/json",
        "Content-Type": "application/json"
      },
      // body: {
      //   "username": credentials.username,
      //   "password" : credentials.password
      // }
      // body: form
      body: JSON.stringify(credentials)
      // body: credentials
    })
      // .then(res=> console.log(res.json()))
      .then(res => res.json())

      .then((response) => {
        // debugger
        const token = response.key;
        localStorage.setItem('token', token);

        return getUser(credentials.username)
      })

      .then((user) =>{
        console.log(user)
        dispatch(authSuccess(user, localStorage.token))
      })
      .catch((errors) => {
          dispatch(authFailure(errors))
          localStorage.clear()


      })
   }
}

export const getUser = (username) => {
  // debugger

  return fetch(URL+'users/q?username='+ username, {

    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    // body: JSON.stringify(username)
  })
  // return fetch(request)
    .then(response => response.json())

    // .then(response => response.json())
    // .then(userJson => {console.log( userJson[0])})
    .then(userJson => {return userJson[0]})

    .catch(error => {
      return false;
    });

}
