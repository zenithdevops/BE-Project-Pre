import React, { useState } from "react";
import "../login.css";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginForm() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [patientID, setPatientID] = useState(null);
  const [userType, setUserType] = useState(null);

  const login = () => {
    try {
      const res = signInWithEmailAndPassword(auth, email, password).then((r) =>
        console.log(res)
      );
      redir();
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const redir = () => {
    if (userType === "patient") {
      window.location.href = "/patientDashboard";
    } else if (userType === "doctor") {
      window.location.href = "/doctorDashboard";
    } else {
      window.location.href = "/hospitalDashboard";
    }
  };

  return (
    // <div className="form">
    //   <div className="form-body">
    //     <div className="email">
    //       <label className="form__label" for="email">
    //         Email{" "}
    //       </label>
    //       <input
    //         type="email"
    //         id="email"
    //         className="form__input"
    //         placeholder="Email"
    //         required={true}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <div className="password">
    //       <label className="form__label" for="password">
    //         Password{" "}
    //       </label>
    //       <input
    //         className="form__input"
    //         type="password"
    //         id="password"
    //         placeholder="Password"
    //         required={true}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <div className="patientid">
    //       <label className="form__label" htmlFor="patientid">
    //         Patient ID{" "}
    //       </label>
    //       <input
    //         className="form__input"
    //         type="patientid"
    //         id="patientid"
    //         placeholder="Patient ID"
    //         required={true}
    //         onChange={(e) => setPatientID(e.target.value)}
    //       />
    //     </div>
    //   </div>
    //   <div className="usertype">
    //     <div className="row">
    //       <label
    //         className="form__label"
    //         htmlFor="usertype"
    //         style={{ marginLeft: "15px" }}
    //       >
    //         User Type
    //       </label>
    //       <div id="group1">
    //         <input
    //           type="radio"
    //           value="patient"
    //           name="group1"
    //           required={true}
    //           onChange={(e) => setUserType(e.target.value)}
    //         />
    //         <label>Patient</label>
    //         <input
    //           type="radio"
    //           value="doctor"
    //           name="group1"
    //           style={{ marginLeft: "15px" }}
    //           required={true}
    //           onChange={(e) => setUserType(e.target.value)}
    //         />
    //         <label>Doctor</label>
    //         <input
    //           type="radio"
    //           value="hospital"
    //           name="group1"
    //           required={true}
    //           onChange={(e) => setUserType(e.target.value)}
    //           style={{ marginLeft: "15px" }}
    //         />
    //         <label>Hospital</label>
    //       </div>
    //     </div>
    //   </div>
    //   <div></div>

    //   <div className="footer">
    //     <div className="col-sm-3" />
    //     <button onClick={() => login()} className="btn btn-primary px-4">
    //       Login
    //     </button>
    //   </div>
    // </div>

    <div class="login">
      <div class="image">
        <img
          src="https://images.pexels.com/photos/7852738/pexels-photo-7852738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
      </div>
      <div class="details">
        <h1 class="title">Log in</h1>
        <div class="input">
          <label for="">Email</label>
          <input type="text" placeholder="Enter your email address" />
        </div>
        <div class="input">
          <label for="">Password</label>
          <input type="text" placeholder="Enter your password" />
        </div>
        <div class="group1" style={{ display: "inline-flex" }}>
          <label style={{ fontSize: "20px", marginTop: "68px" }}>Patient</label>
          <input
            type="radio"
            value="patient"
            name="group1"
            style={{ marginTop: "76px" }}
            onChange={(e) => setUserType(e.target.value)}
          />
          <label style={{ fontSize: "20px", marginTop: "68px" }}>Doctor</label>
          <input
            type="radio"
            value="doctor"
            name="group1"
            style={{ marginTop: "76px" }}
            onChange={(e) => setUserType(e.target.value)}
          />
          <label style={{ fontSize: "20px", marginTop: "68px" }}>
            Hospital
          </label>
          <input
            type="radio"
            value="hospital"
            name="group1"
            style={{ marginTop: "76px" }}
            onChange={(e) => setUserType(e.target.value)}
          />
        </div>
        <button class="login-button" onClick={login}>
          Log in
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
