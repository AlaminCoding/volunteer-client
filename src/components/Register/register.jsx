import React, { useContext, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../logo.png";
import "./register.css";

const Register = () => {
  const { userPass } = useContext(UserContext);
  const [user, setUser] = userPass;
  const { service } = useParams();
  const history = useHistory();
  const nameRef = useRef();
  const emailRef = useRef();
  const dateRef = useRef();
  const desRef = useRef();
  const serviceRef = useRef();
  const addUserService = (e) => {
    const name = nameRef.current.defaultValue;
    const email = emailRef.current.defaultValue;
    const date = dateRef.current.value;
    const description = desRef.current.value;
    const service = serviceRef.current.defaultValue;
    fetch(`https://stormy-shelf-86390.herokuapp.com/image/${service}`)
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data.image;
        const userServiceData = {
          name,
          email,
          date,
          description,
          service,
          imageUrl,
        };
        fetch("https://stormy-shelf-86390.herokuapp.com/addUserService", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userServiceData),
        });
      });
    history.push("/");
    e.preventDefault();
  };
  //input values
  return (
    <React.Fragment>
      <Container>
        <div className="site-image">
          <Link to="/">
            <img src={logo} alt="Site Img" />
          </Link>
        </div>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="register-form">
              <h2>Register as a volunteer</h2>
              <form onSubmit={addUserService}>
                <input
                  ref={nameRef}
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Full Name"
                  defaultValue={user.fullname}
                />
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Username or Email"
                  defaultValue={user.email}
                />
                <input
                  ref={dateRef}
                  type="date"
                  name="date"
                  id="date"
                  placeholder="Date"
                />
                <input
                  ref={desRef}
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                />
                <input
                  ref={serviceRef}
                  type="text"
                  name="service"
                  id="service"
                  defaultValue={service}
                />
                <input className="reg-btn" value="Registration" type="submit" />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Register;
