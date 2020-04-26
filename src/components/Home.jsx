import React from 'react';
import {Container,Row, Col, ListGroup} from 'react-bootstrap';
import Typical from 'react-typical'
import person from '../assets/PersonalData'

const Home = ()=>{
    return(
        <Container id="home" fluid  className="d-flex align-items-center justify-content-center">
            <Row className="vh-100 align-items-center justify-content-center">
                <Col sm={12} className="align-items-center mt-5 pt-5" >
                    <h1> Hi <span role="hi-img" aria-label="hi-emoji">👋 </span>Nice to Meet You!</h1>
                    <h1>I am {person.about.name}</h1>
                    <h2> And I am a {` `}
                            <Typical
                                steps={person.about.profession}
                                loop={1}
                                wrapper="span"
                            />
                    </h2>
                    <ListGroup horizontal className="justify-content-center mt-5 pt-3">
                        {person.socialMedias.map((media)=>{
                            return(
                                <ListGroup.Item style={{border:"none", backgroundColor:"transparent"}}>
                                    <a href={media.url} target="_blank" rel="noopener noreferrer" >
                                       <i className={`${media.icon} fa-2x`} ></i>
                                    </a>
                                </ListGroup.Item>
                            ) 
                        })}
                    </ListGroup>
                </Col>
                <Col className="d-flex align-items-center justify-content-center mt-5">
                  <a href="#about" className="drop_down"><i className="fas fa-chevron-circle-down fa-3x"/></a>
                </Col>
            </Row>
     </Container>
    )

};

export default Home;