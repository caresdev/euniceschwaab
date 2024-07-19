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
                    <Image src="./assets/arts/melancholy-lake.png" alt="Melancholy Lake art piece by Eunice Schwaab" className='gallery-art-cover'/>
                  </Col>
                  <Col md={6} className='p-3 my-3 text-center'>
                    <Image src="./assets/arts/perspective.png" alt="Perspective art piece by Eunice Schwaab" className='gallery-art-cover'/>
                  </Col>
                  <Col md={6} className='p-3 my-3 text-center'>
                    <Image src="./assets/arts/the-colored-carcass.png" alt="The Colored Carcass art piece by Eunice Schwaab" className='gallery-art-cover'/>
                  </Col>
                  <Col md={6} className='p-3 my-3 text-center'>
                    <Image src="./assets/arts/bubbles.png" alt="Bubbles art piece by Eunice Schwaab" className='gallery-art-cover'/>
                  </Col>
                  <Col md={6} className='p-3 my-3 text-center'>
                    <Image src="./assets/arts/glass-girl.png" alt="Glass Girl art piece by Eunice Schwaab" className='gallery-art-cover'/>
                  </Col>
                  <Col md={6} className='p-3 my-3 text-center'>
                    <Image src="./assets/arts/hands.png" alt="Hands art piece by Eunice Schwaab" className='gallery-art-cover'/>
                  </Col>
                  <Col md={6} className='p-3 my-3 text-center'>
                    <Image src="./assets/arts/notan-art.png" alt="Hands art piece by Eunice Schwaab" className='gallery-art-cover'/>
                  </Col>
                  <Col md={6} className='p-3 my-3 text-center'>
                    <Image src="./assets/arts/octopus.png" alt="Octopus art piece by Eunice Schwaab" className='gallery-art-cover'/>
                  </Col>
                  <Col md={6} className='p-3 my-3 text-center'>
                    <Image src="./assets/arts/rocket-pus.png" alt="Rocket Pus art piece by Eunice Schwaab" className='gallery-art-cover'/>
                  </Col>
                  <Col md={6} className='p-3 my-3 text-center'>
                    <Image src="./assets/arts/rose-madder-fanart.png" alt="Rose Maddar Fanart art piece by Eunice Schwaab" className='gallery-art-cover'/>
                  </Col>
                  <Col md={6} className='p-3 my-3 text-center'>
                    <Image src="./assets/arts/seaworld.png" alt="Seaworld art piece by Eunice Schwaab" className='gallery-art-cover'/>
                  </Col>
                  <Col md={6} className='p-3 my-3 text-center'>
                    <Image src="./assets/arts/soul.png" alt="Soul art piece by Eunice Schwaab" className='gallery-art-cover'/>
                  </Col>
                  <Col md={6} className='p-3 my-3 text-center'>
                    <Image src="./assets/arts/squidward.png" alt="Squidward art piece by Eunice Schwaab" className='gallery-art-cover'/>
                  </Col>
                  <Col md={6} className='p-3 my-3 text-center'>
                    <Image src="./assets/arts/the-dark-half-fanart.png" alt="The Dark Half Fanart art piece by Eunice Schwaab" className='gallery-art-cover'/>
                  </Col>
                  <Col md={6} className='p-3 my-3 text-center'>
                    <Image src="./assets/arts/the-seaman.png" alt="The Seaman art piece by Eunice Schwaab" className='gallery-art-cover'/>
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
