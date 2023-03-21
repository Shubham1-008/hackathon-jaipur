import React from "react";

import f1 from "../assests/images/f1.jpg";
import f3 from "../assests/images/f3.jpg";

import homeless from "../assests/images/homeless.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
const Carausel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div style={{ backgroundColor: "black", opacity: 1 }}>
            <img
              src={f1}
              style={{ opacity: 0.5 }}
              className="d-block w-100"
              alt="..."
            />
          </div>

          <div className="carousel-caption d-none d-md-block">
            <h3
              style={{ marginBottom: "8rem", textShadow: "2px 2px #FF0000" }}
              className="fw-bolder fs-1 text-light "
            >
              Extend your Hand for Charity
            </h3>
            <h3
              className="border border-light border-2 rounded"
              style={{
                //   backgroundColor: "black",
                //   opacity: 0.8,
                color: "white",
                textShadow: "3px 3px purple",
                padding: "2rem",
              }}
            >
              Charity brings to life again those who are spiritually dead. He
              who has never denied himself for the sake of giving, has but
              glanced at the joys of charity. He who has no charity deserves no
              mercy
            </h3>
          </div>
        </div>
        <div className="carousel-item">
          <div style={{ backgroundColor: "black", opacity: 1 }}>
            <img
              src={homeless}
              style={{ opacity: 0.5 }}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-caption d-none d-md-block">
            <h3
              style={{ marginBottom: "10rem", textShadow: "2px 2px #FF0000" }}
              className="fw-bolder fs-1 text-light "
            >
              Extend your Hand for Homeless
            </h3>
            <h3
              className=" border border-light border-2 rounded"
              style={{
                //   backgroundColor: "black",
                //   opacity: 0.8,
                color: "white",
                textShadow: "3px 3px purple",
                // textShadow: "3px 3px black",
                padding: "2rem",
              }}
            >
              It's the least we can do. Make the world a better place; let's
              build a home for the lonely days! Not every heroes wear a cape;
              some dress as a carpenter.
            </h3>
          </div>
        </div>
        <div className="carousel-item">
          <div style={{ backgroundColor: "black", opacity: 1 }}>
            <img
              src={f3}
              className="d-block w-100"
              style={{ opacity: 0.5 }}
              alt="..."
            />
          </div>
          <div className="carousel-caption d-none d-md-block">
            <h3
              style={{
                marginBottom: "10rem",
                textShadow: "2px 2px #FF0000",
              }}
              className="fw-bolder fs-1 text-light "
            >
              Extend your Hand for Homeless
            </h3>
            <h3
              className="border border-light border-2 rounded"
              style={{
                //   backgroundColor: "black",
                //   opacity: 0.8,
                // textShadow: "3px 3px black",
                color: "white",
                textShadow: "3px 3px purple",
                padding: "2rem",
              }}
            >
              If you can't feed a hundred people, then feed just one.
            </h3>
            <h2>Mother Teresa</h2>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carausel;
