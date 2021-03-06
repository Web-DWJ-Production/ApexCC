import React, { Component } from 'react';

/* Images */
import capabilityImg1 from '../assets/siteImgs-mini/img14.jpeg';
import capabilityImg2 from '../assets/siteImgs-mini/img9.jpeg';
import capabilityImg3 from '../assets/siteImgs-mini/img10.jpeg';
import capabilityImg4 from '../assets/siteImgs-mini/img2.jpeg';
import capabilityImg5 from '../assets/siteImgs-mini/img8.jpeg';

class CapabilitiesList extends Component{
   constructor(props) {
    super(props);

    this.state = {
        capabilities: [
            { title: "Business Development and Team Building", img:capabilityImg1, list:[ "Business Consulting and Analysis","Program & Project Management",
                "Task Order Management",
                "Acquisition Management",
                "Conference and Meeting Facilitation",
                "Assessment and Evaluation Tools", "Joint Ventures/Funding Resources", "Teaming Strategies"]},
            { title: "Staffing", img:capabilityImg2, list:["Facilities Management Services", "Administrative/Clerical Support", "Staff Augmentation", "Training"]},
            { title: "IT Services", img:capabilityImg3, list:["Staffing",
                "Database Administration",
                "System/Software Administration",
                "Network/Systems Engineering",
                "Scanning and Imaging Services",
                "Project/Program Management"]},
            { title: "Operations", img:capabilityImg4, list:["Inventory management/control", 
            "Digital Document Center Operation (Scanning/Document Production)",            
            "Mail Distribution Center Operations", 
            "Warehouse Management and Operations"]},
            { title: "Facilities Management", img:capabilityImg5, list:[
                "Inventory control",
                "Asset Management",
                "Project Management",
                "Interior/Exterior Renovation",
                "Construction Management"]}            
        ]
    }
   }

   render(){
      return(
         <div className="capabilities-body">
            {this.state.capabilities.map((item,i) => 
                <div className={'cap-item' + ( i%2 === 0 ? '' : ' flip')} key={i}> 
                    <img alt="capability object" src={item.img} />
                    <div className="cap-content">
                        <div className="content-title">{item.title}</div>
                        <ul className="fa-ul">
                            {item.list.map((listItem, k) => 
                                <li key={k}><span className="fa-li" ><i className="fas fa-check"></i></span>{ listItem }</li>
                            )}
                        </ul>
                    </div>
                </div>
            )}
         </div>
      );
   }
}

export default CapabilitiesList;