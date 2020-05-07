import React from 'react';
import Typical from 'react-typical'
import person from '../assets/PersonalData'
import bg1 from '../assets/images/bg-1.jpeg'
import bg2 from '../assets/images/bg-2.jpeg'
import bg3 from '../assets/images/bg-3.jpeg'

const Home = ()=>{
    return(
        <div id="slides" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#slides" data-slide-to="0" class="active"></li>
                <li data-target="#slides" data-slide-to="1"></li>
                <li data-target="#slides" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={bg1} alt="background-1"/>
                    <div className="carousel-caption">
                        <h1 className="display-4">Hi <span role="img" aria-label="hi-emoji">👋 </span>Nice To Meet You!</h1>
                        <h3>I'm A {` `} <Typical steps={person.about.profession} loop={1} wrapper="span" /> </h3>
                        <a href="#contact"><button type="button" className="btn btn-outline-light btn-lg">Contact Me</button></a>
                        <a href="#projects"><button type="button" className="btn btn-primary btn-lg ml-3">See Projects</button></a>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={bg2} alt="background-2"/>
                </div>
                <div className="carousel-item">
                    <img src={bg3} alt="background-3"/>
                </div>
            </div>
        </div>
    )
};

export default Home;