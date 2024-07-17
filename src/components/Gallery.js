import {Image, Container, Col, Row} from 'react-bootstrap';
import '../style/Gallery.css';

const Gallery = () => {
  return (
    
    <div id="gallery">

      <Container className="section-container gallery-section" >
        <Row>
          <Col> 
            <h1 className='text-center mx-3 my-5 py-3'>Explore Schwaab's Complete Art Collection</h1>
            <Row className="p-3 p-sm-4 mb-4 justify-content-between align-items-center">
              <Col md={6} className='p-3 my-3 text-center'>
                <Image src="./assets/melancholy-lake.png" alt="Melancholy Lake art by Eunice Schwaab" className='gallery-art-cover mb-4'/>
              </Col>
              <Col  md={6} className='p-3 my-3 text-center'>
                <Image src="./assets/perspective.jpg" alt="Perspective art by Eunice Schwaab" className='gallery-art-cover mb-4'/>
              </Col>
              <Col  md={6} className='p-3 my-3 text-center'>
                <Image src="./assets/the-colored-carcass.png" alt="The Colored Carcass art by Eunice Schwaab" className='gallery-art-cover mb-4'/>
              </Col>
            </Row>
          </Col>
        </Row>

      </Container>

    </div>
   
  );
}

export default Gallery;
