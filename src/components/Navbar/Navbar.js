import { Link, useResolvedPath } from "react-router-dom";
import { Container, Nav, Navbar as ReactNavBar } from "react-bootstrap";

function Navbar() {
  const path = useResolvedPath();
  const active = path.pathname !== "/";
  return (
    <ReactNavBar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Link className={`nav-link` + (active ? " active" : "")} to="/">
            Home
          </Link>
        </Nav>
      </Container>
    </ReactNavBar>
  );
}

export default Navbar;
