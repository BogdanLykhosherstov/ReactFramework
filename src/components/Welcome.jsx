import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/Logo.png';
//shards
import {Button} from 'shards-react'

class Welcome extends Component {
    constructor(props){
        super(props);
        this.state={
          
        }
    }
    render() { 
        return ( 
            <div className="welcome">
                <img src={logo} alt=""/>
                <h1>Interlake</h1>
                <p>Technology for Geo Spacial Data Mapping</p>
                <Link to="/dashboard"><Button pill theme="warning">Enter</Button></Link>
            </div>
         );
    }
}
 
export default Welcome;