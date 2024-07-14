import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Background from './components/Background';
import Contact from './components/Contact';
import Home from "./components/Home";
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <header>
          <NavigationBar/>
        </header>
        <Background/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>

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
