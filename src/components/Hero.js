import { Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import '../style/Hero.css';

const Hero = () => {
    return(
        <div id="hero" className="text-center position-relative">
            <div className="text-overlay">
                <Container>
                  <Row className="justify-content-center my-4">
                    <Col md={10}>
                      <h1 className="hero-title  mb-4">Eunice Schwaab</h1>
                      <p className="hero-subtitle lead"> Explore the twisted imagination of an artist bound by a love for the eerie and the enigmatic.</p>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                      <Row className='justify-content-center'>
                        <Col xs={2}>
                          <a href="https://www.instagram.com/euniceschwaab/"><FontAwesomeIcon icon={faInstagram} className="icons"/></a>
                        </Col>
                        <Col xs={2}>
                          <a href="https://m.facebook.com/profile.php?id=100039788105973"><FontAwesomeIcon icon={faFacebook} className="icons" /></a>
                        </Col>
                        <Col xs={2}>
                          <a href="https://wa.me/8328717839"><FontAwesomeIcon icon={faWhatsapp} className="icons" /></a>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                 
                </Container>
              
            </div>
        </div>

    );

};


export default Hero;


