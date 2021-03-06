import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import demoScreen from '../img/demo-screen-1.jpg';

class HeaderNav extends Component {

// const Header = () => {
render() {
  return(
    <div>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container">
          <Link to="/signup" className="navbar-brand js-scroll-trigger">Create Account</Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
             <Link to="/login" className="nav-link js-scroll-trigger" >Login</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <header className="masthead">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-7 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5">New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!</h1>
            <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
          </div>
        </div>
        <div className="col-lg-5 my-auto">
          <div className="device-container">
            <div className="device-mockup iphone6_plus portrait white">
              <div className="device">
                <div className="screen">
                   {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                  <img src={ demoScreen } className="img-fluid" alt=""/>
                </div>
                <div className="button">
                  {/* You can hook the "home button" to some JavaScript events or just remove it*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</header>

</div>

  )
 }
};
export default HeaderNav
