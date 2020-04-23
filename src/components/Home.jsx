import React from 'react';
import {Container,Row, Col, ListGroup} from 'react-bootstrap';
import Typical from 'react-typical'

const Home = ()=>{
    return(
        <Container id="home" fluid  className="d-flex align-items-center justify-content-center">
            <Row className="vh-100 align-items-center justify-content-center">
                <Col sm={12} className="align-items-center mt-5 pt-5" >
                    <h1> Hi <span role="img" aria-label="hi-emoji">👋 </span>{ ''}
                        <Typical
                            steps={['Nice to Meet You!']}
                            loop={2}
                            wrapper="b"
                        />
                    </h1>
                 <h1>I am Berihu Gebremedhin</h1>
                 <h2> And I am a Web Developer </h2>
                 <ListGroup horizontal className="justify-content-center mt-5 pt-3">
                          <ListGroup.Item  style={{border:"none", backgroundColor:"transparent"}}><a href="https://www.linkedin.com/in/berihu-gebre/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-linkedin-in fa-2x " ></i></a></ListGroup.Item>
                          <ListGroup.Item style={{border:"none", backgroundColor:"transparent"}}><a href="https://github.com/berihugebre" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a></ListGroup.Item>
                          <ListGroup.Item style={{border:"none", backgroundColor:"transparent"}}><a href="https://twitter.com/Berihu74658089" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-2x"></i></a></ListGroup.Item>
                          {/* <ListGroup.Item style={{border:"none", backgroundColor:"transparent"}}><a href="https://www.facebook.com/mini.max.39794" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-2x"></i></a></ListGroup.Item> */}
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