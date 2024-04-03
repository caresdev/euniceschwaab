import { Nav, Navbar, Container } from "react-bootstrap";
import '../style/NavigationBar.css';

const NavigationBar = () => {
  return (
    <Navbar expand="xl" data-bs-theme="dark" className="fixed-top px-3 px-md-5 py-md-3">
      <Container fluid>
        <Navbar.Brand href="/">
            <img src="./assets/logo.png" alt="Eunice Schwaab Logo"/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="navigation-bar text-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Books</Nav.Link>
            <Nav.Link href="/">Gallery</Nav.Link>
            <Nav.Link href="/">News</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;