import React, { Component } from 'react';
import Navbar from './Navbar';
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button
  } from "shards-react";
class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
          
        }
    }
    render() { 
        return ( 
           
            <div className="dashboard">
                <Navbar/>
                <Card>
                    <CardBody>
                        <p>Dashboards</p>
                        <CardTitle className="cardTitle">Overview</CardTitle>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Button pill theme="success">Read more &rarr;</Button>
                 </CardBody>
                </Card>
                
            </div>
         );
    }
}
 
export default Dashboard;