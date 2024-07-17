// import { Button } from "react-bootstrap";
// import { HashLink as Link } from "react-router-hash-link";
import Hero from './Hero';
import Books from './Books';
import Arts from './Arts';
import About from './About';
import '../style/Home.css';

const Home = () => {
    return (
        <div> 
            <header>
                <Hero/>
            </header>

            <main>
                <div className="container col-md-12">

                    {/* Books section */}
                    <section id="books" className='container'>
                        <Books />
                    </section>
                    
                    {/* Arts section */}
                    <section id="arts" className='container'>
                        <Arts />
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
