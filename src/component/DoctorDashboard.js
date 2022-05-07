import React, { useState } from "react";
import { database } from "../firebase";
import { onValue, ref } from "firebase/database";
import LoadingDelay from "react-loading-delay";

let loading = true;
let loadingReport = true;

function getPatientReport() {
  const patientID = document.getElementById("pID").value;
  alert(patientID);
  let reportLink;
  const starCountRef = ref(database, "patientReports/" + patientID);
  onValue(starCountRef, (snapshot) => {
    let arr = snapshot.val();
    reportLink = arr["link"];
    loadingReport = false;
    window.open(reportLink, "_blank");
  });
}

function DoctorDashboard() {
  let m = window.location.href;
  let param = m.split("?");
  let paraemail = param[1]
  let emailD = paraemail.split("=")
  let email = emailD[1]
  let password = "********";
  let doctor_name = useState("");
  let degree = useState("");
  let experience = useState("");
  let hospital_name = useState("");
  //const email = "amir_khoja@nrca.com"; // arg#1
  const mail = email.split("@");
  const starCountRef = ref(database, "doctorsData/doctorsData/" + mail[0]);
  onValue(starCountRef, (snapshot) => {
    let field = snapshot.val();
    //const field = arr[mail[0]]
    hospital_name = field["hospital"];
    degree = field["degree"];
    experience = field["experience"];
    doctor_name = field["name"];
    loading = false;
  });

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
                    <h4>Doctor Dashboard</h4>
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
                          <h6 className="mb-0">Doctor Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            placeholder={doctor_name}
                            className="form-control"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control"
                            placeholder={email}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Degree</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control"
                            placeholder={degree}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Experience</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control"
                            placeholder={experience}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Hospital</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control"
                            placeholder={hospital_name}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Password</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control"
                            placeholder={password}
                            disabled
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
                            className="form-control"
                            id="pID"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-3" />
                        <div className="col-sm-9 text-secondary">
                          <LoadingDelay check={loading} delay={2000}>
                            {() => {
                              return (
                                <input
                                  type="button"
                                  value="View Report"
                                  className="btn btn-primary px-4"
                                  onClick={getPatientReport}
                                />
                              );
                            }}
                          </LoadingDelay>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }}
          </LoadingDelay>
        </div>
      </div>
    </div>
  );
}
export default DoctorDashboard;
