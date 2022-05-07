import React, {useState, useRef, Component} from "react";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";
import LoadingDelay from "react-loading-delay";
import RR from "../jsonData/Patient";
import GenReport from "./GetReportCard";

function getAssessment() {
  let m = window.location.href;
  let param = m.split("?")
  let covidp = param[1]
  let thop = param[2]
  let normp = param[3]

  let covids = covidp.split("=")
  let thops = thop.split("=")
  let norms = normp.split("=")

  let arr = [];
  arr[0] = covids[1]
  arr[1] = thops[1]
  arr[2] = norms[1]

  return arr;
}
function generateReport(emilID, patientID, arr, hospital_name, doc_name) {
  let emailArr = emilID.split("@");
  let emailID = emailArr[0];
  let PID = patientID + "_" + emailID;
  let patient_name;
  let address;
  let age;
  let bloodgroup;
  let contact;
  let sex;

  alert(PID);
  const starCountRef = ref(database, "patientData/" + PID);
  onValue(starCountRef, (snapshot) => {
    let field = snapshot.val();
    patient_name = field["name"];
    address = field["address"];
    age = field["age"];
    bloodgroup = field["bloodgroup"];
    contact = field["contact"];
    sex = field["sex"];
    loading = false;
  });

  alert(patient_name)

  let cov = arr[0]
  let tho = arr[1]
  let nor = arr[2]

  window.location.href ="http://localhost:3000/patientReport?"+emailID+"?"+patientID+"?"+hospital_name+"?"+doc_name+"?"+cov+"?"+tho+"?"+nor

  // return(
  //     <GenReport patient_name ={patient_name} contact ={contact} address={address} sex={sex} age={age} bloodgroup={bloodgroup} emailID={emailID} patientID={patientID} hospital_name={hospital_name} doc_name={doc_name} covid={arr[0]} thorax={arr[1]} normal={arr[2]} />
  // );

}

function openStreamlit() {
  let newPageUrl = "http://localhost:8501/";
  window.open(newPageUrl, "_blank");
}

function GoAddPatient() {
  window.location.href = "/registerPatient";
}

function addPatient() {}

let loading = true;

function HospitalDashboard() {
  //let m = window.location.href;
  //let param = m.split("?");
  //let paraemail = param[1]
  //let emailD = paraemail.split("=")
  //let email = emailD[1]


  let hospital_name = useState("");
  let address = useState("");
  let doc_name = useState("");
  let doc_id = useState("");
  const doctors = useState([]);
  const email = "nobel_nrca@gmail.com"; // arg#1
  const mail = email.split("@");
  const starCountRef = ref(database, "hospitalData/" + mail[0]);
  onValue(starCountRef, (snapshot) => {
    let field = snapshot.val();
    hospital_name = field["name"];
    address = field["address"];
    doctors["name"] = field["doctors"]["doc1"]["name"];
    doctors["docID"] = field["doctors"]["doc1"]["docID"];
    doc_name = doctors["name"];
    doc_id = doctors["docID"];
    loading = false;K
  });

  let link = window.location.href;

  let emailID;
  let patientID;
  let doc
  let hos
  const handleClickEvent = () => {
    emailID = document.getElementById("email").value
    patientID = document.getElementById("pid").value
    doc = document.getElementById("doc").value
    hos = document.getElementById("hos").value
  };
  let assessmentArr = useRef([]);
  if (link === "http://localhost:3000/hospitalDashboard?covid=100.0?thorax=0.0?normal=0.0"){
    assessmentArr = getAssessment(hos, doc, emailID, patientID);
  }else if(link === "http://localhost:3000/hospitalDashboard?covid=0.0?thorax=100.0?normal=0.0"){
    assessmentArr = getAssessment(hos, doc, emailID, patientID);
  }else  if(link === "http://localhost:3000/hospitalDashboard?covid=0.0?thorax=0.0?normal=100.0"){
    assessmentArr = getAssessment(hos, doc, emailID, patientID);
  }

  const GetR = () => {
    handleClickEvent();

    generateReport(emailID, patientID, assessmentArr, hos, doc);
  };

  return (
    <div className="container">
      <div className="main-body">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    alt="Admin"
                    className="rounded-circle p-1 bg-primary"
                    width="110"
                  />
                  <div className="mt-3">
                    <h4>Hospital Dashboard</h4>
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
                          <input id="hos" placeholder={hospital_name}
                                 name={"hos"} className="form-control" value={hospital_name}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input placeholder={email} className="form-control" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Address</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            placeholder={address}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Patient ID</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            id="pid"
                            className="form-control"
                            name={"pid"}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Patient Email ID</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            id="email"
                            name={"email"}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <LoadingDelay check={loading} delay={2000}>
                        {() => {
                          return (
                            <div className="usertype">
                              <div className="row">
                                <label
                                  className="form__label"
                                  htmlFor="usertype"
                                  style={{ marginLeft: "15px" }}
                                >
                                  Assign To :
                                </label>
                                <div id="group1">
                                  <input type="radio" name="group1" />
                                  {/*<label id="doc"> {doc_name}</label>*/}
                                  <input id="doc" placeholder={doc_name} value={doc_name} />
                                </div>
                              </div>
                            </div>
                          );
                        }}
                      </LoadingDelay>
                      <div className="row">
                        <div className="col-sm-3" />
                        <div
                          className=" text-secondary"
                          style={{ marginTop: "50px" }}
                        >
                          <button
                            onClick={openStreamlit}
                            style={{ marginLeft: "50px" }}
                            className="btn btn-primary px-4"
                          >
                            Upload XRay
                          </button>
                          <button
                            onClick={GetR}
                            style={{ marginLeft: "100px" }}
                            className="btn btn-primary px-4"
                          >
                            Generate Report
                          </button>
                          <button
                            onClick={GoAddPatient}
                            style={{ marginLeft: "100px" }}
                            className="btn btn-primary px-4"
                          >
                            Add Patient
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }}
          </LoadingDelay>
          <div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HospitalDashboard;
