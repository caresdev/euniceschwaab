import {Image, Container, Col, Row, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import '../style/Books.css';


const Books = () => {
    return(
        
        <div id="books" className="books-section">
            <Container fluid>

                {/* Best Selling */}
                <Row className="justify-content-center py-2">
                    <Col xs={10}>
                        <h2 className="my-5 text-center fw-semibold">Schwaab&apos;s Best Selling in Amazon</h2>

                        <Row className='best-selling-container p-3 p-sm-4 justify-content-around'>
                            {/* Combine both columns so they are evenly justified. */}
                            <Col md={6} lg={4} xxl={3} className='p-3 text-center'>
                                <Image src="./assets/stories-from-hell.png" alt="Stories From Hell cover" className='best-selling-cover-img'/>
                            </Col>
                            <Col md={6} lg={8} className='p-3'>
                                <h5>Stories From Hell</h5>
                                <div className='rating-stars mb-4'>
                                    <Row>
                                        <Col>
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
                                    <p className='fst-italic' >Eric Bruce</p>
                                </div>
                                <Button href='https://www.amazon.com/Eunice-Schwaabs-Stories-Hell-Schwaab/dp/B0CS6BWN6P/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.EJoeTxDEzeGz5_TuApVV8jXuCa-AdoKgTKerwOoivi_GjHj071QN20LucGBJIEps.z8Q8Xy79Ba9nxeeeN8JYT6TUALc4sSW4y2Z79MP0EVM&qid=1714451478&sr=8-1' className='rating-button my-4'>Buy Now</Button>
                            </Col>

                        </Row>
                    </Col>
                </Row>

                {/* Featured Books */}
                <Row className="justify-content-center align-items-center py-4">
                    <Col xs={10}> 
                        <h2 className="my-5 text-center fw-semibold">Featured Books</h2>
                        <Row className="featured-books-container p-3 p-sm-4 justify-content-between align-items-center">
                            <Col md={5} lg={3} xxl={2} className='p-3 my-3 text-center'>
                                <Image src="./assets/precious-poison.jpg" alt="Precious Poison cover" className='book-cover mb-4'/>
                                <h5 className='book-title mb-4'>Precious Poison</h5>
                                <Button href='https://www.amazon.com/Precious-Poison-Strange-Macabre-Tales/dp/B0CSK7S8PF/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=' 
                                    className='rating-button mb-4'>
                                        Buy Now
                                </Button>
                            </Col>
                            <Col  md={5} lg={3} xxl={2} className='p-3 my-3 text-center'>
                                <Image src="./assets/stories-from-hell.png" alt="Stories From Hell cover" className='book-cover mb-4'/>
                                <h5 className='book-title mb-4'>Stories From Hell</h5>
                                <Button href='https://www.amazon.com/Eunice-Schwaabs-Stories-Hell-Schwaab/dp/B0CS6BWN6P/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.EJoeTxDEzeGz5_TuApVV8jXuCa-AdoKgTKerwOoivi_GjHj071QN20LucGBJIEps.z8Q8Xy79Ba9nxeeeN8JYT6TUALc4sSW4y2Z79MP0EVM&qid=1714451478&sr=8-1'
                                 className='rating-button mb-4'>
                                    Buy Now
                                </Button>
                            </Col>
                            <Col  md={5} lg={3} xxl={2} className='p-3 my-3 text-center'>
                                <Image src="./assets/the-frosted-horror.jpg" alt="The Frosted Horror cover" className='book-cover mb-4'/>
                                <h5 className='book-title mb-4'>The Frosted Horror</h5>
                                <Button href='https://www.amazon.com/Frosted-Horror-Frightening-Winter-Themed/dp/B08WZ8XR5L?ref_=ast_author_dp' 
                                    className='rating-button mb-4'>
                                        Buy Now
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>

    );

};

export default Books;