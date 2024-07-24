import { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import '../style/NavigationBar.css';

const NavigationBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => setIsOpen(!isOpen);


  return (
    <Navbar expand="lg" data-bs-theme="dark" className="px-3 px-xxl-5 py-lg-3">
      <Container fluid>
        <Navbar.Brand as={Link} smooth to="/">
            <img src="./assets/logo.png" alt="Eunice Schwaab Logo" className="py-1"/>
        </Navbar.Brand>

        <Navbar.Toggle onClick={toggleButton} aria-controls="responsive-navbar-nav">
          {isOpen ? 'Close Menu' : 'Open Menu'}
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end {isOpen ? 'open' : 'closed'}">
          <Nav className="text-center">
            <Nav.Link as={Link} onClick={toggleButton} smooth to="/">Home</Nav.Link>
            <Nav.Link as={Link} onClick={toggleButton} smooth to="/#books">Books</Nav.Link>
            <Nav.Link as={Link} onClick={toggleButton} smooth to="/#arts">Gallery</Nav.Link>
            <Nav.Link as={Link} onClick={toggleButton} smooth to="/#about">About</Nav.Link>
            <Nav.Link as={Link} onClick={toggleButton} smooth to="/#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default NavigationBar;