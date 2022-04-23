import React, {useState} from "react";
import {onValue, ref} from "firebase/database";
import {database} from "../firebase";
import LoadingDelay from 'react-loading-delay';
let loading = true;
let loadingReport = true

function getPatientReport(){
    const patientID = document.getElementById("pID").value
    alert(patientID)
    let reportLink
    const starCountRef = ref(database, "patientReports/"+patientID );
    onValue(starCountRef, (snapshot) => {
        let arr = snapshot.val();
        reportLink = arr['link']
        loadingReport = false
        window.open(reportLink, '_blank');
    });
}

function PatientDashboard() {

    let password = "********"
    let patientId = "110100"
    let patient_name = useState("");
    let address = useState("");
    let age = useState("")
    let bloodgroup = useState("")
    let contact = useState("")
    let sex = useState("")
    let patientID = useState("")
    const email = "advaitthakur1209@gmail.com"
    const mail = email.split('@')

    let patientD = patientId+"_"+mail[0]
    const starCountRef = ref(database, "patientData/"+patientD );
    onValue(starCountRef, (snapshot) => {
        let field = snapshot.val();
        patient_name = field['name']
        address = field['address']
        age = field['age']
        bloodgroup = field['bloodgroup']
        contact = field['contact']
        patientID = field['patientid']
        sex = field['sex']
        loading = false
    });



    return(
        <div className="container">
            <div className="main-body">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin"
                                         className="rounded-circle p-1 bg-primary" width="110"/>
                                    <div className="mt-3">
                                        <h4>John Doe</h4>
                                        <p className="text-secondary mb-1">Full Stack Developer</p>
                                        <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <LoadingDelay check={loading} delay={2000}>
                        {() => {
                            return (
                                <div className="col-lg-8">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Patient ID</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <input placeholder={patientID} className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Full Name</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <input placeholder={patient_name} className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Email</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <input placeholder={email} className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Contact</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <input placeholder={contact} className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Blood Group</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <input placeholder={bloodgroup} className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Postal Address</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <input placeholder={address} className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Sex</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <input type="text" placeholder={sex} className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Age</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <input placeholder={age} className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)}}
                    </LoadingDelay>
                </div>
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Report ID</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    <input type="text" className="form-control" id="pID"/>
                                </div>
                            </div>
                            <LoadingDelay check={loading} delay={2000}>
                                {() => {
                                    return (
                                        <input type="button" value="View Report" className="btn btn-primary px-4" onClick={getPatientReport}/>
                                    )}}
                            </LoadingDelay>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PatientDashboard;