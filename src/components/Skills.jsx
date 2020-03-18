import React from 'react';
import { Container,Row, Col, Table } from 'react-bootstrap';

const Skills = ()=>{
    return(
        <Container id="skills" className="mt-5" fluid style={{backgroundColor:"#fceed1", color:"black"}}>
            <Row>
                <Col sm={4} className="pt-3">
                  <h1>Skills</h1>
                </Col>
                <Col sm={8} className="pt-3">
                    <p>
                      During those 8 month intensive training and online learning I am
                      confident enough with the following technologies:
                    </p>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Front-End</th>
                                <th>Back-End</th>
                                <th>Database</th>
                                <th>Version Control</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><i className="fab fa-html5 fa-3x " /></td>
                                <td><i className="fab fa-node fa-3x"></i></td>
                                <td><b>MySQL</b></td>
                                <td><i className="fab fa-git fa-3x"></i></td>
                            </tr>
                            <tr>
                                <td><i className="fab fa-css3-alt fa-3x" /></td>
                                <td><b>GraphQL</b></td>
                                <td><b>Mongo DB</b></td>
                            <td><i className="fab fa-github fa-2x"></i></td>
                            
                            </tr>
                            <tr>
                              <td ><i className="fab fa-js fa-3x" /></td>
                            </tr>
                            <tr>
                              <td><i className="fab fa-react fa-3x" /></td>
                            </tr>
                            <tr>
                              <td><b>Bootstrap 4</b></td>
                            </tr>
                            <tr>
                              <td><i className="fas fa-leaf fa-3x" /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
     </Container>
    )

};

export default Skills;