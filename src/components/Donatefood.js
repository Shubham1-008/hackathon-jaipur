import React, { useState } from "react";
import "./Donate.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Navbar from "./Navbar";
import Footer from "./Footer";
import food from "../assests/images/food.jpeg";

const Donatefood = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [render, setRender] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    organisations: "",
    homeName: "",
    homeAdress: "",
    homeContact: "",
    restrauntName: "",
    restrauntAdress: "",
    restrauntContact: "",
    dhabaName: "",
    dhabaAdress: "",
    dhabaContact: "",

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
  const conditionalRendering = () => {
    if (inputValues.organisations == "Restraunt") {
      <>
        <div className="row mb-4">
          <div className="col-md-3">
            <label>Restraunt Name</label>
          </div>
          <div className="col-md-4">
            <input
              type="text"
              required
              className="form-control input"
              name="restrauntName"
              value={inputValues.restrauntName}
              onChange={(event) => onChangeValues(event)}
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-3">
            <label>Restraunt Adress</label>
          </div>
          <div className="col-md-4">
            <input
              type="text"
              required
              className="form-control input"
              name="restrauntAdress"
              value={inputValues.restrauntAdress}
              onChange={(event) => onChangeValues(event)}
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-3">
            <label>Restraunt Contact</label>
          </div>
          <div className="col-md-4">
            <input
              type="text"
              required
              className="form-control input"
              name="restrauntContact"
              value={inputValues.restrauntContact}
              onChange={(event) => onChangeValues(event)}
            />
          </div>
        </div>
      </>;
    } else if (inputValues.organisations === "Home") {
      return (
        <>
          <div className="row mb-4">
            <div className="col-md-3">
              <label>Home Name</label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                required
                className="form-control input"
                name="homeName"
                value={inputValues.homeName}
                onChange={(event) => onChangeValues(event)}
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-3">
              <label>Home Adress</label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                required
                className="form-control input"
                name="homeAdress"
                value={inputValues.homeAdress}
                onChange={(event) => onChangeValues(event)}
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-3">
              <label>Home Contact</label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                required
                className="form-control input"
                name="homeContact"
                value={inputValues.homeContact}
                onChange={(event) => onChangeValues(event)}
              />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="row mb-4">
            <div className="col-md-3">
              <label>Dhaba Name</label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                required
                className="form-control input"
                name="dhabaName"
                value={inputValues.dhabaName}
                onChange={(event) => onChangeValues(event)}
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-3">
              <label>Dhabha Adress</label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                required
                className="form-control input"
                name="dhabaAdress"
                value={inputValues.dhabaAdress}
                onChange={(event) => onChangeValues(event)}
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-3">
              <label>Dhabha Contact</label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                required
                className="form-control input"
                name="dhabaContact"
                value={inputValues.dhabaContact}
                onChange={(event) => onChangeValues(event)}
              />
            </div>
          </div>
        </>
      );
    }
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
        <img src={food} alt="Snow" style={{ width: "100%" }} />
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
          <h3 className="text-color-orange-dark fw-bold">Donation For Food</h3>
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
                  <label>
                    As A food donator from which of the following organisation
                    you are belong to?
                  </label>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select input"
                    name="organisations"
                    placeholder=" organisations"
                    aria-label="Default select example"
                    onChange={(event) => {
                      return onChangeValues(event), setRender(true);
                    }}
                    value={inputValues.organisations}
                    required
                  >
                    <option selected> Select</option>
                    <option value={"Home"}>Home</option>
                    <option value={"Restraunt"}>Restraunt</option>
                    <option value={"Dhaba"}>Dhabha</option>
                  </select>
                </div>
              </div>
              {render && conditionalRendering()}

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
                              You have succesfully registered for the food
                              donation.Soon our volunteer will connect .
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
                  <label htmlFor>
                    {" "}
                    As A food donator from which of the following organisation
                    you are belong to?:
                  </label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.organisations}/-</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Home Name </label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.homeName}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Home Address </label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.homeAdress}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Home Contact </label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.homeContact}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Dhabha Name </label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.dhabaName}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Dhabha Address</label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.dhabaAdress}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Dhabha Contact </label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.dhabaContact}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Restraunt Name </label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.restrauntName}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Restraunt Address </label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.restrauntAdress}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <label htmlFor>Restraunt Contact </label>
                </div>
                <div className="col-md-4">
                  <p>{inputValues.restrauntContact}</p>
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

export default Donatefood;
