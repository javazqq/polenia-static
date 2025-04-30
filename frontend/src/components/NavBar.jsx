import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";


const NavBar = () => {
  return (
    <header>
      <Navbar expand="lg" sticky="top" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/">
            Polenia
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/about">
              About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
              Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;