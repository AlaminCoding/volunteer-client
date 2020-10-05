import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import Service from "../Service/service";
import "./home.css";
import Header from "../Header/header";
const Home = () => {
  const [allService, setAllService] = useState([]);

  useEffect(() => {
    fetch("https://stormy-shelf-86390.herokuapp.com/allServices")
      .then((response) => response.json())
      .then((data) => {
        setAllService(data);
      });
  }, []);
  return (
    <React.Fragment>
      <Header />
      <section className="banner"></section>
      <Container>
        <section className="search-form">
          <Row className="justify-content-center">
            <Col md={8}>
              <h2>I grow by helping people in need.</h2>
              <InputGroup className="mt-4 search-box">
                <FormControl
                  placeholder="Search...."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <Button className="px-4">Search</Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>
        </section>
        <section className="services">
          <Row>
            {allService.map((data) => (
              <Service data={data} key={data.key} />
            ))}
          </Row>
        </section>
      </Container>
    </React.Fragment>
  );
};

export default Home;
