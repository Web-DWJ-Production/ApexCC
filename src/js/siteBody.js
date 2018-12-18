import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Element } from 'react-scroll';
import GoogleMap from 'google-map-react';
import $ from 'jquery';

import "react-alice-carousel/lib/alice-carousel.css";

/* Images */
import weImg1 from '../assets/img1.jpg';
import weImg2 from '../assets/img2.jpg';
import weImg3 from '../assets/img3.jpg';
import weImg4 from '../assets/img4.jpg';
import bannerImg from '../assets/stock5.jpeg';

import DHS from '../assets/client-logos/DHS.png';
import DOC from '../assets/client-logos/DOC.png';
import DON from '../assets/client-logos/DON.png';
import DOT from '../assets/client-logos/DOT.png';
import EPA from '../assets/client-logos/EPA.png';
import FAA from '../assets/client-logos/FAA.png';
import SSA from '../assets/client-logos/SSA.png';
import USAIR from '../assets/client-logos/USAIR.png';
import USPS from '../assets/client-logos/USPS.png';
import VA from '../assets/client-logos/VA.svg';

import CapabilitiesList from './capabilitiesList';

const MapMarker = () => <div className="acc-mapMarker"><i className="fas fa-map-pin"></i></div>;

class SiteBody extends Component{
   constructor(props) {
    super(props);

    this.state = {
        clients:[
            {title:"Department of Transportation", logo:DOT},
            {title:"Department of Homeland Security", logo:DHS},
            {title:"Federal Aviation Administration", logo:FAA},
            {title:"Social Security Administration", logo:SSA},
            {title:"Department of the Navy", logo:DON},
            {title:"Department of Commerce", logo:DOC},
            {title:"Environmental Protection Agency", logo:EPA},
            {title:"United States Postal Service", logo:USPS},
            {title:"US Air Force", logo:USAIR},
            {title:"Veteran Affairs", logo:VA}
        ],
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1024: { items: 3 },
        },
        key:"AIzaSyAhRHiVtCfg6orX2hg3KhCyMQ_OrBso_Es",
        center:[38.811208, -77.1257436],
        zoom: 15,
        office: {lat: 59.724465, lng: 30.080121}
    }

    this.setMarker = this.setMarker.bind(this);
   }

   componentDidMount() {
       //this.setMarker();   
   }


   setMarker() {
    var markerElement = $("div:has(> .acc-mapMarker)")[0];
    if(markerElement){
        markerElement.style.top = 0;
        markerElement.style.left = 0;
    }
   }

   clientItems() {
    return (
      this.state.clients.map((item, i) => (
        <img alt={`logo-${i}`} key={`key-${i}`} src={item.logo} className="clientImg"/>
      ))
    )
  };

   render(){
      const items = this.clientItems();

      return(
         <div className="site-body">
            <Element name="aboutus" className="section-container">
                <h1>About Us</h1>
                <p className="lrg-txt">Since 1991, <b>Apex Communication Corporation (ACC)</b> has operated with the express
                purpose of being a quality, innovative and profitable Program Management and Services
                organization. We are an <b>SBA Small Disadvantaged Business (SDB) and SBA Certified
                Small Business</b> and pride ourselves on making prudent and effective use of products,
                training, personnel and strategic partnerships.</p>
            </Element>

            <Element name="weare" className="section-container">
                <h1>We Are</h1>
                <div className="text-grid">
                    <div className="item">
                        <div className="item-icon"><i className="fas fa-user-tie"></i></div>
                        <div className="item-text">
                            <p>Experienced leaders with more than <b>27 years</b> managing and implementing
                                transformative objectives across the various governmental agencies.</p>
                            <p>We have an in-depth understanding of business process, staffing and operational re-
                                engineering, financial management and financial operations, and leveraging state
                                of the art technology to ensure success.</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-icon"><i className="fas fa-sitemap"></i></div>
                        <div className="item-text bold">
                            <p>Experts in</p>                             
                            <div>Team Building and Business Partnerships</div>
                            <div>Staff Augmentation</div>
                            <div>IT Staffing Solutions</div> 
                            <div>Facilities Management</div> 
                            <div>Office Support Services</div>
                            <div>Recruitment/Staffing</div> 
                            <div>Document/Data Management</div> 
                            <div>Mail management</div>
                            <div>Warehouse Services</div> 
                            <div>and Customized Applications</div>                             
                            <p>that meet our client's requirements.</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-icon"><i className="far fa-lightbulb"></i></div>
                        <div className="item-text">
                            <p>Innovative thinkers focused of cost effective solutions that increase business productivity and efficiency.</p>
                            <p>Proud of our reputation for competence and customer satisfaction, and a uniquely qualified candidate for providing client/customer solutions.</p>
                        </div>
                    </div>
                </div>
            </Element>

            <Element name="clients" className="section-container logo-garden">
                <h1>Our Client</h1>
                <div className="client-list">
                    <span className="ctrl prev" onClick={() => this.Carousel._slidePrev()}><i className="fas fa-chevron-left"></i></span>
                    <span className="ctrl next" onClick={() => this.Carousel._slideNext()}><i className="fas fa-chevron-right"></i></span>
                    
                    <AliceCarousel className="acc-client-carousel" items={items}
                        duration={400}
                        mouseDragEnabled={true}
                        autoPlayDirection="rtl"
                        responsive={this.state.responsive}
                        disableAutoPlayOnAction={true}
                        buttonsDisabled={true}
                        ref={ el => this.Carousel = el }/>
                </div>
            </Element>

            <Element name="capabilities" className="section-container grey-back">
                <h1>Capabilities</h1>
                <p className="md-txt">Apex Communications Corporation (ACC) has significant experience in successfully
facilitating high level services for our clients, including but not limited to:</p>

                <CapabilitiesList />
            </Element>

            <div className="section-container split-section design-back">
                <div className="split-content">
                    <h1>Certifications</h1>

                    <p><b>NAIC Codes:</b> 561110, 561210, 561410, 561439,561499, 611430, 541614, 541611,
                        541430, 519120, 492110, 493110, 493190, 491110, 492210, 323115, 518210</p>
                </div>
                <div className="split-content">
                    <h1>Awards</h1>

                    <ul className="icon-list fa-ul">
                        <li><span className="fa-li" ><i className="fas fa-award"></i></span><b>Department of Transportation:</b> Small Disadvantaged Business of the Year (2005)</li>
                        <li><span className="fa-li" ><i className="fas fa-award"></i></span><b>Department of Transportation:</b> M-90 Contractor Team Award: Office of Facilities, Information and Asset Management (2010)</li>
                    </ul>
                </div>

                <div className="back-img"><img alt="certifications banner" src={bannerImg}/></div>
            </div>

            <Element name="contactus" className="section-container">
                <h1>Contact Us</h1>
                <div className="inner-split-content">
                    <div className="split map">
                        <GoogleMap bootstrapURLKeys={{ key: this.state.key }} center={this.state.center} zoom={this.state.zoom}>
                            <MapMarker lat={this.state.office.lat} lng={this.state.office.lng}></MapMarker>
                        </GoogleMap>
                    </div>

                    <div className="split content">
                        <div className="content-block">We look forward to discussing how we can help fulfill your business’s needs, and
develop a successful partnership. Please contact us at:</div>

                        <div className="content-block">
                            <div>Fred.adams@apexcom1.com</div>
                            <div>703.370.1230</div>
                        </div>

                        <div className="content-block">
                            <div>50 South Pickett Street, Ste 207</div>
                            <div onClick={this.setMarker}>Alexandria, VA 22304</div>
                        </div>
                    </div>
                </div>
            </Element>
         </div>
      );
   }
}

export default SiteBody;