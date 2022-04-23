import React, {useState, useRef} from "react";
import {database} from '../firebase'
import {ref, onValue} from "firebase/database";
import LoadingDelay from 'react-loading-delay';
import InputField from '../inputfield';
import RR from "../jsonData/Patient";


function getAssessment() {

    let m = window.location.pathname
    let pdf_google_link = m.split('=')
    let disease = pdf_google_link[1].split('&')
    let arr = []
    for (let i = 0; i < 3; i++) {
        let m = disease[i].split(':')
        arr[i] = m[1]
    }
    return arr
}
function generateReport(emilID,patientID,arr,hospital_name,doc_name){

    let emailArr = emilID.split('@')
    let emailD = emailArr[0]
    let PID = patientID+"_"+emailD
    let patient_name
    let address
    let age
    let bloodgroup
    let contact
    let sex

    alert(PID)
    const starCountRef = ref(database, "patientData/"+PID);
    onValue(starCountRef, (snapshot) => {
        let field = snapshot.val();
        patient_name = field['name']
        address = field['address']
        age = field['age']
        bloodgroup = field['bloodgroup']
        contact = field['contact']
        sex = field['sex']
        loading = false
    });

    setJ()

    function setJ(){
        RR(patientID,patient_name,emailD,contact,address,hospital_name,doc_name,sex,bloodgroup,arr[0],arr[1],arr[2])
    }

}

function openStreamlit(){
    let newPageUrl = "http://localhost:8502/"
    window.open(newPageUrl, "_blank")
}

function addPatient(){

}

let loading = true;

function HospitalDashboard() {
    const nameForm = useRef(null);
    let hospital_name = useState("");
    let address = useState("");
    let doc_name = useState("")
    let doc_id = useState("")
    const doctors = useState([])
    const email = "nobel_nrca@gmail.com"
    const mail = email.split('@')
    const starCountRef = ref(database, "hospitalData/" + mail[0] );
    onValue(starCountRef, (snapshot) => {
        let field = snapshot.val();
        hospital_name = field['name'];
        address = field['address'];
        doctors['name'] = field['doctors']['doc1']['name'];
        doctors['docID'] = field['doctors']['doc1']['docID'];
        doc_name = doctors['name']
        doc_id = doctors['docID']
        loading = false
    });
    const doc = doc_name
    const hos = hospital_name
    let link = window.location.href

    let emailID
    let patientID
    const handleClickEvent = () => {
        const form = nameForm.current
        alert(`${form['email'].value} ${form['pid'].value}`)
        emailID = form['email'].value
        patientID = form['pid'].value
    }

    let assessmentArr = useRef([])

    if(link !== "http://localhost:3000/") {
        assessmentArr = getAssessment(hos, doc, emailID, patientID)
    }
    const GetR = () => {
        handleClickEvent()

        generateReport(emailID, patientID, assessmentArr, hos, doc)

        //GeneratePDF()
    }

    return (
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
                                                    <h6 className="mb-0">Name</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <input placeholder={hospital_name} className="form-control"/>
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
                                                    <h6 className="mb-0">Address</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <input placeholder={address} className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        }}
                    </LoadingDelay>
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="row mb-3">
                                    <div className="col-sm-9 text-secondary">
                                        <label className="form-control">Add Patient Here </label>
                                    </div>
                                    <div className="col-sm-3">
                                        <input type="button" value="Add Patient" className="btn btn-primary px-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div><br/></div>
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <form ref={nameForm}>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Patient ID</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <InputField type="text" id="pid" className="form-control"  name={'pid'}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email ID</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <InputField type="text" id="emailD"  name={'email'}
                                                        className="form-control"/>
                                        </div>
                                    </div>
                                </form>
                                <LoadingDelay check={loading} delay={2000}>
                                    {() => {
                                        return (
                                            <div className="usertype">
                                                <div className="row">
                                                    <label className="form__label" htmlFor="usertype"
                                                           style={{marginLeft: '15px'}}>Assign To :</label>
                                                    <div id="group1">
                                                        <input type="radio" name="group1" /><label> {doc_name}</label>
                                                    </div>
                                                </div>
                                            </div>)
                                    }}
                                </LoadingDelay>
                                <div className="row">
                                    <div className="col-sm-3"/>
                                    <div className="col-sm-9 text-secondary">
                                        <button onClick={openStreamlit} className="btn btn-primary px-4">Upload XRay</button>
                                    </div>
                                </div>
                                <div>
                                    <br></br>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3"/>
                                    <div className="col-sm-9 text-secondary">

                                        <input type="button" value="Generate Report"  onClick={GetR}  className="btn btn-primary px-4"/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HospitalDashboard;
