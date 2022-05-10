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
  let password = "********";
  let doctor_name = useState("");
  let degree = useState("");
  let experience = useState("");
  let hospital_name = useState("");
  const email = "amir_khoja@nrca.com";
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
              <div
                className="card-body"
                style={{ boxShadow: "10px 10px 5px rgba(227, 0, 162, 0.2)" }}
              >
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmC6ro1C2q8DTgxNnzW4RnfraDt_ydbSZ3HVdjF3L7_GBwc2-pO-I5WPqI2RlSl5rHzvY&usqp=CAU"
                    alt="Admin"
                    className="rounded-circle p-1 bg-primary"
                    width="110"
                  />
                  <div
                    className="mt-3"
                    style={{ fontFamily: "fantasy", fontWeight: "lighter" }}
                  >
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
                            Doctor Name
                          </h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            placeholder={doctor_name}
                            className="form-control"
                            disabled
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
                            type="text"
                            className="form-control"
                            placeholder={email}
                            disabled
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
                            Degree
                          </h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control"
                            placeholder={degree}
                            disabled
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
                            Experience
                          </h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control"
                            placeholder={experience}
                            disabled
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
                            Hospital
                          </h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control"
                            placeholder={hospital_name}
                            disabled
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
                            Password
                          </h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control"
                            placeholder={password}
                            disabled
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
                            Patient ID
                          </h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control"
                            id="pID"
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "20px",
                              fontWeight: "inherit",
                            }}
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
