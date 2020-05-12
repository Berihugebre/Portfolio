import React from 'react';
import person from '../assets/PersonalData'

const Header = ()=>{
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#home"><img src={person.about.logo}  alt="berihu logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-spy="scroll" data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto d-flex align-items-center justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li><li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

};

export default Header;