import { Nav, Navbar, Container } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import '../style/NavigationBar.css';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="px-3 px-xxl-5 py-lg-3">
      <Container fluid>
        <Navbar.Brand as={Link} smooth to="/">
            <img src="./assets/logo.png" alt="Eunice Schwaab Logo" className="py-1"/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="text-center">
            <Nav.Link as={Link} smooth to="/">Home</Nav.Link>
            <Nav.Link as={Link} smooth to="/#books">Books</Nav.Link>
            <Nav.Link as={Link} smooth to="/#arts">Gallery</Nav.Link>
            {/* <Nav.Link as={Link} to="/#news">News</Nav.Link> */}
            <Nav.Link as={Link} smooth to="/#about">About</Nav.Link>
            <Nav.Link as={Link} smooth to="/#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;