import React, { useContext } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import logo from "../../logo.png";
import "./header.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
const Header = () => {
  const { userPass } = useContext(UserContext);
  const [user, setUser] = userPass;
  const formatButton = () => {
    if (user.islogin) {
      return (
        <Link to="/profile">
          <Button className="register-btn">{user.fullname}</Button>
        </Link>
      );
    } else {
      return (
        <Link to="/login">
          <Button className="register-btn">Login</Button>
        </Link>
      );
    }
  };
  return (
    <header>
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="Site Img" className="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FontAwesomeIcon icon={faThLarge} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Donation</Nav.Link>
              <Nav.Link href="#event">Events</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              {formatButton()}
              <Link to="/admin">
                <Button className="admin-btn">Admin</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
