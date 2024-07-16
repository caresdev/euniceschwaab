import {Image, Container, Col, Row} from 'react-bootstrap';
import '../style/Gallery.css';

function Gallery() {
  return (
    
    <div id="gallery" className="section-container gallery col-md-12">

      <Container fluid>
        <Row>
          <Col> 
            <h1 className='text-center mx-3 my-5'>Explore Schwaab's Complete Art Collection</h1>
            <Row className="gallery-container p-3 p-sm-4 mb-4 justify-content-between align-items-center">
              <Col md={6} lg={4} className='p-3 my-3 text-center'>
                <Image src="./assets/melancholy-lake.png" alt="Melancholy Lake art by Eunice Schwaab" className='art-cover mb-4'/>
              </Col>
              <Col  md={6} lg={4} className='p-3 my-3 text-center'>
                <Image src="./assets/perspective.jpg" alt="Perspective art by Eunice Schwaab" className='art-cover mb-4'/>
              </Col>
              <Col  md={6} lg={4} className='p-3 my-3 text-center'>
                <Image src="./assets/the-colored-carcass.png" alt="The Colored Carcass art by Eunice Schwaab" className='art-cover mb-4'/>
              </Col>
              <Col md={6} lg={4} className='p-3 my-3 text-center'>
                <Image src="./assets/melancholy-lake.png" alt="Melancholy Lake art by Eunice Schwaab" className='art-cover mb-4'/>
              </Col>
              <Col  md={6} lg={4} className='p-3 my-3 text-center'>
                <Image src="./assets/perspective.jpg" alt="Perspective art by Eunice Schwaab" className='art-cover mb-4'/>
              </Col>
              <Col  md={6} lg={4} className='p-3 my-3 text-center'>
                <Image src="./assets/the-colored-carcass.png" alt="The Colored Carcass art by Eunice Schwaab" className='art-cover mb-4'/>
              </Col>
            </Row>
            </Col>
        </Row>

      </Container>

    </div>
   
  );
}

export default Gallery;
