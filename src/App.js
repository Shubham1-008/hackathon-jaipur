import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Blooddonation from "./components/Blooddonation";
import Charity from "./components/Charity";
import Clothes from "./components/Clothes";
import Donatefood from "./components/Donatefood";
import HealthCare from "./components/HealthCare";

import Homeless from "./components/Homeless";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Hunger from "./components/Hunger";
import Jobassistance from "./components/Jobassistance";
import Medicine from "./components/Medicine";
import Organ from "./components/Organ";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage} />

        <Route path="/donateblood" Component={Blooddonation} />
        <Route path="/donatemoney" Component={Charity} />
        <Route path="/donateclothes" Component={Clothes} />
        <Route path="/donateorgan" Component={Organ} />
        <Route path="/hunger" Component={Hunger} />
        <Route path="/homeless" Component={Homeless} />
        <Route path="healthcare/" Component={HealthCare} />
        <Route path="/medicine" Component={Medicine} />
        <Route path="/job" Component={Jobassistance} />
        <Route path="/donatefood" Component={Donatefood} />

        <Route path="/about" Component={About} />
        <Route path="/medicine" Component={Medicine} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
