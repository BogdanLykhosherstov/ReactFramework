import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from "shards-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faGlobe,faList,faChartBar } from '@fortawesome/free-solid-svg-icons'
import "../styles/App.scss";

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = { 

         }
    }
    
    render() { 
        return ( 
            <div className="nav-bar">
               <ul>
                <li><a href="#"><FontAwesomeIcon size="lg" icon={faHome} /></a></li>
                <li><a href="#"><FontAwesomeIcon size="lg" icon={faGlobe} /></a></li>
                <li><a href="#"><FontAwesomeIcon size="lg" icon={faList} /></a></li>
                <li><a href="#"><FontAwesomeIcon size="lg" icon={faChartBar} /></a></li>
                </ul>
                <div className="filler">

                </div>
            </div>
         );
    }
}
 
export default Navbar;