import React from 'react';
import Typical from 'react-typical'
import person from '../assets/PersonalData'

const Home = ()=>{
    return(
        <div id="home" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#home" data-slide-to="0" className="active"></li>
                <li data-target="#home" data-slide-to="1"></li>
                <li data-target="#home" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={person.backgroundSlides.slideOne} alt="background-1"/>
                    <div className="carousel-caption">
                        <h3>Hi <span role="img" aria-label="hi-emoji">👋 </span>Nice To Meet You!</h3>
                        <h3>I'm A {` `} <Typical steps={person.about.profession} loop={1} wrapper="span" /> </h3>
                        <a href="#contact"><button type="button" className="btn btn-outline-light btn-lg">Contact Me</button></a>
                        <a href="#projects"><button type="button" className="btn btn-primary btn-lg ml-3">See Projects</button></a>
                         <div className="dropdown animate__animated animate__bounce animate__repeat-3 animate__slower">
                            <a href="#about"><i className="fas fa-arrow-alt-circle-down"/></a>  
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={person.backgroundSlides.slideTwo} alt="background-2"/>
                    <div className="carousel-caption">
                        <h1>Follow Me</h1>
                        <ul className="col-12 media d-flex justify-content-center list-inline">
                            {person.socialMedias.map((media, index) =>(
                                <li key={index} className='list-inline-item'>
                                    <a href={media.url} target="_blank" rel="noopener noreferrer">
                                        <i className={media.icon} />
                                    </a>
                                </li>
                            ))}
                        </ul> 
                        <div className="dropdown animate__animated animate__bounce animate__repeat-3 animate__slower">
                            <a href="#about"><i className="fas fa-arrow-alt-circle-down"/></a> 
                        </div>        
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={person.backgroundSlides.slideThree} alt="background-3"/>
                </div>
            </div>
        </div>
    )
};

export default Home;