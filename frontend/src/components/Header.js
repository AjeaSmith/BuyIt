import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Buy It</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/cart">
                <i className="fas fa-shopping-cart" /> CART
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fas fa-user" /> SIGN IN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
