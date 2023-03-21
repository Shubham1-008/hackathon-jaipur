import React, { useState } from "react";
import "./Hunger.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import hunger from "../assests/images/hunger.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Hunger = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    adharNumber: "",
    helpNeedy: "",
    singleOrFamily: "",
    singleName: "",
    singleAge: "",
    singleGender: "",
    numberOfChildrenInFamily: "",
    numberOfAdultInFamily: "",
    addressFamily: "",
    meals: "",
  });

  const onChangeValues = (event) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
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
        <img src={hunger} alt="Snow" style={{ width: "100%" }} />
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
      <div>
        <p className="text-center fs-3 text-danger-emphasis">
          Come forward and help us to minimize the hunger among needy people
        </p>
        <p className="text-center fs-4 text-danger">Fill the below form</p>
      </div>
      <div className="container-sm mt-5 mb-5">
        <div className="row mb-3">
          <h3 className="text-color-orange-dark fw-bold">
            Donation For hunger
          </h3>
        </div>
        <div className="jumbotron  main-div">
          <form onSubmit={(e) => submitValues(e)}>
            <div className="form p-2 p-md-5 ">
              <div className="row mb-4">
                <p>Share your personal details</p>
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
                  <label>Adhar Card Number</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    required
                    className="form-control input"
                    name="donationAmount"
                    value={inputValues.adharNumber}
                    onChange={(event) => onChangeValues(event)}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>
                    {" "}
                    Do you Know needy people below poverty line who are
                    suffering from Starvation
                  </label>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select input"
                    name="helpNeedy"
                    placeholder=" helpNeedy"
                    aria-label="Default select example"
                    onChange={(event) => onChangeValues(event)}
                    value={inputValues.helpNeedy}
                    required
                  >
                    <option selected> Select</option>
                    <option value={"yes"}>Yes</option>
                    <option value={"no"}>No</option>
                  </select>
                </div>
              </div>
              <div className="row mb-4">
                <p>
                  Share the details below of person in need of food in Hunger
                </p>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Single or Family</label>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select input"
                    name="singleOrFamily"
                    placeholder=" singleOrFamily"
                    aria-label="Default select example"
                    onChange={(event) => onChangeValues(event)}
                    value={inputValues.singleOrFamily}
                    required
                  >
                    <option selected> Select</option>
                    <option value={"family"}>Family</option>
                    <option value={"single"}>Single</option>
                  </select>
                </div>
              </div>
              {inputValues.singleOrFamily === "single" ? (
                <>
                  {" "}
                  <div className="row mb-4">
                    <div className="col-md-3">
                      <label for="text"> Name of the Single person </label>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        id="text"
                        required
                        className="form-control input"
                        name="singleName"
                        value={inputValues.singleName}
                        onChange={(event) => onChangeValues(event)}
                      />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-3">
                      <label for="text"> Age of the Single person </label>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="number"
                        id="numberofsingle"
                        required
                        className="form-control input"
                        name="singleAge"
                        value={inputValues.singleAge}
                        onChange={(event) => onChangeValues(event)}
                      />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-3">
                      <label>Gender of the single person</label>
                    </div>
                    <div className="col-md-4">
                      <select
                        className="form-select input"
                        name="singleGender"
                        placeholder=" singleGender"
                        aria-label="Default select example"
                        onChange={(event) => onChangeValues(event)}
                        value={inputValues.singleGender}
                        required
                      >
                        <option selected> Gender</option>
                        <option value={"Male"}>Male</option>
                        <option value={"Female"}>Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-3">
                      <label for="text"> Address of the Person </label>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        id="numberOfChildrenInFamily"
                        required
                        className="form-control input"
                        name="addressFamily"
                        value={inputValues.addressFamily}
                        onChange={(event) => onChangeValues(event)}
                      />
                    </div>
                  </div>{" "}
                </>
              ) : (
                <>
                  <div className="row mb-4">
                    <div className="col-md-3">
                      <label for="text">
                        {" "}
                        Number of Children in the family{" "}
                      </label>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="number"
                        id="numberOfChildrenInFamily"
                        required
                        className="form-control input"
                        name="numberOfChildrenInFamily"
                        value={inputValues.numberOfChildrenInFamily}
                        onChange={(event) => onChangeValues(event)}
                      />
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-3">
                      <label for="text"> Number of Adults in the family </label>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="number"
                        id="numberOfAdultInFamily"
                        required
                        className="form-control input"
                        name="numberOfAdultInFamily"
                        value={inputValues.numberOfAdultInFamily}
                        onChange={(event) => onChangeValues(event)}
                      />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-3">
                      <label for="text"> Address of the family </label>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        id="numberOfChildrenInFamily"
                        required
                        className="form-control input"
                        name="addressFamily"
                        value={inputValues.addressFamily}
                        onChange={(event) => onChangeValues(event)}
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Meal needed in a day</label>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select input"
                    name="meals"
                    placeholder=" singleGender"
                    aria-label="Default select example"
                    onChange={(event) => onChangeValues(event)}
                    value={inputValues.meals}
                    required
                  >
                    <option selected> Meals</option>
                    <option value={"3"}>3 meal a day</option>
                    <option value={"2"}>2 meal a day</option>

                    <option value={"1"}>1 meal a day</option>
                  </select>
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
                              You report have been succesfully registered .Soon
                              our volunteer will connect to you and will tell
                              you the further procedding.
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
                  <label htmlFor>Adhar Card Number:</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.adharNumber}/-</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Single or Family</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.helpNeedy}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Name of the Single person</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.singleName}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Age of the Single person</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.singleAge}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Gender of the single person</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.singleGender}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Number of Children in the family</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.numberOfChildrenInFamily}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Number of Adults in the family</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.numberOfAdultInFamily}</p>
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

export default Hunger;
