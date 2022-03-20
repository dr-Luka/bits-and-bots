import { Navbar, Container, Nav } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Navbar className="navigation" expand="lg">
        <Container>
          <Navbar.Brand href="/browse">Bits & Bots</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" to="/cart">
                <FaShoppingCart />
              </Link>
              <Link className="nav-link" to="/account">
                Logout
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
