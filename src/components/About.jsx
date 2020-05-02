import React from 'react';
import { Container,Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import person from '../assets/PersonalData'

const About = ()=>{
    return(
        <Container id="about" fluid className="mt-5" style={{backgroundColor:'#393939', color: 'rgb(243, 235, 243)'}}>
            <Row>
                <Col sm={4} className="mt-5">
                  <Image src={person.about.profilePiPicture} width="100%" roundedCircle />
                  <div className="d-flex align-items-center justify-content-center flex-column pt-5">
                        <p> I am online between 11:00 and 16:00 Central European Time </p>
                        <a href="https://be-chat.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <Button variant="success">Chat me</Button> 
                        </a>
                  </div>
                </Col>
                <Col sm={8} className="mt-3">
                    <h1>About Me</h1>
                    <ul>
                        {person.background.map((bg,index)=>(
                            <li key={index}>{`${bg.experience} `} 
                                <a href={bg.url} target="_blank" rel="noopener noreferrer" >
                                    {bg.school}
                                </a>
                            </li>
                        ))}
                        <li> I am currently looking for
                            <ol>
                                {person.currentStatus.map((status, index)=>(
                                    <li key={index}>{status}</li>
                                ))}
                            </ol>
                        </li>
                    </ul>                    
                      
                    <h2>Contact Details</h2>
                   
                    <ListGroup variant="flush" style={{border:"none", width:"100%", backgroundColor:"white", color:"black"}}>
                        <ListGroup.Item style={{border:"none"}} key={1}>{person.about.name}</ListGroup.Item>
                        <ListGroup.Item style={{border:"none"}}key={2}><i className="fas fa-mobile-alt"/> {person.about.phone}</ListGroup.Item>
                        <ListGroup.Item style={{border:"none"}}key={3}><i className="fas fa-envelope"/> {person.about.email}</ListGroup.Item>
                        <ListGroup.Item style={{border:"none"}}key={4}><i className="fas fa-map-marker-alt"/> {person.about.address}</ListGroup.Item>
                    </ListGroup> 
                        
                    <a href={person.about.resume} target="_blank" rel="noopener noreferrer">
                        <Button className="m-3 text-align-center">
                            <i className="fas fa-download " /> 
                               {' '} Download Resume
                        </Button>
                    </a>                   
                </Col>
            </Row>
     </Container>
    )

};

export default About;