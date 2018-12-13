import React, { Component } from 'react';

/* Images */
import capabilityImg1 from '../assets/stock13.jpeg';
import capabilityImg2 from '../assets/stock15.jpeg';
import capabilityImg3 from '../assets/stock14.jpeg';
import capabilityImg4 from '../assets/stock17.jpeg';
import capabilityImg5 from '../assets/stock16.jpeg';

class CapabilitiesList extends Component{
   constructor(props) {
    super(props);

    this.state = {
        capabilities: [
            { title: "Business Development and Team Building", img:capabilityImg1, list:[ "Business Consulting and Analysis","Program & Project Management",
                "Task Order Management",
                "Acquisition Management",
                "Conference and Meeting Facilitation",
                "Assessment and Evaluation Tools"]},
            { title: "Staffing", img:capabilityImg2, list:["Facilities Management Services", "Administrative/Clerical Support"]},
            { title: "IT Services", img:capabilityImg3, list:["Staffing",
                "Database Administration",
                "System/Software Administration",
                "Network Engineering",
                "Scanning and Imaging Services"]},
            { title: "Operations", img:capabilityImg4, list:["Warehouse Management and Operations","Mail Distribution Center Operations", "Digital Document Center Operation (Print Shop)", "Inventory management/control"]},
            { title: "Facilities Management", img:capabilityImg5, list:["Construction and Renovation"]}            
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