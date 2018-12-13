import React, { Component } from 'react';

import Header from './header';
import AccCarousel from './AccCarousel';
import SiteBody from './siteBody';

import '../css/app.less';

class App extends Component{
   render(){
      return(
         <div className="main-body">
            <Header />
            <AccCarousel />
            <SiteBody />
            <div class="footer"></div>
         </div>
      );
   }
}

export default App;