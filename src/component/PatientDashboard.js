import React, { useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "../firebase";
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

function PatientDashboard() {
  let password = "********";
  let patientId = "110100";
  let patient_name = useState("");
  let address = useState("");
  let age = useState("");
  let bloodgroup = useState("");
  let contact = useState("");
  let sex = useState("");
  let patientID = useState("");
  const email = "advaitthakur1209@gmail.com";
  const mail = email.split("@");

  let patientD = patientId + "_" + mail[0];
  const starCountRef = ref(database, "patientData/" + patientD);
  onValue(starCountRef, (snapshot) => {
    let field = snapshot.val();
    patient_name = field["name"];
    address = field["address"];
    age = field["age"];
    bloodgroup = field["bloodgroup"];
    contact = field["contact"];
    patientID = field["patientid"];
    sex = field["sex"];
    loading = false;
  });

  return (
    <div className="container">
      <div className="main-body">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div
                className="card-body"
                style={{ boxShadow: "10px 10px 5px rgba(227, 0, 162, 0.2)" }}
              >
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://cutewallpaper.org/24/patient-png/patient-free-user-icons.png"
                    alt="Admin"
                    className="rounded-circle p-1 bg-primary"
                    width="110"
                  />
                  <div
                    className="mt-3"
                    style={{ fontFamily: "fantasy", fontWeight: "lighter" }}
                  >
                    <h4>Patient Dashboard</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <LoadingDelay check={loading} delay={2000}>
            {() => {
              return (
                <div className="col-lg-8">
                  <div
                    className="card"
                    style={{
                      boxShadow: "10px 10px 5px rgba(227, 0, 162, 0.2)",
                    }}
                  >
                    <div className="card-body">
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6
                            className="mb-0"
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "20px",
                              fontWeight: "inherit",
                            }}
                          >
                            Patient ID
                          </h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            placeholder={patientID}
                            className="form-control"
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "20px",
                              fontWeight: "inherit",
                            }}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6
                            className="mb-0"
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "20px",
                              fontWeight: "inherit",
                            }}
                          >
                            Full Name
                          </h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            placeholder={patient_name}
                            className="form-control"
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "20px",
                              fontWeight: "inherit",
                            }}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6
                            className="mb-0"
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "20px",
                              fontWeight: "inherit",
                            }}
                          >
                            Email
                          </h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            placeholder={email}
                            className="form-control"
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "20px",
                              fontWeight: "inherit",
                            }}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6
                            className="mb-0"
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "20px",
                              fontWeight: "inherit",
                            }}
                          >
                            Contact
                          </h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            placeholder={contact}
                            className="form-control"
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "20px",
                              fontWeight: "inherit",
                            }}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6
                            className="mb-0"
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "20px",
                              fontWeight: "inherit",
                            }}
                          >
                            Blood Group
                          </h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            placeholder={bloodgroup}
                            className="form-control"
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "20px",
                              fontWeight: "inherit",
                            }}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6
                            className="mb-0"
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "20px",
                              fontWeight: "inherit",
                            }}
                          >
                            Postal Address
                          </h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            placeholder={address}
                            className="form-control"
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "20px",
                              fontWeight: "inherit",
                            }}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6
                            className="mb-0"
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "20px",
                              fontWeight: "inherit",
                            }}
                          >
                            Gender
                          </h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            placeholder={sex}
                            className="form-control"
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "20px",
                              fontWeight: "inherit",
                            }}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6
                            className="mb-0"
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "20px",
                              fontWeight: "inherit",
                            }}
                          >
                            Age
                          </h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            placeholder={age}
                            className="form-control"
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "20px",
                              fontWeight: "inherit",
                            }}
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6
                            className="mb-0"
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "20px",
                              fontWeight: "inherit",
                            }}
                          >
                            Report ID
                          </h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control"
                            required={true}
                            id="pID"
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "20px",
                              fontWeight: "inherit",
                            }}
                          />
                        </div>
                      </div>
                      <LoadingDelay check={loading} delay={2000}>
                        {() => {
                          return (
                            <input
                              type="button"
                              value="View Report"
                              className="btn btn-primary px-4"
                              onClick={getPatientReport}
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: "20px",
                                fontWeight: "bolder",
                              }}
                            />
                          );
                        }}
                      </LoadingDelay>
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
export default PatientDashboard;
