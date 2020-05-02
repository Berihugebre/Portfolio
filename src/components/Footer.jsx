import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import person from '../assets/PersonalData'

const Footer =()=>{
    return(
      <Row className="mt-3 p-2 bg-secondary">
        <Col className="d-flex align-items-center justify-content-center">© 2020 Berihu Gebremedhin</Col>
        <Col  className="d-flex align-items-center justify-content-center">
          <a href="#home" >
            <i className="fas fa-chevron-circle-up fa-3x"/>
            </a>
        </Col>
        <Col >
           <ListGroup horizontal className="d-flex align-items-center justify-content-center">
                {person.socialMedias.map((media, index)=>{
                    return(
                        <ListGroup.Item key={index} style={{border:"none", backgroundColor:"transparent"}}>
                            <a href={media.url}   target="_blank" rel="noopener noreferrer" >
                                <i className={`${media.icon} fa-2x drop_down`} ></i>
                            </a>
                        </ListGroup.Item>
                    ) 
                })}
            </ListGroup>
        </Col>
      </Row>
    )
    
};

export default Footer;