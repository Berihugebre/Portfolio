import React from 'react';
import person from '../assets/PersonalData';

const Skills = ()=>{
    return(
      <div className="container-fluid padding bg-info text-white" id="skills">
        <div className="row headers text-center padding">
            <div className="col-12">
                <h1 className="display-4">Skills</h1>
            </div>
            <hr />
        </div>
        <div className="row text-center padding d-flex justify-content-around">
              {person.skills.map((skill, index)=>{
                return (
                  <div key={index} className="skill padding col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                      <i className={skill.icon}></i>
                      <h3>{skill.name}</h3>
                      <ul className="language list-inline">
                         {skill.language.map((lang, index)=>(
                          <li key={index} className="list-inline-item">{lang}</li>
                          ))}
                        </ul>
                  </div>
                )
              })}
        </div>
        <hr className="my-4"/>
          <div className="row jumbotron bg-light text-dark">
              <div className="col-12 text-center">
                  <h3 className="heading">Testimonial</h3>
                  <div className="heading-underline"></div>
              </div>
                <div className="row d-flex justify-content-center">  
                  {person.testimonials.map((testimonial,index)=>(
                    <div key={index} className="col-md-6 testimonial">
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-4">
                              <img src={testimonial.picture} alt={testimonial.name} />
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-8">
                              <blockquote>
                                <i className="fas fa-quote-left" />
                                {testimonial.message}
                                <i className="fas fa-quote-right" />
                                <hr className="testimonial-hr" />
                                <cite>&#8212;{testimonial.name}</cite> <br/>
                                <cite>{testimonial.job}</cite>
                              </blockquote>
                          </div>
                        </div>
                    </div>
                  ))}
                </div>
          </div>
        <hr className="my-4"/>
    </div>
    )

};

export default Skills;