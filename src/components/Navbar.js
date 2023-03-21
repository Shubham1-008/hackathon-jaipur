import React from "react";

import logo from "../assests/images/donate.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const Navbar = ({ color }) => {
  return (
    <div>
      <nav
        className="navbar bg-dark navbar-dark navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
        style={{ height: "4rem" }}
      >
        <div className="container-fluid ">
          <img style={{ width: "5rem", marginLeft: "4rem" }} src={logo} />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5 fw-bold mx-3"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <div
                  class="collapse navbar-collapse"
                  id="navbarNavDarkDropdown"
                >
                  <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                      <button
                        class="btn dropdown-toggle nav-link fs-5 fw-bold mx-2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Donate
                      </button>
                      <ul class="dropdown-menu dropdown-menu-dark mx-2 my-1">
                        <li>
                          <Link class="dropdown-item" to="/donateorgan">
                            Donate Organ
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="/donateblood">
                            Donate Blood
                          </Link>
                        </li>

                        <li>
                          <Link class="dropdown-item" to="/donatefood">
                            Donate Food
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="/donateclothes">
                            Donate Cloth
                          </Link>
                        </li>
                        <li>
                          <Link class="dropdown-item" to="/donatemoney">
                            Donate Money
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link fs-5 fw-bold mx-2"
                  to="/homeless"
                  role="button"
                  // data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Homelessness
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 fw-bold mx-2" to="/hunger">
                  Hunger
                </Link>
              </li>
              <li className="nav-item">
                <div
                  class="collapse navbar-collapse"
                  id="navbarNavDarkDropdown"
                >
                  <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                      <button
                        class="btn dropdown-toggle nav-link fs-5 fw-bold mx-2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Healthcare
                      </button>
                      <ul class="dropdown-menu dropdown-menu-dark mx-2 my-1">
                        <li>
                          <Link class="dropdown-item" to="/healthcare">
                            Free Medical checkup
                          </Link>
                        </li>

                        <li>
                          <Link class="dropdown-item" to="/medicine">
                            Generic Medicine supply
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link fs-5 fw-bold mx-2"
                  to="/job"
                  role="button"
                  // data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Job Assistance
                </Link>
              </li>
              <li className="nav-item">
                <div
                  class="collapse navbar-collapse"
                  id="navbarNavDarkDropdown"
                >
                  <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                      <button
                        class="btn dropdown-toggle nav-link fs-5 fw-bold mx-2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        More
                      </button>
                      <ul class="dropdown-menu dropdown-menu-dark mx-2 my-1">
                        <li>
                          <Link class="dropdown-item" to="/about">
                            About Us
                          </Link>
                        </li>

                        <li>
                          <Link class="dropdown-item" to="/about">
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
