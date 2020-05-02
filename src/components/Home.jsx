import React from 'react';
import {Container,Row, Col, ListGroup} from 'react-bootstrap';
import Typical from 'react-typical'
import person from '../assets/PersonalData'

const Home = ()=>{
    return(
        <Container id="home" fluid  className="d-flex align-items-center justify-content-center vh-100">
            <Row className=" align-items-center justify-content-center">
                <Col sm={12} className="align-items-center mt-5 pt-5" >
                    <h1> Hi <span role="img" aria-label="hi-emoji">👋 </span>Nice To Meet You!</h1>
                    <h1>I Am {person.about.name}</h1>
                    <h1> And I Am A {` `}
                        <Typical
                            steps={person.about.profession}
                            loop={1}
                            wrapper="i"
                        />
                    </h1>
                    <ListGroup horizontal className="justify-content-center mt-5 pt-3">
                        {person.socialMedias.map((media, index)=>{
                            return(
                                <ListGroup.Item key={index} style={{border:"none", backgroundColor:"transparent"}}>
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