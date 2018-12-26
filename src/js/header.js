import React, { Component } from 'react';
import { Link } from 'react-scroll';

/* Images */
import accLogo from '../assets/logos/acc_logo_word_light.png';


class Header extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
            scrollSpy: true,
            scrollSmooth: true,
            scrollDuration: 500
        }
    }

    componentDidMount() {}

    componentWillUnmount() {}

   render(){
      return(
         <div className="header-body">
            <nav className="navbar navbar-expand-lg acc-navbar">
                <div className="navbar-brand">
                    <img className="navbar-logo" src={accLogo} alt="Home Logo"/>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse navbar-right" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link activeClass="active" className="nav-link aboutus" to="aboutus" spy={this.state.scrollSpy} smooth={this.state.scrollSmooth} duration={this.state.scrollDuration}>About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link clients" to="clients" spy={this.state.scrollSpy} smooth={this.state.scrollSmooth} duration={this.state.scrollDuration}>Clients</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link capabilities" to="capabilities" spy={this.state.scrollSpy} smooth={this.state.scrollSmooth} duration={this.state.scrollDuration}>Capabilities</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link contactus" to="contactus" spy={this.state.scrollSpy} smooth={this.state.scrollSmooth} duration={this.state.scrollDuration}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
         </div>
      );
   }
}

export default Header;