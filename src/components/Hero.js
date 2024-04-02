import { Image, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import backgroundVideo from '../backgroundVideo.mp4';  
import '../style/Hero.css';

const Hero = () => {
    return(
        <div id="hero" className="text-center position-relative">
            <video src={backgroundVideo} className="hero-video d-block img-fluid w-100" autoPlay loop muted alt="Blended tint background">
                <source src={backgroundVideo} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            <div className="text-overlay">
                <Container>
                  <Row className="justify-content-center mb-4">
                    <Image src="assets/logo.png" className="profile-img mb-4"/>
                  </Row>
                  <Row className="justify-content-center">
                    <h1 className="hero-title  mb-4">Eunice Schwaab</h1>
                    <Col md={8}>
                      <p className="hero-subtitle lead mb-4"> Explore the twisted imagination of an artist bound by a love for the eerie and the enigmatic.</p>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Row className="justify-content-center g-4">
                      <Col xs={2} md={1}>
                        <a href="https://www.instagram.com/euniceschwaab/"><FontAwesomeIcon icon={faInstagram} className="icons"/></a>
                      </Col>
                      <Col xs={2} md={1}>
                        <a href="https://m.facebook.com/profile.php?id=100039788105973"><FontAwesomeIcon icon={faFacebook} className="icons" /></a>
                      </Col>
                      <Col xs={2} md={1}>
                        <a href="https://m.facebook.com/profile.php?id=100039788105973"><FontAwesomeIcon icon={faTwitter} className="icons" /></a>
                      </Col>
                      <Col xs={2} md={1}>
                        <a href="https://wa.me/8328717839"><FontAwesomeIcon icon={faWhatsapp} className="icons" /></a>
                      </Col>
                    </Row>
                  </Row>
                </Container>
              
            </div>
        </div>

    );

};


export default Hero;


