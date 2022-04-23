import React from 'react';
import './App.css';
import Header from "./component/Header";
import LoginForm from "./component/LoginForm";
import RegisterPatient from "./component/RegisterPatient";
import DoctorDashboard from "./component/DoctorDashboard";
import PatientDashboard from "./component/PatientDashboard";
import HospitalDashboard from "./component/HospitalDashboard";
import GeneratePDF from "./component/Report";


function App() {
    return (
        <div className="App">
            <Header/>
            {/*<LoginForm/>*/}
            {/*   <RegisterPatient/>*/}
            {/*   <DoctorDashboard/>*/}
            {/*   <PatientDashboard/>*/}
            {/*   <HospitalDashboard/>*/}
               <GeneratePDF/>
        </div>
    );
}

export default App;
