import React from "react";
import Navbar from "./Navbar";

import about from "../assests/images/about.jpeg";
import contact from "../assests/images/contact.jpeg";
import Footer from "./Footer";
const About = () => {
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
        <img src={about} alt="Snow" style={{ width: "100%", height: "50%" }} />
        <div
          style={{
            position: " absolute",
            top: "12%",
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
            We are the team of Three.Our goal is to provide a platform to each
            nd every citizen to help the needy in their locality
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
