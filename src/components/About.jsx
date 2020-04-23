import React from 'react';
import { Container,Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import profilePiPicture from '../assets/images/profilepic.jpeg'
import resume from '../assets/documents/CV-Berihu.pdf'

const About = ()=>{
    return(
        <Container id="about" fluid className="mt-5" style={{backgroundColor:'#393939', color: 'rgb(243, 235, 243)'}}>
            <Row>
                <Col sm={4} className="mt-5">
                  <Image src={profilePiPicture} width="100%" roundedCircle />
                </Col>
                <Col sm={8} className="mt-3">
                    <h1>About Me</h1>
                    <ul>
                        <li>I am a quality-oriented recent  Web developer graduate form <a href="https://hackyourfuture.be/" target="_blank" rel="noopener noreferrer" >HackYourFutureBelgium</a>.</li>
                        <li>I participated 1 month boot-camp with <a href="https://bootcamp.hackyourfuture.be/" target="_blank" rel="noopener noreferrer">HackYourFutureBelgium Boot-Camp</a>. </li>
                        <li>I worked as an ICT Teacher and System Administrator for 2 years in  <a href="http://merhatibebacademy.com/" target="_blank" rel="noopener noreferrer">MerhaTibeb Acadmey</a></li>
                        <li>I Graduated in 2015 holding BSC degree in Mathematics with CGPA 3.98/4.00 from <a href="http://merhatibebacademy.com/" target="_blank" rel="noopener noreferrer">Adigrat Uniersity</a> </li>
                        <li> I am currently looking for 
                              <ol>
                                  <li>Full Stack Web development Internship In Belgium</li>
                                  <li>Freelance Web Development </li>
                              </ol>
                         </li>
                    </ul>                    
                      
                    <h2>Contact Details</h2>
                   
                        <ListGroup variant="flush" style={{border:"none", width:"100%", backgroundColor:"white", color:"black"}}>
                            <ListGroup.Item style={{border:"none"}}>Berihu Gebremedhin</ListGroup.Item>
                            <ListGroup.Item style={{border:"none"}}><i className="fas fa-mobile-alt"/> +32465327617</ListGroup.Item>
                            <ListGroup.Item style={{border:"none"}}><i className="fas fa-envelope"/>  berihu05.20@gmail.com</ListGroup.Item>
                            <ListGroup.Item  style={{border:"none"}}><i className="fas fa-map-marker-alt"/> Oostrozebekestraat 26/106, 8770 Ingelmunster (Belgium)</ListGroup.Item>
                        </ListGroup>
                    
                   
                        <a href={resume} target="_blank" rel="noopener noreferrer"><Button className="m-3 text-align-center"><i className="fas fa-download "/> Download Resume</Button></a>
                    
                </Col>
            </Row>
     </Container>
    )

};

export default About;