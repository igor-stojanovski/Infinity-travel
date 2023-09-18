import styled from "@emotion/styled";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";

const NavbarComponent: React.FC = () => {
  return (
    <NavbarStyle expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/images/logo.jpg"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <div className="wrapper-btns">
          <Button className="search-btn rounded-5 border-0 d-lg-none">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Button>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0"
          />
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Дома</Nav.Link>
            <NavDropdown title="Дестинации" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Грција">Грција</NavDropdown.Item>
              <NavDropdown.Item href="/Турција">Турција</NavDropdown.Item>
              <NavDropdown.Item href="/Албанија">Албанија</NavDropdown.Item>
              <NavDropdown.Item href="/Хрватска">Хрватска</NavDropdown.Item>
              <NavDropdown.Item href="/Црна-гора">Црна Гора</NavDropdown.Item>
              <NavDropdown.Item href="/Италија">Италија</NavDropdown.Item>
              <NavDropdown.Item href="/Шпанија">Шпанија</NavDropdown.Item>
              <NavDropdown.Item href="/egzoticniDestinacii">
                Егзотични патувања
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/grupni-patuvanja">Групни патувања</Nav.Link>
            <Nav.Link href="/avionski-karti">Авио Карти</Nav.Link>
            <Nav.Link href="/istrazi-ja-makedonija">
              Истражи ја Македонија
            </Nav.Link>
            <Nav.Link href="/za-nas">За нас</Nav.Link>
            <Nav.Link>02/3100-360</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavbarStyle>
  );
};

export default NavbarComponent;

const NavbarStyle = styled(Navbar)`
  --bs-navbar-color: rgba(var(--bs-emphasis-color-rgb)), 1;
  --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 176, 183, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");

  & .search-btn {
    background-color: var(--tertiary-color);
  }

  & #basic-navbar-nav a:hover {
    color: var(--tertiary-color);
  }
`;
