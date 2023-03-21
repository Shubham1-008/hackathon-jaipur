import React, { useState } from "react";
import "./Donate.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import organ from "../assests/images/organ.jpeg";
import o2 from "../assests/images/o2.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Organ = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    dateOfBirth: "",
    height: "",
    willingToHelpEmergency: "",
    weight: "",
    gender: "",
    deathPhysician: "",
    authoriseForOrgans: "",
    additionNote: "",
    donorSignature: "",
    remark: "",
    signature: "",
    nameOfThePerson: "",
    addressOfThatPerson: "",
    phoneOf: "",
    adharCardPhoto: "",
    relationWithTheDonor: "",
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
        <img src={organ} alt="Snow" style={{ width: "100%", opacity: 0.5 }} />
        <div
          style={{
            position: " absolute",
            top: "50%",
            // marginTop: "1rem",
            left: "50%",
            color: "red",
            boxShadow: "1px 2px 9px #F4AAB9",

            textShadow: "2px 2px rgba(0, 0, 0, 0.75)",
            fontSize: "2rem",
            fontFamily: "Sans-serif",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img src={o2} style={{ width: "24rem" }} />
          <div>
            Below is a Form which you need to fill as a donater and then our
            volunteer team will connect to you for the next step
          </div>
        </div>
      </div>
      <div className="container-sm mt-5 mb-5">
        <div className="row mb-3">
          <h3 className="text-color-orange-dark fw-bold">Donation For Organ</h3>
        </div>
        <div className="jumbotron  main-div">
          <form onSubmit={(e) => submitValues(e)}>
            <div className="form p-2 p-md-5 ">
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
                  <label>Date of Birth</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="date"
                    required
                    className="form-control input"
                    name="date"
                    value={inputValues.dateOfBirth}
                    onChange={(event) => onChangeValues(event)}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Height</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    required
                    className="form-control input"
                    name="height"
                    value={inputValues.height}
                    onChange={(event) => onChangeValues(event)}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Weight</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    required
                    className="form-control input"
                    name="weight"
                    value={inputValues.weight}
                    onChange={(event) => onChangeValues(event)}
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
                  <label>
                    Once my death has been confirmed and the death certification
                    has been released by a physician, I hereby give permission
                    to donate:
                  </label>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select input"
                    name="deathPhysician"
                    placeholder=" authorgans"
                    aria-label="Default select example"
                    onChange={(event) => onChangeValues(event)}
                    value={inputValues.deathPhysician}
                    required
                  >
                    <option selected> Select</option>
                    <option value={"All my Organs"}>All my Organs</option>
                    <option value={"Specific Organ and / or tissues"}>
                      Specific Organ and / or tissues
                    </option>
                  </select>
                </div>
              </div>
              {inputValues.deathPhysician ===
              "Specific Organ and / or tissues" ? (
                <div className="row mb-4">
                  <div className="col-md-3">
                    <label>Which organ you want to donate</label>
                  </div>
                  <div className="col-md-4">
                    <input />
                  </div>
                </div>
              ) : null}
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>I authorize you to use my organs/tissues for:</label>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select input"
                    name="authoriseForOrgans"
                    placeholder=" authorgansfor"
                    aria-label="Default select example"
                    onChange={(event) => onChangeValues(event)}
                    value={inputValues.authoriseForOrgans}
                    required
                  >
                    <option selected> Select the option</option>
                    <option value={"Research"}>Research</option>
                    <option value={"Transplant"}>Transplant</option>
                    <option value={"Both"}>Both</option>
                  </select>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Signature of the donor</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="file"
                    name="signature"
                    required
                    cols={15}
                    rows={4}
                    className="input form-control"
                    defaultValue=""
                    value={inputValues.signature}
                    onChange={(event) => onChangeValues(event)}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Any Additional Info</label>
                </div>
                <div className="col-md-4">
                  <textarea
                    name="remark"
                    required
                    cols={15}
                    rows={4}
                    className="input form-control"
                    defaultValue=""
                    value={inputValues.remark}
                    onChange={(event) => onChangeValues(event)}
                  />
                </div>
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
                              You have succesfully registered for the organ
                              donation.Soon our volunteer will connect to you
                              and will tell you the further procedding.
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
                <div className="col-md-3">
                  <label htmlFor>Name:</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.name}</p>
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
                  <label htmlFor>Address:</label>
                </div>
                <div className="col-md-4">
                  <p> {inputValues.address}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Date of Birth:</label>
                </div>
                <div className="col-md-4">
                  <p> {inputValues.dateOfBirth}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Height:</label>
                </div>
                <div className="col-md-4">
                  <p> {inputValues.height}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Weight:</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.weight}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Gender:</label>
                </div>
                <div className="col-md-4">
                  <p> {inputValues.gender}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>
                    Once my death has been confirmed and the death certification
                    has been released by a physician, I hereby give permission
                    to donate:
                  </label>
                </div>
                <div className="col-md-4">
                  <p>+91 {inputValues.deathPhysician}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>
                    I authorize you to use my organs/tissues for:
                  </label>
                </div>
                <div className="col-md-4">
                  <p> {inputValues.authoriseForOrgans}</p>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Signature:</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.signature}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Remarks:</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.remark}</p>
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

export default Organ;
