import React from 'react';
import SocialMedia from './SocialMedia';

const Footer =()=>{
    return(
      <>
       <div className="d-flex align-items-center justify-content-center mt-4 mb-2">
            <a href="#home" className="drop_down"><i className="fas fa-chevron-circle-up fa-3x"/></a>
        </div>
        <footer id="contact" className="page-footer font-large mdb-color text-white">
          <div className="container text-center text-md-left">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8">
                <h1>Contact</h1>
              </div>
                <SocialMedia /> 
              </div>

          </div>
           
          </footer>
      </>
    )
};

export default Footer;