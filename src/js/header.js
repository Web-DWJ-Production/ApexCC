import React, { Component } from 'react';

/* Images */
import accLogo from '../assets/logos/acc_logo_word.png';


class Header extends Component{
   render(){
      return(
         <div className="header-body">
            <nav className="navbar navbar-expand-lg acc-navbar">
                <a className="navbar-brand" href="#">
                    <img className="navbar-logo" src={accLogo} alt="Home Logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-right" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Clients</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Capabilities</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
         </div>
      );
   }
}

export default Header;