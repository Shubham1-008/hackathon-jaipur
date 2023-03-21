import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Carausel from "./Carausel";
import Reason from "./Reason";
import Centerstrip from "./Centerstrip";
import Volunteer from "./Volunteer";
import logo from "../assests/images/donate.png";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Carausel />
      <Reason />
      <Centerstrip />
      <Volunteer />
      <Footer />
    </div>
  );
};

export default Homepage;
