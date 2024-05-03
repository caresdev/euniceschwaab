import {Container, Col, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import '../style/AppFooter.css';



const AppFooter = () => {
    return(
        <div className='app-footer'>
            <Container fluid className='justify-content-center p-3'>

                <Row className='justify-content-around my-4 mx-3 p-3'>
                    <Col className='col-md-4'>
                        <img src="./assets/logo-test.png" alt="Eunice Schwaab Logo" className="footer-profile-img py-1"/>
                    </Col>
                    <Col className='col-md-4'>
                        <h2> Your Statement </h2>
                    </Col>
                </Row>


                <Row className='justify-content-around my-4 mx-3 p-3'>
                    <Col className='col-md-4'>
                        <h3 className='my-4'>Get in Touch</h3>
                        <p className=''>
                            <a href="tel: +18328717839"><FontAwesomeIcon icon={faPhone} className="footer-icons" /> (832) 871-7839</a>
                        </p>
                        <p className='align-items-center'>
                            <a href="mailto: euniceschwaab@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="footer-icons"/> euniceschwaab@gmail.com</a>
                        </p>
                           
                    </Col>
                    <Col className='col-md-4'>
                        <h3 className="my-4"> Get Social</h3>
                        <Row className="">
                            <Col xs={2}>
                                <a href="https://www.instagram.com/euniceschwaab/"><FontAwesomeIcon icon={faInstagram} className="footer-icons"/></a>
                            </Col>
                            <Col xs={2}>
                                <a href="https://m.facebook.com/profile.php?id=100039788105973"><FontAwesomeIcon icon={faFacebook} className="footer-icons" /></a>
                            </Col>
                            <Col xs={2}>
                                <a href="https://wa.me/8328717839"><FontAwesomeIcon icon={faWhatsapp} className="footer-icons" /></a>
                            </Col>

                        </Row>
                    </Col>

                </Row>

                <div className='footer-info'>
                    <p className="rights fw-lighter text-center"> &copy; 2024 Eunice Schwaab. All rights reserved.</p>
                </div>
            </Container> 

        </div>
        
            
        
    );
};

export default AppFooter;