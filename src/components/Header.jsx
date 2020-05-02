import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../assets/images/logo.png';

const Header = ()=>{
    return(
        <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark" style={{backgroundColor: `#107896` }}>
            <Navbar.Brand href="#home">
                <img src={logo} width="50" height="50" className="d-inline-block align-top" alt="Berihu logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav ">
                <Nav className="d-flex align-items-center justify-content-center">
                    <Nav.Link href="#home">HOME</Nav.Link>
                    <Nav.Link href="#about">ABOUT</Nav.Link>
                    <Nav.Link href="#skills">SKILLS</Nav.Link>
                    <Nav.Link href="#projects">PROJECTS</Nav.Link>
                    <Nav.Link href="https://be-chat.netlify.app/" target="_blank" rel="noopener noreferrer"><Button variant="success">Chat me</Button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

};

export default Header;