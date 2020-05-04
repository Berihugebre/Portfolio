import React from 'react';
import { Form , Button, Container, Row, Col } from 'react-bootstrap';

const Contact =()=>{
    return(
        <Container id="contact" className="vh-80 p-5 m-5">
            <Row>
                <Col sm={6} >
                    <h1>Contact Me</h1>
                    <h3> I'm Ready, Let's Talk </h3>
                </Col>
                <Col sm={6}>
                  <form name="contact" method="post">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="contact-container">
                        <div className="contact-name">
                            <input type="text" name="name" placeholder="Your Name" size="30" required/>
                        </div>
                        <div className="contact-email">
                            <input type="email" name="email" placeholder="Your Email" size="30" required/>
                        </div>
                        <div className="Message">
                            <textarea name="message" placeholder="Your Message" rows="10" cols="40" required></textarea>
                        </div>
                        <div className="submit-button-container">
                            <Button type="submit">Send Message</Button>
                        </div>
                    </div>
                  </form>
                </Col>
            </Row>
            
        </Container>
    )

};

export default Contact;
