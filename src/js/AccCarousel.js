import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

/* Images */
import carouselImg1 from '../assets/stock1.jpeg';
import carouselImg2 from '../assets/img2.jpg';
import carouselImg3 from '../assets/stock3.jpeg';
import carouselImg4 from '../assets/stock4.jpeg';
import carouselImg5 from '../assets/stock8.jpeg';
import carouselImg6 from '../assets/stock11.jpeg';

class AccCarousel extends Component{
   constructor(props) {
    super(props);

    this.state = {
        showThumbs: false,
        carouselData: [
            { img:carouselImg1, class:"acc-header", content:"ACC PROVIDES SOLUTIONS"},
            { img:carouselImg2, class:"", content:"Proven Track Record Over 27 Years"},
            { img:carouselImg3, class:"", content:"Dedicated to Excellence and Customer Service"},
            { img:carouselImg4, class:"", content:"Experienced, Professional, and Qualified Staff"},
            { img:carouselImg5, class:"", content:"Customer First Strategy"},
            { img:carouselImg6, class:"", content:"Outstanding Reputation"}
        ]
    }
   }

   render(){
      return(
         <div className="carousel-body">
            <Carousel className="acc-carousel" showThumbs={this.state.showThumbs} showStatus={false} infiniteLoop autoPlay>
                {this.state.carouselData.map((item, i) => 
                    <div className="slide-container" key={i}>
                        <img alt={"carousel item " + i} src={item.img} />
                        <div className="carousel-cover"></div>
                        <p className={'acc-title ' + item.class}>{item.content}</p>
                    </div>
                )}
            </Carousel>

            <div className="scroll-page"><i class="fas fa-chevron-down"></i></div>
         </div>
      );
   }
}

export default AccCarousel;