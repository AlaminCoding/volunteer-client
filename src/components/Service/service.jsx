import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./service.css";
const Service = (props) => {
  const { key, title, image } = props.data;
  return (
    <Col md={3} xs={6} key={key} className="test">
      <Link to={"/register/" + title}>
        <div className="service-box">
          <img src={image} alt="service img" />
          <h2>{title}</h2>
        </div>
      </Link>
    </Col>
  );
};

export default Service;
