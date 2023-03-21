import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Donate.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import qr from "../assests/images/qr.jpeg";
import charity from "../assests/images/charity.png";
const Charity = () => {
  const [show, setShow] = useState(false);

  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);

  const handleShow2 = () => setShow2(true);
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    donationAmount: "",
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
  };
  return (
    <>
      <Navbar />
      <div
        style={{
          position: "relative",
          textAlign: "center",
          color: "white",
        }}
      >
        <img src={charity} alt="Snow" style={{ width: "100%", opacity: 0.5 }} />
        <div
          style={{
            position: " absolute",
            top: "85%",
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
          <div>
            Below is a Form which you need to fill as a donater and then our
            volunteer team will connect to you for the next step
          </div>
        </div>
      </div>
      <div className="container-sm mt-5 mb-5">
        <div className="row mb-3">
          <h3 className="text-color-orange-dark fw-bold">Donation For Money</h3>
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
                  <label>Donation Amount</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    required
                    className="form-control input"
                    name="donationAmount"
                    value={inputValues.donationAmount}
                    onChange={(event) => onChangeValues(event)}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label>PAN Card Number</label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    required
                    className="form-control input"
                    name="panNumber"
                    value={inputValues.panNumber}
                    onChange={(event) => onChangeValues(event)}
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
                        type="submit"
                        onClick={handleShow2}
                        className="btn btn-light btn1"
                      >
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Modal show={show} onHide={handleClose2} size="lg">
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
                  <label htmlFor>Donation Amount:</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.donationAmount}/-</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>PAN Card Number</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.panNumber}</p>
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
      <Modal show={show2} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Donate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={qr} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Charity;
