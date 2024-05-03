import {Container, Col, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
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
                    <Col className='col-md-4 align-items-center'>
                        <h3 className='my-4'>Get in Touch</h3>
                        <p className='align-items-center'>
                            <a href="tel: +18328717839"><FontAwesomeIcon icon={faPhone} className="footer-icons" /> (832) 871-7839</a>
                        </p>
                        <p className='align-items-center'>
                            <a href="mailto: euniceschwaab@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="footer-icons"/> euniceschwaab@gmail.com</a>
                        </p>
                           
                    </Col>
                    <Col className='col-md-4'>
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