import React, { useState } from "react";
import "./Homelessness.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import homeless2 from "../assests/images/homeless2.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Homeless = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    gender: "",
    mobile: "",
    pincode: "",
    address: "",
    adharcardNumber: "",
    additionalInfo: "",
    nameOfHomelessPerson: "",
    photoOfHomelessPerson: "",
    locationHomelessPerson: "",
    ageOfHomelessPerson: "",
    genderOfHomelessPerson: "",
  });

  const onChangeValues = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };

  const submitValues = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "relative",
          textAlign: "center",
          color: "white",
        }}
      >
        <img src={homeless2} alt="Snow" style={{ width: "100%" }} />
        <div
          style={{
            position: " absolute",
            top: "55%",
            // marginTop: "1rem",
            left: "50%",
            color: "red",
            boxShadow: "1px 2px 9px #F4AAB9",

            textShadow: "2px 2px rgba(0, 0, 0, 0.75)",
            fontSize: "2rem",
            fontFamily: "Sans-serif",
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      </div>
      <div className="container-sm mt-5 mb-5">
        <div className="row mb-3">
          <h3 className="text-color-orange-dark fw-bold">
            Extending a hand to the Homeless people
          </h3>
        </div>
        <div className="jumbotron  main-div">
          <form onSubmit={(e) => submitValues(e)}>
            <div className="form p-2 p-md-5 ">
              <div className="row mb-4">
                <div className="col ">
                  <p>Information of the person who found the homeless person</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Name</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    value={inputValues.name}
                    className="form-control input"
                    name="name"
                    onChange={(event) => onChangeValues(event)}
                    required
                  />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label> Gender </label>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select input"
                    name="gender"
                    placeholder=" gender"
                    aria-label="Default select example"
                    onChange={(event) => onChangeValues(event)}
                    value={inputValues.gender}
                    required
                  >
                    <option selected> Gender</option>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                    <option value={"Na"}>N/A</option>
                  </select>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label for="email">Email ID</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="email"
                    id="email"
                    required
                    className="form-control input"
                    name="email"
                    value={inputValues.email}
                    onChange={(event) => onChangeValues(event)}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Mobile No</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    required
                    className="form-control input"
                    name="mobile"
                    value={inputValues.mobile}
                    onChange={(event) => onChangeValues(event)}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Pin Code</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    required
                    className="form-control input"
                    name="pincode"
                    value={inputValues.pincode}
                    onChange={(event) => onChangeValues(event)}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Address</label>
                </div>
                <div className="col-md-4">
                  <textarea
                    name="address"
                    cols={15}
                    rows={4}
                    className="input form-control"
                    value={inputValues.address}
                    required
                    onChange={(event) => onChangeValues(event)}
                  />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label>AdharCard number</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    required
                    className="form-control input"
                    max="12"
                    name="adharcardNumber"
                    value={inputValues.adharcardNumber}
                    onChange={(event) => onChangeValues(event)}
                  />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Additional Information (if any)</label>
                </div>
                <div className="col-md-4">
                  <textarea
                    name="additionalInfo"
                    required
                    cols={15}
                    rows={4}
                    className="input form-control"
                    defaultValue=""
                    value={inputValues.additionalInfo}
                    onChange={(event) => onChangeValues(event)}
                  />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col ">
                  <p>Information of the homeless person</p>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Name of the homeless person (if you know)</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    value={inputValues.nameOfHomelessPerson}
                    className="form-control input"
                    name="nameOfHomelessPerson"
                    onChange={(event) => onChangeValues(event)}
                  />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Photo of the homeless person </label>
                </div>
                <div className="col-md-4">
                  <input
                    type="file"
                    value={inputValues.photoOfHomelessPerson}
                    className="form-control input"
                    name="photoOfHomelessPerson"
                    onChange={(event) => onChangeValues(event)}
                    required
                  />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Location of the Person where you found</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    value={inputValues.locationHomelessPerson}
                    className="form-control input"
                    name="locationHomelessPerson"
                    onChange={(event) => onChangeValues(event)}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label> Estimated Age of that Person </label>
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    value={inputValues.ageOfHomelessPerson}
                    className="form-control input"
                    name="ageOfHomelessPerson"
                    onChange={(event) => onChangeValues(event)}
                  />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label> Gender of that person</label>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select input"
                    name="genderOfHomelessPerson"
                    placeholder=" gender"
                    aria-label="Default select example"
                    onChange={(event) => onChangeValues(event)}
                    value={inputValues.genderOfHomelessPerson}
                    required
                  >
                    <option selected> Gender</option>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                    <option value={"Na"}>N/A</option>
                  </select>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-6"></div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3"></div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-6 col-sm-12 d-flex justify-content-center pt-3">
                      <Button
                        variant="success"
                        className="btn2"
                        onClick={handleShow}
                      >
                        Preview
                      </Button>
                    </div>
                    <div className="col-md-6 col-sm-12 text-end d-flex justify-content-center pt-3 ">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Submit
                      </button>

                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title text-success fs-5"
                                id="exampleModalLabel"
                              >
                                Registeration Done
                              </h1>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              You report has been succesfully submitted.Soon our
                              volunteer will try to provide shelter to the
                              needy.
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-primary">
                                ok
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Donation Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="jumbotron  main-div">
            <div className="form p-5">
              <div className="row mb-4">
                <div className="col ">
                  <p>Information of the person who found the homeless person</p>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Name:</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.name}</p>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Gender:</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.gender}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Email:</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.email}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Contact Number:</label>
                </div>
                <div className="col-md-4">
                  <p>+91 {inputValues.mobile}</p>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Pin Code:</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.pincode}/-</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Address</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.address}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Adhar Card Number:</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.adharcardNumber}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Additional Information:</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.additionalInfo}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col ">
                  <p>Information of the person who found the homeless person</p>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>
                    Name of the homeless person (if you know):
                  </label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.nameOfHomelessPerson}</p>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Location of the homeless person :</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.locationHomelessPerson}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor> Expected Age of the homeless person :</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.ageOfHomelessPerson}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Gender of the homeless person :</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.genderOfHomelessPerson}</p>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor />
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-6 col-sm-12 d-flex justify-content-center pt-3">
                      <button
                        type="button"
                        className="btn btn-success btn2"
                        onClick={handleClose}
                      >
                        Edit
                      </button>
                    </div>
                    <div className="col-md-6 col-sm-12 text-end d-flex justify-content-center pt-3 ">
                      <button
                        type="button"
                        className="btn btn-light btn1"
                        onClick={() => window.print()}
                      >
                        Print
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </div>
  );
};

export default Homeless;
