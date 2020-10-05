import React, { useContext, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import logo from "../../logo.png";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import * as firebase from "firebase/app";
import firebaseConfig from "./firebase.config";
import "firebase/auth";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
firebase.initializeApp(firebaseConfig);

const Login = () => {
  //State Call ans Pass
  const { userPass } = useContext(UserContext);
  const [user, setUser] = userPass;
  const [errorText, setErrorText] = useState("");
  //Page Redirecting
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  //Google Provider setup
  var googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleAuth = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        let fullName = result.user.displayName;
        let gmail = result.user.email;
        let newUser = {
          islogin: true,
          fullname: fullName,
          email: gmail,
          error: "",
        };
        setUser(newUser);
        history.replace(from);
      })
      .catch(function (error) {
        var errorMessage = error.message;
        setErrorText(errorMessage);
      });
  };
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
            <div className="login-form">
              <h2>Login With</h2>
              <Button className="google-btn" onClick={handleGoogleAuth}>
                <FontAwesomeIcon icon={faGoogle} className="google-icon" />
                Continue with Google
              </Button>
              <p>
                Don't have an account ? <a href="#create">Create an Account</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Login;
