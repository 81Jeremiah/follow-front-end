import React from 'react';
import demoScreen from '../img/demo-screen-1.jpg';
import appBadge from '../img/app-store-badge.svg';
import googleBadge from '../img/google-play-badge.svg'
import { Link } from 'react-router-dom';
import HeaderNav from './HeaderNav'
import Footer from './Footer'
const Splash = () =>{

  return(


<div>
<HeaderNav />
<section className="download bg-primary text-center" id="download">

  <div className="container">
    <div className="row">
      <div className="col-md-8 mx-auto">
        <h2 className="section-heading">Discover what all the buzz is about!</h2>
        <p>Our app is available on any mobile device! Download now to get started!</p>
        <div className="badges">
          <a className="badge-link" href="page-top"><img src={appBadge} alt="app store"/></a>
          <a className="badge-link" href="page-top"><img src={googleBadge} alt="google play"/></a>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="features" id="features">
  <div className="container">
    <div className="section-heading text-center">
      <h2>Unlimited Features, Unlimited Fun</h2>
      <p className="text-muted">Check out what you can do with this app theme!</p>
      <hr/>
    </div>
    <div className="row">
      <div className="col-lg-4 my-auto">
        <div className="device-container">
          <div className="device-mockup iphone6_plus portrait white">
            <div className="device">
              <div className="screen">
              {/*Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                <img src={ demoScreen } className="img-fluid" alt=""/>
              </div>
              <div className="button">
                 {/* You can hook the "home button" to some JavaScript events or just remove it*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8 my-auto">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="feature-item">
                <i className="icon-screen-smartphone text-primary"></i>
                <h3>Device Mockups</h3>
                <p className="text-muted">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-item">
                <i className="icon-camera text-primary"></i>
                <h3>Flexible Use</h3>
                <p className="text-muted">Put an image, video, animation, or anything else in the screen!</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="feature-item">
                <i className="icon-present text-primary"></i>
                <h3>Free to Use</h3>
                <p className="text-muted">As always, this theme is free to download and use for any purpose!</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-item">
                <i className="icon-lock-open text-primary"></i>
                <h3>Open Source</h3>
                <p className="text-muted">Since this theme is MIT licensed, you can use it commercially!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="cta">
  <div className="cta-content">
    <div className="container">
      <h2>Stop waiting.<br/>Start building.</h2>
      <a href="#contact" className="btn btn-outline btn-xl js-scroll-trigger">Let's Get Started!</a>
    </div>
  </div>
  <div className="overlay"></div>
</section>

<section className="contact bg-primary" id="contact">
  <div className="container">
    <h2>We
      <i className="fas fa-heart"></i>
      new friends!</h2>
    <ul className="list-inline list-social">
      <li className="list-inline-item social-twitter">
        <a href="#page-top">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li className="list-inline-item social-facebook">
        <a href="#page-top">
          <i className="fab fa-facebook-f"></i>
        </a>
      </li>
      <li className="list-inline-item social-google-plus">
        <a href="#page-top">
          <i className="fab fa-google-plus-g"></i>
        </a>
      </li>
    </ul>
  </div>
</section>
<Footer />

</div>


);
}


export default Splash
