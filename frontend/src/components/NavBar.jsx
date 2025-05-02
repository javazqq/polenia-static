import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

  const location = useLocation();
  const isSpanish = location.pathname.startsWith("/es");

  const poleniaToggle = () => {
    let poleniaPath = location.pathname;
    if (isSpanish) {
      poleniaPath = "/es";
    } else {
      poleniaPath = "/";
    }
    return poleniaPath;

  }

  const toggleLangPath = () => {
    let newPath = location.pathname;
    if (isSpanish) {
      newPath = newPath.slice(3) || "/";
    } else {
      newPath = "/es";
    }

    return newPath;
  };

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
            to={poleniaToggle()}
            className="mx-auto position-absolute start-50 translate-middle-x"
          >
            Polenia
          </Navbar.Brand>

          {/* Right side: nav links */}
          <Nav className="flex-fill justify-content-end">
            <Nav.Link as={Link} to={toggleLangPath()}>
              {isSpanish ? "English" : "Español"}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
