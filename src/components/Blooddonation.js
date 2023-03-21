import React, { useState } from "react";
import Navbar from "./Navbar";
import bd2 from "../assests/images/bd2.jpeg";
import "./Donate.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Blooddonation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [companyDetailSection, setCompanyDetailSectionVisible] =
    useState("none");

  const [showCerModel, setShowCerModel] = useState(false);

  const handleCloseCerModel = () => setShowCerModel(false);
  const handleShowCerModel = () => setShowCerModel(true);

  const [showCerViewModel, setShowCerViewModel] = useState(false);
  //   const [openSnackbar, setOpenSnackbar] = useState(false);
  //   const [message, setMessage] = useState("");
  //   const [severity, setSeverity] = useState("");
  const [certificateRecipientDetail, setCertificateRecipientDetail] = useState({
    recipient_name: "",
    member: "",
    pan: "",
    date: "",
    fiscalYear: "",
    member_name: "",
    profession: "",
    company: "",
    company_pan: "",
    form80GNumber: "",
    effect: "",
    company_address: "",
  });
  const certificateDetailsChanged = (event) => {
    setCertificateRecipientDetail({
      ...certificateRecipientDetail,
      [event.target.name]: event.target.value,
    });
  };
  const handleCloseCerViewModel = () => setShowCerViewModel(false);
  const handleShowCerViewModel = () => setShowCerViewModel(true);
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    bloodType: "",
    gender: "",
    occupation: "",
    weight: "",
    pulse: "",
    hb: "",
    temperature: "",
    sixMonthHistory: "",
    previousDonatedBlood: "",
    disease: "",
    medicineTaken: "",
    anySurgery: "",

    panNumber: "",
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
    console.log(inputValues.address, inputValues.disease);
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
        <img src={bd2} alt="Snow" style={{ width: "100%", opacity: 0.5 }} />
        <div
          style={{
            position: " absolute",
            top: "30%",
            left: "50%",
            color: "red",
            boxShadow: "1px 2px 9px #F4AAB9",

            textShadow: "2px 2px rgba(0, 0, 0, 0.75)",
            fontSize: "2rem",
            fontFamily: "Sans-serif",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div>
            Below is a Form which you need to fill as a donater and then our
            volunteer team will connect to you for the next step
          </div>
        </div>
      </div>
      <div className="container-sm mt-5 mb-5">
        {/* <img src={Logo1} alt="" style={{ width: "50 px", height: "50 px" }} /> */}
        <div className="row mb-3">
          <h3 className="text-color-orange-dark fw-bold">Donation For Blood</h3>
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
                  <label> Blood Type </label>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select input"
                    name="bloodType"
                    placeholder="--Select Donation Type--"
                    aria-label="Default select example"
                    onChange={(event) => onChangeValues(event)}
                    value={inputValues.bloodType}
                    required
                  >
                    <option selected>--Select Blood Type-- </option>
                    <option value={"Blood1"}>0 Rh+</option>
                    <option value={"Blood2"}>A Rh+</option>
                    <option value={"Blood3"}>B Rh+</option>
                    <option value={"Blood4"}>AB Rh+</option>
                    <option value={"Blood5"}>0 Rh-</option>
                    <option value={"Blood6"}>A Rh+</option>
                    <option value={"Blood7"}>B Rh+</option>
                    <option value={"Blood8"}>AB Rh+</option>
                  </select>
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
                    placeholder="--Select Gender--"
                    aria-label="Default select example"
                    onChange={(event) => onChangeValues(event)}
                    value={inputValues.gender}
                    required
                  >
                    <option selected>--Select Gender-- </option>
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                  </select>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Occupation</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    value={inputValues.occupation}
                    className="form-control input"
                    name="occupation"
                    onChange={(event) => onChangeValues(event)}
                    required
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
                    value={inputValues.weight}
                    className="form-control input"
                    name="weight"
                    onChange={(event) => onChangeValues(event)}
                    required
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Pulse</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    value={inputValues.pulse}
                    className="form-control input"
                    name="pulse"
                    onChange={(event) => onChangeValues(event)}
                    required
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Hb</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    value={inputValues.hb}
                    className="form-control input"
                    name="hb"
                    onChange={(event) => onChangeValues(event)}
                    required
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Temperature</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    value={inputValues.temperature}
                    className="form-control input"
                    name="temperature"
                    onChange={(event) => onChangeValues(event)}
                    required
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label> Six month Following </label>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select input"
                    name="sixMonthHistory"
                    placeholder="--Have you Donated Previously--"
                    aria-label="Default select example"
                    onChange={(event) => onChangeValues(event)}
                    value={inputValues.sixMonthHistory}
                    required
                  >
                    <option selected>
                      In Last six months you had any following
                    </option>
                    <option value={"yes"}>Tattoing</option>
                    <option value={"no"}>Ear Piering</option>
                    <option value={"no"}>Dental extraction</option>
                  </select>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label> Donated blood previous </label>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select input"
                    name="previousDonatedBlood"
                    placeholder="--Have you Donated Previously--"
                    aria-label="Default select example"
                    onChange={(event) => onChangeValues(event)}
                    value={inputValues.previousDonatedBlood}
                    required
                  >
                    <option selected>Have you Donated Previously </option>
                    <option value={"yes"}>Yes</option>
                    <option value={"no"}>No</option>
                  </select>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label> Suffered from disease </label>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select input"
                    name="disease"
                    placeholder="--Have you Suffered Previously--"
                    aria-label="Default select example"
                    onChange={(event) => onChangeValues(event)}
                    value={inputValues.disease}
                    required
                  >
                    <option selected>
                      Do you suffer from or have suffered from any of the
                      following diseases?{" "}
                    </option>
                    <option value={"D1"}>Heart Disease</option>
                    <option value={"D2"}>Cancer/Malignant </option>
                    <option value={"D3"}>Diabesties</option>
                    <option value={"D4"}>STD</option>
                    <option value={"D5"}>Lung Disease</option>
                    <option value={"D6"}>Allergic Disease</option>
                    <option value={"D7"}>Epilesy</option>
                    <option value={"D8"}>Jaundic</option>
                    <option value={"D9"}>Fainting Smell</option>
                    <option value={"D10"}>Hepatitis B/C</option>
                    <option value={"D11"}>Typhoid</option>
                    <option value={"D12"}>Kidney Disease</option>
                    <option value={"D13"}>Abnormal Bleeding tendency</option>
                    <option value={"D14"}>Malaria</option>
                  </select>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>Antibiotic Intake </label>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select input"
                    name="medicineTaken"
                    placeholder="--Have you Donated Previously--"
                    aria-label="Default select example"
                    onChange={(event) => onChangeValues(event)}
                    value={inputValues.medicineTaken}
                    required
                  >
                    <option selected>
                      Are you taking or have you taken any of these in the past
                      72 hours?
                    </option>
                    <option value={"H1"}>Antibiotics</option>
                    <option value={"H2"}>Steriods</option>
                    <option value={"H3"}>Aspirin</option>
                    <option value={"H4"}>Vaccinationhs</option>
                    <option value={"H5"}>Alcohol</option>
                    <option value={"H6"}>Rabies</option>
                  </select>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label> Previous surgery </label>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select input"
                    name="anySurgery"
                    placeholder="--Have you Done Any SurgeryPreviously--"
                    aria-label="Default select example"
                    onChange={(event) => onChangeValues(event)}
                    value={inputValues.anySurgery}
                    required
                  >
                    <option selected>
                      Is there any history of surgery or blood transfusion in
                      the past six months?{" "}
                    </option>
                    <option value={"major"}>Major</option>
                    <option value={"minor"}>Minor</option>
                    <option value={"BloodTransfusion"}>
                      Blood Transfusion
                    </option>
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
                              You have succesfully registered for the blood
                              donation.Soon our volunteer will connect to you
                              and will tell you the further procedding.
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-primary">
                                Ok
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
                  <label htmlFor>Blood Type:</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.bloodType}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Gender:</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.gender}/-</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Previous Surgery</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.anySurgery}</p>
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
    </div>
  );
};

export default Blooddonation;
