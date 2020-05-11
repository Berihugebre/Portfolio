import React from 'react';
import person from '../assets/PersonalData'

const Projects = ()=>{
    return(
        <div id="projects" className="container-fluid padding bg-dark text-white">
            <div className="row headers padding text-center">
                <div className="col-12">
                    <h1 className="display-4">projects</h1>
                </div>
                <hr />
            </div>
            <div className="row">
            <div className="container-fluid padding">
                <div className="row padding d-flex justify-content-around">
                    {person.projects.map((project, index)=>{
                        return(
                            <div key={index} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 padding">
                                <div className="card">
                                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="image-link">
                                         <img src={project.image} alt={project.title} className="card-img-top" />
                                      </a> 
                                    <div className="card-body">
                                        <button className="btn btn-outline-info" data-toggle="collapse" data-target={`#${index}`}>
                                            Click For Detail
                                            <i className="fas fa-caret-down" />
                                        </button>
                                        <div id={index} className="collapse">
                                            <div className="container-fluid padding bg-light text-dark">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h5 className="pt-4 text-center">{project.title}</h5>
                                                        <p className="about-project">{project.about}</p>
                                                    </div>
                                                    <div className="col-12">
                                                        <h5 className="text-center">Technologies</h5>
                                                        <ul className="technologies list-inline">
                                                          {project.technologies.map((tech, index)=>(
                                                            <li key={index} className="list-inline-item">{tech}</li>
                                                          ))}  
                                                        </ul>
                                                    </div>
                                                    <div className="col-12 text-center">
                                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="card-title">
                                                       <button className="btn btn-outline-success btn-sm">
                                                           Visit Website
                                                           <i className="fas fa-long-arrow-alt-right pl-2"/>
                                                        </button>
                                                    </a >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            </div>
       </div>
    )

};

export default Projects;