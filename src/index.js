import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import RegisterPatient from "./component/RegisterPatient";
import LoginForm from "./component/LoginForm";
import DoctorDashboard from "./component/DoctorDashboard";
import HospitalDashboard from "./component/HospitalDashboard";
import PatientDashboard from "./component/PatientDashboard";
import MainPage from "./component/MainPage";

const Routing = () => {
  return (
    <Router>
      <div>
        {/* <AuthContext.Provider value={{auth:value,setValue}} > */}
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/loginForm" component={LoginForm} />
          <Route path="/registerPatient" component={RegisterPatient} />
          <Route path="/doctorDashboard" component={DoctorDashboard} />
          <Route path="/hospitalDashboard" component={HospitalDashboard} />
          <Route path="/patientDashboard" component={PatientDashboard} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<Routing />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
