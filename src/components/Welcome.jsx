import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faGlobe,faList,faChartBar } from '@fortawesome/free-solid-svg-icons'
//shards
import {Button,Container,Row,Col} from 'shards-react'

class Welcome extends Component {
    constructor(props){
        super(props);
        this.state={
          
        }
    }
    render() { 
        return ( 
            <Container fluid>
                <Row  className="welcome">
                    <Col className="welcome-inner">

                        <p style={{color:'grey',fontSize:'20px'}}>Hello,</p>
                        <h1>I'm Bogdan</h1>
                        <h2>Full Stack Web Developer, Mobile Developer & UX/UI Designer</h2>
                        <Link to="/#"><Button pill theme="warning" >Get in Touch</Button></Link>
                     
                    </Col>
                    
                    
                </Row>
                <Row className="about">
                    <Col>
                        <div className="underframe" ></div>
                        <img src={logo} className="overframe"/>
                    </Col>
                    <Col>
                        <h1 className="about-title">About me</h1>
                        <div className="underline"></div>
                        <p><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/><br/>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div>   
                            <Link to="/#"><Button  size="md" theme="success" style={{marginRight:'10px'}} >Get in Touch</Button></Link><Link to="/#"><Button  size="md" theme="info" >Download Resume</Button></Link>
                        </div>
                     
 
                    </Col>
                </Row>
               
            </Container>
         );
    }
}
 
export default Welcome;