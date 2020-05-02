import React, {useState} from 'react';
import {Container, Card, Carousel, Row, Col } from 'react-bootstrap';
import person from '../assets/PersonalData'

const Projects = ()=>{
    const [index, setIndex] = useState(0);
    const selectedProject = person.projects[index];
   
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);    
    };
    return(
        <Container id="projects" fluid className="mt-5 vh-100" style={{ textAlign:'center'}}>
            <h1 className="pt-3 pb-2" >Projects</h1>
            <h3 className="pt-2 pb-2">Check out some of my works</h3>
           <Row>
               <Col sm={6} className="d-flex align-items-center justify-content-center">
                    <Card bg="dark" text="white" className="d-bock w-100" >
                        <Card.Body>
                            <Card.Title>{`${index+1}. ${selectedProject.title}`}</Card.Title>
                                <Card.Text>
                                  <span>{selectedProject.about}</span>
                                  <h5>Technologies used:</h5>
                                   <span> {selectedProject.technologies.map((t,i)=>{
                                        return (<span key={i}>{`${t}, `}</span>)
                                    })}
                                    </span>
                                </Card.Text>
                                
                                <Card.Link target="_blank" rel="noopener noreferrer" href={selectedProject.url}>Check The Website</Card.Link>
                        </Card.Body>
                    </Card> 
               </Col>
               <Col sm={6} className="d-flex justify-content-center align-items-center pb-2"> 
                    <Carousel activeIndex={index} onSelect={handleSelect} className="p-5">
                        {person.projects.map((project, i)=>{
                        return    (
                          <Carousel.Item key={i}>
                                <img
                                className="d-block w-100"
                                src={project.image}
                                alt={project.title}
                                />
                            <Carousel.Caption>
                                <a target="_blank" rel="noopener noreferrer" href={project.url}>Check The Website</a>
                            </Carousel.Caption>
                            </Carousel.Item> )
                        })}
                    </Carousel>
               </Col>
           </Row>
    </Container>
    )

};

export default Projects;