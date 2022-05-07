import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import RegisterPatient from "./component/RegisterPatient";
import LoginForm from "./component/LoginForm";
import DoctorDashboard from "./component/DoctorDashboard";
import HospitalDashboard from "./component/HospitalDashboard";
import PatientDashboard from "./component/PatientDashboard";
import MainPage from "./component/MainPage";
import GenReport from "./component/GetReportCard"

const Routing = () => {
  return (
    <Router>
      <div>
        {/* <AuthContext.Provider value={{auth:value,setValue}} > */}
        <Routes>
          <Route path="/" element={<MainPage/>} exact />
          <Route path="/loginForm" element={<LoginForm/>} exact />
          <Route path="/registerPatient" element={<RegisterPatient/>} />
          <Route path="/doctorDashboard" element={<DoctorDashboard/>} />
          <Route path="/hospitalDashboard" element={<HospitalDashboard/>} />
          <Route path="/patientDashboard" element={<PatientDashboard/>} />
          <Route path="/patientReport" element={<GenReport/>} />

        </Routes>
      </div>
    </Router>
    //<LoginForm />
  );
};

ReactDOM.render(<Routing />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
