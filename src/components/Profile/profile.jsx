import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { UserContext } from "../../App";
import Header from "../Header/header";
import "./profile.css";

const Profile = (props) => {
  const { userPass } = useContext(UserContext);
  const { servicePass } = useContext(UserContext);
  const [user, setUser] = userPass;
  const [userService, setUserService] = servicePass;

  const getUserService = () => {
    fetch(`https://stormy-shelf-86390.herokuapp.com/singleUser/${user.email}`)
      .then((response) => response.json())
      .then((data) => setUserService(data));
  };

  const deleteService = (id) => {
    fetch(`https://stormy-shelf-86390.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    });
    getUserService();
  };
  getUserService();
  return (
    <React.Fragment>
      <Header />
      <section className="profile-section">
        <Container>
          <Row>
            {userService.map((data) => (
              <Col md={6} key={data._id}>
                <div className="user-service-box d-flex">
                  <img src={data.imageUrl} alt="Wild img" />
                  <div className="service-details">
                    <h3>{data.service}</h3>
                    <h2>{data.date}</h2>
                  </div>
                  <Button onClick={() => deleteService(data._id)}>
                    Cancel
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Profile;
