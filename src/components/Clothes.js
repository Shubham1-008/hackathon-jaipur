import React, { useState } from "react";
import "./Donate.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Navbar from "./Navbar";

import clothes from "../assests/images/clothes.jpeg";
const Clothes = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    fabricType: "",
    fabricTypeE: "",
    dressType: "",
    size: "",
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
        <img src={clothes} alt="Snow" style={{ width: "100%", opacity: 0.5 }} />
        <div
          style={{
            position: " absolute",
            top: "75%",
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
          <h3 className="text-color-orange-dark fw-bold">Donation For Cloth</h3>
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
                  <label> fabric of the dress </label>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select input"
                    name="fabricType"
                    placeholder=" Fabric Type"
                    aria-label="Default select example"
                    onChange={(event) => onChangeValues(event)}
                    value={inputValues.fabricType}
                    required
                  >
                    <option selected> Fabric of the dress</option>
                    <option value={"Cotton"}>Cotton</option>
                    <option value={"Wool"}>Wool</option>
                    <option value={"Chiffon"}>Chiffon</option>
                    <option value={"Velvet"}>Velvet</option>
                    <option value={"Viscose"}>Viscose</option>
                    <option value={"Lycra"}>Lycra</option>
                    <option value={"Silk"}>Silk</option>
                    <option value={"Leather"}>Leather</option>
                    <option value={"Nylon"}>Nylon</option>
                    <option value={"Denim"}>Denim</option>
                    <option value={"Satin"}>Satin</option>
                    <option value={"Net"}>Lace or Net</option>
                    <option value={"Linen"}>Linen</option>
                    <option value={"Georgette"}>Georgette</option>
                    <option value={"Polyester"}>Polyester</option>
                    <option value={"minor"}>Rayon</option>
                    <option value={"major"}>Crepe</option>
                    <option value={"other"}>other</option>
                  </select>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label> Type of the dress </label>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select input"
                    name="dressType"
                    placeholder=" Dress Type"
                    aria-label="Default select example"
                    onChange={(event) => onChangeValues(event)}
                    value={inputValues.dressType}
                    required
                  >
                    <option selected> Type of the dress</option>
                    <option value={"Wedding"}>Wedding Dress</option>
                    <option value={"Renewal"}>Vow Renewal Outfit</option>
                    <option value={"Formal"}>Formal Dress</option>
                    <option value={"Bridesmaid"}>Bridesmaid Dress</option>
                    <option value={"Christensing"}>Christensing Dress</option>
                    <option value={"Prom"}>Prom Dress</option>
                    <option value={"Flower"}>Flower Girl</option>
                    <option value={"Communion"}>Holy Communion Dress</option>
                    <option value={"Evening"}>Evening Dress</option>
                    <option value={"Unknown"}>Unknown</option>
                    <option value={"Other"}>Other</option>
                  </select>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label> Size of the dress </label>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select input"
                    name="size"
                    placeholder=" Dress Size"
                    aria-label="Default select example"
                    onChange={(event) => onChangeValues(event)}
                    value={inputValues.size}
                    required
                  >
                    <option selected> Size of the dress</option>
                    <option value={"4"}>4</option>
                    <option value={"6"}>6</option>
                    <option value={"8"}>8</option>
                    <option value={"10"}>10</option>
                    <option value={"12"}>12</option>
                    <option value={"14"}>14</option>
                    <option value={"16"}>16</option>
                    <option value={"18"}>18</option>
                    <option value={"20"}>20</option>
                    <option value={"24"}>24</option>
                    <option value={"26"}>26</option>
                    <option value={"28"}>28</option>
                    <option value={"30"}>30</option>
                    <option value={"32"}>32</option>
                    <option value={"Child 0-5"}>Child 0-5</option>
                    <option value={"Child 5-16"}>Child 5-16</option>
                    <option value={"Small"}>Small</option>
                    <option value={"Large"}>Large</option>
                    <option value={"other"}>XL</option>
                    <option value={"XL"}>XXL</option>
                    <option value={"XXXl"}>XXXl</option>
                    <option value={"XXXXl"}>XXXXl</option>
                    <option value={"Unknown"}>Unknown</option>
                    <option value={"other"}>other</option>
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
                              You have succesfully registered for the Clothes
                              donation.Soon our volunteer will come to your
                              doorstep.Your this charity will make smiles on
                              someones's face.Thanks for sharing your Love !!
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
                  <label htmlFor>Fabric of the Dress</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.fabricType}</p>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Type of the Dress:</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.dressType}/-</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Size of the Dress:</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.size}/-</p>
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

export default Clothes;
