import {Image, Container, Col, Row} from 'react-bootstrap';
import '../style/About.css';


const About = () => {
    return(
        
        /* Eliminate redundancy with divs */
        <div className="about-section">
            <Container fluid>

                {/* About */}
                <Row className="justify-content-center align-items-center py-4">
                    <Col xs={10}> 
                        <h2 className="mt-5 mb-3 text-center fw-semibold">Meet Eunice Schwaab </h2>
                        <h3 className='mb-5 text-center'>Unveiling the Creative Mind</h3>
                        <Row className="about-container p-1 p-sm-4 align-items-center">
                            <Col md={8} lg={6} xxl={6} className='my-3 text-center'>
                                <Image src="./assets/eunice-about.jpg" alt="Selfie of Eunice Schwaab" className='about-img mb-4'/>
                            </Col>
                            <Col  md={8} lg={6} xxl={6} className='p-2 my-3'>
                                <p> I am an aspiring author and artist with a passion for creating expressive works which illustrate the madness of practically
                                    everything. I like finding beauty in darkness. I like discovering how my characters will react to extreme settings and possibilities. I like
                                    everything which is creepy and weird. <br/><br/>
                                    I want to demonstrate that horror can reflect inner insecurities, and true human flaws. Scary
                                    things can help us realize our greatest barriers and challenges, and help us to become better human beings. Even if the way we learn this
                                    is gruesome and different. But that's what makes it fun.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>

    );

};

export default About;