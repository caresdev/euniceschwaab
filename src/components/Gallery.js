import {Image, Container, Col, Row} from 'react-bootstrap';
import '../style/Gallery.css';

const Gallery = () => {
  return (
    
    <div id="gallery">

        <Container>

          <div className='section-container'>
            <Row>
              <Col> 
                <h1 className='text-center mx-4 my-5 py-3'>Explore Schwaab's Complete Art Collection</h1>
                <Row className="p-3 p-sm-4 mb-4 justify-content-between align-items-start">
                  <Col md={6} className='p-3 my-3 text-center'>
                    <Image src="./assets/melancholy-lake.png" alt="Melancholy Lake art by Eunice Schwaab" className='gallery-art-cover'/>
                  </Col>
                  <Col md={6} className='p-3 my-3 text-center'>
                    <Image src="./assets/perspective.jpg" alt="Perspective art by Eunice Schwaab" className='gallery-art-cover'/>
                  </Col>
                  <Col md={6} className='p-3 my-3 text-center'>
                    <Image src="./assets/the-colored-carcass.png" alt="The Colored Carcass art by Eunice Schwaab" className='gallery-art-cover'/>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

        </Container>
    </div>
  );
}

export default Gallery;
