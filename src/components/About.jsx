import React from 'react';
import person from '../assets/PersonalData';

const About = ()=>{
    return(
        <div className="container-fluid padding" id="about">
            <div className="row headers padding">
                <div className="col-12 text-center ">
                     <h1 className="display-4 animated wow slideInLeft">About Me</h1>
                </div>
                <hr />
                <div className="col-xs-12 col-sm-12 col-md-4 padding animated wow zoomIn">
                    <img src={person.about.profilePiPicture} width="100%" alt="profile" className="rounded-circle"/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-8">
                    <ul>
                        {person.background.map((bg,index)=>(
                            <li key={index} className="lead">{`${bg.experience} `} 
                                <a href={bg.url} target="_blank" rel="noopener noreferrer" className="education">
                                    {bg.school}
                                </a>
                            </li>
                        ))}
                    </ul>     
                </div>
            </div>
            <div className="row">
              <div className="container">
                <div className="row jumbotron">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 col-xl-9">  
                        <p className="lead">
                            I am currently looking for MERN (MongoDB, Express, React and Node) Stack development Internship.
                        </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                        <a href={person.about.resume} target="_blank" rel="noopener noreferrer">
                            <button type="button" className="btn btn-primary btn-lg">
                            <i className="fas fa-download pr-2"></i>
                                Download Resume
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