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
    {/* Left side: invisible spacer to balance the right link */}
    <Nav className="flex-fill justify-content-start">
      <span className="d-none d-lg-block" style={{ width: '75px' }}></span>
    </Nav>

    {/* Center: brand */}
    <Navbar.Brand as={Link} to={poleniaToggle()} className="mx-auto">
      Polenia
    </Navbar.Brand>

    {/* Right side: language link */}
    <Nav className="flex-fill justify-content-end lang-btn">
      <Nav.Link as={Link} to={toggleLangPath()}>
        {isSpanish ? "EN" : "ES"}
      </Nav.Link>
    </Nav>
  </Container>
</Navbar>


    </header>
  );
};

export default NavBar;
