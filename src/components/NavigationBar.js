import { useState } from "react";
import { Nav, Navbar, Container} from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import '../style/NavigationBar.css';

const NavigationBar = () => {

  // By default menu is closed when page is loaded
  const [isOpen, setIsOpen] = useState(false);

  // Set setIsOpen = true to open menu when button is toggled
  const toggleButton = () => setIsOpen(!isOpen);


  // Handle user click and close menu 
  const handleClick = () => setIsOpen(false);


  return (
    <Navbar expand="lg" data-bs-theme="dark" className="px-3 px-xxl-5 py-lg-3">
      <Container fluid>
        <Navbar.Brand as={Link} smooth to="/">
            <img src="./assets/logo.png" alt="Eunice Schwaab Logo" className="py-1"/>
        </Navbar.Brand>

        <Navbar.Toggle onClick={toggleButton} aria-controls="responsive-navbar-nav">
          <span className={`navbar-toggler-icon ${isOpen ? 'open' : 'closed'}`}></span>
          <span className={`closing-button ${isOpen ? 'open' : 'closed'}`}> </span>
        </Navbar.Toggle>

        {/* Tie state to Navbar.Collapse */}
        <Navbar.Collapse in={isOpen} id="responsive-navbar-nav" className={`justify-content-end ${isOpen ? 'open' : 'closed'}`}>
          <Nav className="text-center">
            <Nav.Link as={Link} onClick={handleClick} smooth to="/">Home</Nav.Link>
            <Nav.Link as={Link} onClick={handleClick} smooth to="/#books">Books</Nav.Link>
            <Nav.Link as={Link} onClick={handleClick} smooth to="/#arts">Gallery</Nav.Link>
            <Nav.Link as={Link} onClick={handleClick} smooth to="/#about">About</Nav.Link>
            <Nav.Link as={Link} onClick={handleClick} smooth to="/#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default NavigationBar;