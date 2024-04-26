import {Image, Container, Col, Row} from 'react-bootstrap';
import '../style/Arts.css';


const Arts = () => {
    return(
        
        <div className="arts-section">
            <Container fluid>

                {/* Arts */}
                <Row className="justify-content-center align-items-center py-4">
                    <Col xs={10}> 
                        <h2 className="my-5 text-center fw-semibold">Schwaab&apos;s Artistry</h2>
                        <Row className="arts-container p-3 p-sm-4 justify-content-between align-items-center">
                            <Col md={5} lg={3} xxl={2} className='p-3 my-3 text-center'>
                                <Image src="./assets/melancholy-lake.png" alt="Melancholy Lake art by Eunice Schwaab" className='art-cover mb-4'/>
                                <h5 className='mb-4'>Melancholy Lake</h5>
                            </Col>
                            <Col  md={5} lg={3} xxl={2} className='p-3 my-3 text-center'>
                                <Image src="./assets/perspective.jpg" alt="Perspective art by Eunice Schwaab" className='art-cover mb-4'/>
                                <h5 className='mb-4'>Perspective</h5>
                            </Col>
                            <Col  md={5} lg={3} xxl={2} className='p-3 my-3 text-center'>
                                <Image src="./assets/the-colored-carcass.png" alt="The Colored Carcass art by Eunice Schwaab" className='art-cover mb-4'/>
                                <h5 className='mb-4'>The Colored Carcass</h5>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>

    );

};

export default Arts;