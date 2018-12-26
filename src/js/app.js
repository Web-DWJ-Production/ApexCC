import React, { Component } from 'react';
import { Link } from 'react-scroll';

import Header from './header';
import AccCarousel from './AccCarousel';
import SiteBody from './siteBody';

import '../css/app.less';

class App extends Component{
   constructor(props) {
      super(props);
  
      this.state = {
          scrollSpy: true,
          scrollSmooth: true,
          scrollDuration: 500
      }
   }

   render(){
      return(
         <div className="main-body">
            <Header />
            <AccCarousel />
            <SiteBody />
            <div className="footer">
               <div className="footer-container links">
                  <Link activeClass="active" className="footer-link aboutus" to="aboutus" spy={this.state.scrollSpy} smooth={this.state.scrollSmooth} duration={this.state.scrollDuration}>About Us</Link>
                  <Link activeClass="active" className="footer-link capabilities" to="capabilities" spy={this.state.scrollSpy} smooth={this.state.scrollSmooth} duration={this.state.scrollDuration}>Capabilities</Link>
                  <Link activeClass="active" className="footer-link contactus" to="contactus" spy={this.state.scrollSpy} smooth={this.state.scrollSmooth} duration={this.state.scrollDuration}>Contact Us</Link>
               </div>
               <div className="footer-container copyright">
                  <div className="row-column">APEX COMMUNICATION CORPERATION © COPYRIGHT 2019</div>
                  <div className="row-column">SITE BY <a href="http://dwjproduction.com/" target="_blank" rel="noopener noreferrer">DWJ PRODUCTION WEB</a></div>
               </div>
            </div>
         </div>
      );
   }
}

export default App;