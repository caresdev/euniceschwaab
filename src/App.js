import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from './components/Hero';
import NavigationBar from './components/NavigationBar';
import Background from './components/Background';
import Books from './components/Books';
import Arts from './components/Arts';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <header>
          <NavigationBar/>
          <Hero/>
        </header>

        <main>
          <Background/>

          <div className="container section-container col-md-12">

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

      {/* Footer */}
      <footer id="contact" className='app-footer'>
        <div className="footer-container">
          <Contact/>
        </div>
      </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
