import { clear } from "@testing-library/user-event/dist/clear";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function NavBar() {
  const [cart, setCart] = useContext(CartContext);

  const history = useHistory();
  function logout() {
    setCart([]);
    localStorage.clear();
    history.push("/landing");
  }

  return (
    <>
      <Navbar className="navigation" expand="lg">
        <Container>
          <Navbar.Brand href="/browse">Bits & Bots</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" to="/cart">
                My Cart
                <FaShoppingCart />
              </Link>
              <button
                className="nav-link logout-button"
                onClick={() => logout()}
              >
                Logout
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
