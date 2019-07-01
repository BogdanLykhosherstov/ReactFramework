import React, { Component } from 'react';
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
                <h1>Welcome</h1>
                <p>We are glad you are here</p>
                <Button pill theme="warning">Enter</Button>
            </div>
         );
    }
}
 
export default Welcome;