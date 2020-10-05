import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./admin.css";
import { Link } from "react-router-dom";

const Admin = () => {
  const [alluser, setAllUser] = useState([]);

  const getAllUser = () => {
    fetch("https://stormy-shelf-86390.herokuapp.com/allUser")
      .then((response) => response.json())
      .then((data) => setAllUser(data));
  };

  const deleteService = (id) => {
    fetch(`https://stormy-shelf-86390.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    });
    getAllUser();
  };

  getAllUser();

  return (
    <section className="admin-section">
      <Row>
        <Col md={2}>
          <section className="side-bar">
            <Link to="/">
              <img src={logo} alt="Site Img" className="admin-img" />
            </Link>
            <p>
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              Volunteer register list
            </p>
            <small>
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Add Event
            </small>
          </section>
        </Col>
        <Col md={10}>
          <section className="volunteer-section">
            <h2>Volunteer Register List</h2>
            <div className="volunteer-list">
              <div className="table-section">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email ID</th>
                      <th>Registration Date</th>
                      <th>Volunteer Service</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {alluser.map((data) => {
                      return (
                        <tr key={data._id}>
                          <td>{data.name}</td>
                          <td>{data.email}</td>
                          <td>{data.date}</td>
                          <td>{data.service}</td>
                          <td>
                            <button onClick={() => deleteService(data._id)}>
                              <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </section>
  );
};

export default Admin;
