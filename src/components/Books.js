import {Image, Container, Col, Row, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import '../style/Books.css';


const Books = () => {
    return(
        
        <div className="books-section">
            <Container fluid>

                {/* Best Selling */}
                <Row className="justify-content-center py-2">
                    <Col xs={10}>
                        <h2 className="my-5 text-center fw-semibold">Schwaab&apos;s Best Selling in Amazon</h2>

                        <Row className='best-selling p-3 p-sm-4 justify-content-center'>
                            {/* Combine both columns so they are evenly justified. */}
                            <Col lg={4} xxl={3} className='p-3 text-center'>
                                <Image src="./assets/stories-from-hell.png" alt="Stories From Hell cover" className='best-selling-cover-img'/>
                                {/* increase size of image for phone devices >= 375px */}
                            </Col>
                            <Col lg={8} className='p-3'>
                                <h5>Stories From Hell</h5>
                                <div className='rating-stars mb-4'>
                                    <Row>
                                        <Col className='rating'>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='rating-comment mb-4'>
                                    <p> 
                                        “A very well written book of short stories. 
                                        This 13-year-old girl has a bright future as a horror novelist ahead of her. 
                                        Well worth the read”.
                                    </p>
                                    <p>Eric Bruce</p>
                                </div>
                                <Button className='rating-button my-4'>Buy Now</Button>
                            </Col>

                        </Row>
                    </Col>
                </Row>

                {/* Featured Books */}
                <Row className="justify-content-center align-items-center py-4">
                    <Col xs={10}> 
                        <h2 className="my-5 text-center fw-semibold">Featured Books</h2>
                        <Row className="featured-books p-3 p-sm-4 justify-content-between align-items-center">
                            <Col lg={4} xxl={3} className='p-3 my-3 text-center'>
                                <Image src="./assets/precious-poison.jpg" alt="Precious Poison cover" className='book-cover mb-4'/>
                                <h5 className='book-title mb-4'>Precious Poison</h5>
                                <Button className='rating-button mb-4'>Buy Now</Button>
                            </Col>
                            <Col lg={4} xxl={3} className='p-3 my-3 text-center'>
                                <Image src="./assets/stories-from-hell.png" alt="Stories From Hell cover" className='book-cover mb-4'/>
                                <h5 className='book-title mb-4'>Stories From Hell</h5>
                                <Button className='rating-button mb-4'>Buy Now</Button>
                            </Col>
                            <Col lg={4} xxl={3} className='p-3 my-3 text-center'>
                                <Image src="./assets/the-frosted-horror.jpg" alt="The Frosted Horror cover" className='book-cover mb-4'/>
                                <h5 className='book-title mb-4'>The Frosted Horror</h5>
                                <Button className='rating-button mb-4'>Buy Now</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>

    );

};

export default Books;