import NavigationBar from './components/NavigationBar';
import Background from './components/Background';
import Contact from './components/Contact';
import './Gallery.css';

function Gallery() {
  return (
    
    <div id="gallery" className="Gallery">
        
        <header>
          <NavigationBar/>
        </header>

        <main>
          <Background/>

          <div className="gallery-container col-md-12">


          </div>

      </main>

      {/* Footer */}
      <footer id="contact" className='app-footer'>
        <div className="footer-container">
          <Contact/>
        </div>
      </footer>

    </div>
   
  );
}

export default Gallery;
