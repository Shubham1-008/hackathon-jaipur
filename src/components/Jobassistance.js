import React, { useState } from "react";
import "./JobAssistance.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Navbar from "./Navbar";
import job from "../assests/images/job.jpeg";
import Footer from "./Footer";

const Jobassistance = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputValues, setInputValues] = useState({
    qualifications: "",
    studentName: "",
    studentGender: "",
    studentAge: "",
    studentQualification: "",

    adultName: "",
    adultGender: "",
    adultAge: "",
    adultQualification: "",
    adultIncomeTax: "",

    remark: "",
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
        <img src={job} alt="Snow" style={{ width: "100%" }} />
        <div
          style={{
            position: " absolute",
            // top: "65%",
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
          <h3 className="text-color-orange-dark fw-bold">Job Assistance</h3>
        </div>
        <div className="jumbotron  main-div">
          <form onSubmit={(e) => submitValues(e)}>
            <div className="form p-2 p-md-5 ">
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>
                    {" "}
                    From which of the Qualification you are eligible for the Job
                  </label>
                </div>

                <div className="col-md-4">
                  <select
                    className="form-select input"
                    name="qualifications"
                    placeholder=" qualifications"
                    aria-label="Default select example"
                    onChange={(event) => onChangeValues(event)}
                    value={inputValues.qualifications}
                    required
                  >
                    <option selected> Select the option</option>
                    <option value={"Student"}>Student</option>
                    <option value={"Adult"}>Adult</option>
                  </select>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label> Student Name</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    value={inputValues.studentName}
                    className="form-control input"
                    name="studentName"
                    onChange={(event) => onChangeValues(event)}
                    required
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label> Student Gender</label>
                </div>

                <div className="col-md-4">
                  <select
                    className="form-select input"
                    name="studentGender"
                    placeholder=" studentGender"
                    aria-label="Default select example"
                    onChange={(event) => onChangeValues(event)}
                    value={inputValues.studentGender}
                    required
                  >
                    <option selected> Select the option</option>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                  </select>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label> Student Age</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    value={inputValues.studentAge}
                    className="form-control input"
                    name="studentAge"
                    onChange={(event) => onChangeValues(event)}
                    required
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label> Student Qualification</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    value={inputValues.studentQualification}
                    className="form-control input"
                    name="studentQualification"
                    onChange={(event) => onChangeValues(event)}
                    required
                  />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label> Adult Name</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    value={inputValues.adultName}
                    className="form-control input"
                    name="adultName"
                    onChange={(event) => onChangeValues(event)}
                    required
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label> Adult Age</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    value={inputValues.adultAge}
                    className="form-control input"
                    name="adultAge"
                    onChange={(event) => onChangeValues(event)}
                    required
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label> Adult Gender</label>
                </div>

                <div className="col-md-4">
                  <select
                    className="form-select input"
                    name="adultGender"
                    placeholder=" adultGender"
                    aria-label="Default select example"
                    onChange={(event) => onChangeValues(event)}
                    value={inputValues.adultGender}
                    required
                  >
                    <option selected> Select the option</option>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                  </select>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label> Adult qualifications</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    value={inputValues.adultQualification}
                    className="form-control input"
                    name="adultQualification"
                    onChange={(event) => onChangeValues(event)}
                    required
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label> Adult Income Tax Certificate</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="file"
                    value={inputValues.adultIncomeTax}
                    className="form-control input"
                    name="adultIncomeTax"
                    onChange={(event) => onChangeValues(event)}
                    required
                  />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Remarks</label>
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
                              You have succesfully registered for the Job
                              Assistance.Soon our volunteer will connect to you
                              and will tell you the further procedding for the
                              interview.
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
                  <label htmlFor>
                    From which of the Qualification you are eligible for the Job
                    :
                  </label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.qualifications}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Student Name:</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.studentName}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Student Gender:</label>
                </div>
                <div className="col-md-4">
                  <p>+91 {inputValues.studentGender}</p>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Student Age:</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.studentAge}/-</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Student Qualification</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.studentQualification}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Adult Name</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.adultName}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Adult Age</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.adultAge}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Adult Gender</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.adultGender}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Adult qualifications</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.adultQualification}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Adult Income Tax Certificate</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.adultIncomeTax}</p>
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

export default Jobassistance;
