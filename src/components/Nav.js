import logo from "../assents/logo.png";
import "./Nav.css";
import Container from "react-bootstrap/Container";
import Navb from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navb className="ms-auto">
            <Navb.Link>
              <Link to={"/"}>Home</Link>
            </Navb.Link>
            <Navb.Link>About</Navb.Link>
            <Navb.Link href="#link">Menu</Navb.Link>
            <Navb.Link href="#link">
              <Link to={"/booking"}>Reservation</Link>
            </Navb.Link>
            <Navb.Link href="#link">Order Online</Navb.Link>
            <Navb.Link href="#link">Login</Navb.Link>
          </Navb>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
