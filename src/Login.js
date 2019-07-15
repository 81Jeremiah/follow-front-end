import React, { Component } from 'react';
import { login } from './actions/Auth'
import { connect } from 'react-redux';

class Login extends Component {

  constructor(props) {
  super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  // state = {
  //   email: "",
  //   password: "",
  // };

handleChange = (event) => {

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    // const  user = new FormData();
    // user.append('[user]username', this.state.username)
    // user.append('[user]password', this.state.password)
    // console.log(user)
    this.props.login(this.state)

  }

render() {
  return(
    <form className="form-signin" onSubmit={ this.handleSubmit }>
         {/* <img className="mb-4" src="" alt="" width="72" height="72"/> */}
         <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

      {/* <label htmlFor="inputEmail" className="sr-only">Email address</label> */}

       <input type="text" id="inputUsername"
                className="form-control"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                required autoFocus />

     {/* <label htmlFor="inputPassword" className="sr-only">Password</label> */}

        <input type="password" id="inputPassword"
                className="form-control"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required />

       <div className="checkbox mb-3">
           <label>
             <input type="checkbox" value="remember-me"/> Remember me
           </label>
         </div>
         <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
         <p className="mt-5 mb-3 text-muted"> </p>
       </form>
  );
 }
}

export default connect(null, { login }) (Login);
