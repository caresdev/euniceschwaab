import {Image, Container, Col, Row} from 'react-bootstrap';
import '../style/About.css';


const About = () => {
    return(
        
        /* Eliminate redundancy with divs */
        <div className="about-section">
            <Container fluid>

                {/* About */}
                <Row className="">
                    <Col> 
                        <Row className="about-container justify-content-evenly align-items-center py-5 my-lg-5 g-xl-0">
                            <Col md={10} lg={5} xxl={5} className='text-center'>
                                <Image src="./assets/eunice-selfie.jpg" alt="Selfie of Eunice Schwaab" className='about-img'/>
                            </Col>
                            <Col  md={10} lg={5} xxl={5} className='px-5'>
                                <div className=''>
                                    <h2 className="fw-semibold mt-4 mt-md-0 mb-5">Meet Eunice Schwaab </h2>
                                    {/* <h5 className='mb-5'>Unveiling the Creative Mind</h5> */}
                                </div>
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