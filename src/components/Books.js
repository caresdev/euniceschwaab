import {Image, Container, Col, Row, Button} from 'react-bootstrap';
import '../style/Books.css';

const Books = () => {
    return(
        <div className="books-section">
            <Container fluid>
                <Row className="justify-content-center my-4">
                    <Col md={10} className='best-selling'>
                        <h1 className="hero-title mb-4">Schwaab&apos;s Best Selling in Amazon</h1>
                        <Row>
                            <Col>
                                <Image src="./assets/sfhCover.png" alt="Stories From Hell cover" className='best-selling-cover-img'/>
                            </Col>
                            
                            <Col>
                                <div className='rating-stars'> Rating Stars</div>
                                <div className='rating-comment'>Rating Comment</div>
                                <Button></Button>
                            </Col>

                        </Row>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                    <Col xs={3} lg={4}>

                        <Image src="" alt="" className='book-cover'/>
                        <h3 className='book-title'>Book 1</h3>
                        <Button></Button>
                    </Col>
                    <Col xs={3} lg={4}>

                        <Image src="" alt="" className='book-cover'/>
                        <h3 className='book-title'>Book 2</h3>
                        <Button></Button>
                    </Col>
                    <Col xs={3} lg={4}>

                        <Image src="" alt="" className='book-cover'/>
                        <h3 className='book-title'>Book 3</h3>
                        <Button></Button>
                    </Col>
                </Row>

            </Container>
        </div>

    );

};

export default Books;