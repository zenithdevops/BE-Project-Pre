import React, { useState } from "react";

function register() {
  window.location.href = "/loginForm";
}

function MainPage() {
  return (
    <div className="container">
      <div className="main-body">
        <div className="row">
          <div className="col-lg-13">
            <div className="card">
              <div className="card-body">
                <p
                  style={{
                    fontFamily: "cursive",
                    fontSize: 25,
                    fontWeight: 12,
                    textAlign: "center",
                  }}
                >
                  Welcome to the NRCA System
                </p>
                <span style={{ fontFamily: "sans-serif" }}>
                  Here is the insight about the project
                </span>
                <em style={{ marginLeft: "5px", fontWeight: "bold" }}>
                  Pulmonary Disease Diagnosis System
                </em>
                <p
                  style={{
                    fontFamily: "sans-serif",
                    marginLeft: "20px",
                    marginTop: "25px",
                  }}
                >
                  Inspiring from the recent pandemic situation and the stress
                  enforced on the medical field as its result, we have designed
                  and implemented this diagnosis system which will help in
                  accurate and fast diagnosis of the pulmonary diseases
                  (Covid-19 and Thorax) from the chest x-rays.
                </p>
                <div>
                  <ul>
                    <p>- Fast and Accurate analysis</p>
                    <p>- Use of CLAHE for enhancing image quality</p>
                    <p>- 54 layered ResNet CNN model used</p>
                    <p>- Accuracy of 99%</p>
                  </ul>
                </div>
                <p style={{ marginLeft: "80px" }}>
                  x===========x============x===========x==========x===========x===========x============x
                </p>
                <div>
                  <p>
                    Below mentioned are the steps to be followed for using the
                    system
                  </p>
                  <ul style={{ fontSize: 18 }}>
                    <p>
                      - Click the button below to get redirected to the{" "}
                      <b>Login page</b>
                    </p>
                    <p>
                      - Enter the details required and select anyone radio
                      button (The doctors, patients and hospital should use the
                      options by same names) as per use.
                    </p>
                    <p>
                      - If you are redirected to the <b>Hospital Dashboard</b>
                      <ul>
                        - Click on the{" "}
                        <i>
                          <b>Upload Xray button </b>
                        </i>
                        to select an image so that diagnosis of the disease can
                        be obtained
                      </ul>
                      <ul>
                        - The image uploaded should be <b>.jpeg or .png </b>
                        extension only.{" "}
                        <i>No other format will be supported.</i>
                      </ul>
                      <ul>
                        - To <b>Generate the PDF report </b> click on the{" "}
                        <i>Generate PDF </i> button.
                        <ul>
                          - Before clicking on the button make sure that you
                          fill out the <b>Patient ID </b>and{" "}
                          <b>Patient Email ID</b> without fail.
                        </ul>
                      </ul>
                      <ul>
                        - If the hospital user wants to add a new patient to the
                        system then click on the <b>Add Patient</b> button
                      </ul>
                    </p>
                    <p>
                      - If you are redirected to the <b>Patient Dashboard</b>
                      <ul>
                        - To view the report generated click on the{" "}
                        <b>View Report </b> button.
                      </ul>
                    </p>
                    <p>
                      - If you are redirected to the <b>Doctor Dashboard</b>
                      <ul>
                        - To view the report generated for a particular patient
                        enter the <i>Patient Id </i>and click on the{" "}
                        <b>View Report </b> button.
                      </ul>
                    </p>
                  </ul>
                </div>

                <p style={{ marginLeft: "80px" }}>
                  x===========x============x===========x==========x===========x===========x============x
                </p>
                <div>
                  <h5
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: 16,
                      fontWeight: "normal",
                    }}
                  >
                    This system has been designed and implemented as a part of
                    final year project has been done by the students of
                    Department of Computer Engineering, P.E.S Modern College of
                    Engineering,Pune.
                  </h5>
                  <ul
                    style={{
                      fontFamily: "sans-serif",
                    }}
                  >
                    <p>The group has 4 members</p>
                    <p>
                      <i>1. Chaitra Patwardhan</i>
                    </p>
                    <p>
                      <i>2. Advait Thakur</i>
                    </p>
                    <p>
                      <i>3. Neha Adawadkar</i>
                    </p>
                    <p>
                      <i>4. Roshani Chavan</i>
                    </p>
                  </ul>
                </div>
              </div>
              <button
                onClick={() => register()}
                className="btn btn-primary px-4"
              >
                Login Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainPage;
