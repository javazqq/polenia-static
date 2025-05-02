import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <Navbar expand="lg" sticky="top" collapseOnSelect>
        <Container className="d-flex justify-content-between align-items-center">
          {/* Left side: empty nav (or put links later) */}
          <Nav className="flex-fill justify-content-start">
            {/* Optional: <Nav.Link as={Link} to="/home">Home</Nav.Link> */}
          </Nav>

          {/* Center: brand */}
          <Navbar.Brand
            as={Link}
            to="/"
            className="mx-auto position-absolute start-50 translate-middle-x"
          >
            Polenia
          </Navbar.Brand>

          {/* Right side: nav links */}
          <Nav className="flex-fill justify-content-end">
          <Nav.Link as={Link} to="/es">
              Español
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
