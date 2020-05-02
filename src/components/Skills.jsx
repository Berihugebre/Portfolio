import React from 'react';
import { Container,Row, Col, ListGroup } from 'react-bootstrap';
import person from '../assets/PersonalData'

const Skills = ()=>{
    return(
        <Container id="skills" className="pt-2 pb-2 d-flex justify-content-center" fluid style={{backgroundColor:"#fceed1", color:"black"}}>
            <Row className="w-100">
              <Col sm={2} className="d-flex align-items-center justify-content-center">
                  <h1 >Skills</h1>
              </Col>
                <Col sm={10}>
                <h2 className="mb-2 mt-2">Frontend</h2>
                <ListGroup horizontal="sm">
                    {person.skills.frontend.map((skill, index)=>{
                      return(<ListGroup.Item key={index}>{skill}</ListGroup.Item>)
                    })}  
                </ListGroup>
                <h2 className="mb-2 mt-2">Backend</h2>
                <ListGroup horizontal="sm" >
                    {person.skills.backend.map((skill,index)=>{
                      return(<ListGroup.Item key={index}>{skill}</ListGroup.Item>)
                    })}  
                </ListGroup>
                <h2 className="mb-2 mt-2">Database</h2>
                <ListGroup horizontal="sm">
                    {person.skills.database.map((skill,index)=>{
                      return(<ListGroup.Item key={index}>{skill}</ListGroup.Item>)
                    })}  
                </ListGroup>
                <h2 className="mb-2 mt-2">version Control</h2>
                <ListGroup horizontal="sm" >
                    {person.skills.versionControl.map((skill,index)=>{
                      return(<ListGroup.Item key={index}>{skill}</ListGroup.Item>)
                    })}  
                </ListGroup>
                <h2 className="mb-2 mt-2">Cloud</h2>
                <ListGroup horizontal="sm" >
                    {person.skills.cloud.map((skill,index)=>{
                      return(<ListGroup.Item key={index}>{skill}</ListGroup.Item>)
                    })}  
                </ListGroup>
                </Col>
            </Row>
     </Container>
    )

};

export default Skills;