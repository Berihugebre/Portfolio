import React from 'react';
import person from '../assets/PersonalData'

const Contact =()=>{
    return(
        <div id="contact" className="container-fluid padding" bg="dark">
            <div className="row headers text-center padding">
                <div className="col-12">
                    <h1 className="display-4">Contact Me</h1>
                </div>
                <hr/>
            </div>
            <div className="row padding">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="container-fluid padding">
                        <div className="row text-center padding">
                            <div className="col-12 p-5">
                                <h2>Follow Me</h2>
                                <ul className="col-12 media d-flex justify-content-center list-inline">
                                    {person.socialMedias.map((media, index) =>(
                                        <li key={index} className='list-inline-item'>
                                            <a href={media.url} target="_blank" rel="noopener noreferrer">
                                                <i className={media.icon} />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-12">
                                <p className="lead">
                                    I am online between 14:00 - 15:00 <br />
                                    European Central Time
                                </p>
                                <a 
                                  href="https://be-chat.netlify.app/" 
                                  className="btn btn-outline-success"
                                  target="_blank" rel="noopener noreferrer"
                                  >
                                    Chat Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" text-center p-5 col-sm-12 col-md-6 col-lg-6">
                    <h2 className="pb-2">I'm Ready Let's Talk</h2>
                  <form name="contact" method="post">
                     <input type="hidden" name="form-name" value="contact" />
                    <div className="form-group">
                        <input type="text" name="name" placeholder="Your Name" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Your Email" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="message" placeholder="Your Message"  rows="6" required></textarea>
                    </div>
                       <button type="submit" className="btn btn-outline-primary btn-lg">Send Message</button>
                    </form>
                </div>
            </div>
            
        </div>
    )

};

export default Contact;
