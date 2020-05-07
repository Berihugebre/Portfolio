import React from 'react';
import person from '../assets/PersonalData'

const About = ()=>{
    return(
        <div class="container-fluid padding" id="about">
            <div class="row headers padding">
                <div class="col-12 text-center">
                    <h1 class="display-4">About Me</h1>
                </div>
                <hr />
                <div className="col-xs-12 col-sm-12 col-md-4 padding">
                    <img src={person.about.profilePiPicture} width="100%" alt="profile" className="rounded-circle"/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-8">
                    <ul>
                        {person.background.map((bg,index)=>(
                            <li key={index}>{`${bg.experience} `} 
                                <a href={bg.url} target="_blank" rel="noopener noreferrer" className="education">
                                    {bg.school}
                                </a>
                            </li>
                        ))}
                    </ul>     
                </div>
            </div>
            <div className="row">
              <div class="container">
                <div class="row jumbotron">
                    <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
                        <p class="lead">
                            I am currently looking for MERN (MongoDB, Express, React and Node) Stack development Internship.
                        </p>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
                        <a href={person.about.resume} target="_blank" rel="noopener noreferrer">
                            <button type="button" class="btn btn-outline-secondary btn-lg">
                            <i className="fas fa-download pr-1"></i>
                                Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            </div>
            <hr className="my-4"/>
        </div>
    )

};

export default About;