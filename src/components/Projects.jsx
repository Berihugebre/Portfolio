import React from 'react';
import {Container, Card, CardDeck } from 'react-bootstrap';
import vr from '../assets/images/vr.png'
import cv from '../assets/images/cv.png'
import bivak from '../assets/images/bivak.png'

const Projects = ()=>{
    const vrConnection = `https://vrconnection-9c6e5.web.app/`
    return(
        <Container id="projects" fluid className="mt-5" style={{backgroundColor:"#c7af6b",textAlign:'center'}}>
            <h1 className="pt-3 pb-3" >Projects</h1>
            <h3 className="pb-2">Check out some of my works</h3>
            <CardDeck style={{backgroundColor:"#balck"}}>
            <Card bg="dark" text="light">
                <Card.Link href={vrConnection}>
                   <Card.Img variant="top" src={vr} className="projectImage"/>
                </Card.Link>
                <Card.Body>
                <Card.Title>VRConnection</Card.Title>
                <Card.Text>
                    A web app that connects refugee and volunteers
                </Card.Text>
                <Card.Link href={vrConnection}>Check the Website</Card.Link>
                </Card.Body>
                
            </Card>
            <Card bg="dark" text="white">
                <Card.Img variant="top" src={bivak} className="projectImage"/>
                <Card.Body>
                <Card.Title> Locate Bivouac Zone</Card.Title>
                <Card.Text>
                   a web app that helps nature lovers to find a bivouac zone in Belgium 
                </Card.Text>
                <Card.Link>Not live yet</Card.Link>
                </Card.Body>
            </Card>
            <Card bg="dark" text="light">
                <Card.Img variant="top" src={cv} className="projectImage"/>
                <Card.Body>
                <Card.Title>This Website</Card.Title>  
                <Card.Text>
                    My Portfolio
                </Card.Text>
                </Card.Body>
            </Card>
            </CardDeck>
    </Container>
    )

};

export default Projects;