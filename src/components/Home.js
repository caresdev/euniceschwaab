import { Button } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import Hero from './Hero';
import Books from './Books';
import Arts from './Arts';
import About from './About';
import '../style/Home.css';
import '../style/About.css';

const Home = () => {
    return (
        <div> 
            <header>
                <Hero/>
            </header>

            <main>
                <div className="container section-container col-md-12">

                    {/* Books section */}
                    <section id="books" className='container'>
                        <Books />
                    </section>
                    
                    {/* Arts section */}
                    <section id="arts" className='container'>
                        <Arts />
                        <div className='d-flex justify-content-center mb-5'>
                            <Button as={Link} to="/gallery" className='rating-button'>
                                See More
                            </Button>
                        </div>
                    </section>

                    {/* News  */}

                    

                    {/* About */}
                    <section id="about" className='container'>
                        <About/>
                    </section>
                </div>
            </main>
        </div>
        
    );
};


export default Home;
