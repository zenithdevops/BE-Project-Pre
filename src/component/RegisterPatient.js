import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { auth, database } from "../firebase";
import { onValue, ref, set } from "firebase/database";
import { createUserWithEmailAndPassword } from "firebase/auth";

function RegisterPatient() {
  let PID;
  const starCountRef = ref(database, "currentPatientID");
  onValue(starCountRef, (snapshot) => {
    const lastPID = snapshot.val();
    PID = lastPID["id"];
  });

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [age, setAge] = useState(null);
  const [sex, setSex] = useState(null);
  const [bloodgroup, setBloodgroup] = useState(null);
  const [address, setAddress] = useState(null);
  const [contact, setContact] = useState(null);

  const writeUserData = () => {
    const user_id_email = email.split("@");
    let person_userID = PID + "_" + user_id_email[0];

    set(ref(database, "patientData/" + person_userID), {
      name: name,
      age: age,
      sex: sex,
      bloodgroup: bloodgroup,
      address: address,
      contact: contact,
      email: email,
      password: password,
      patientid: PID,
    });
    registerWithEmailAndPassword(name, email, password);
    newPatientID();
  };

  const newPatientID = () => {
    let pIdNum = Number(PID);
    pIdNum = pIdNum + 1;
    let pIdStr = pIdNum.toString();
    set(ref(database, "currentPatientID"), {
      id: pIdStr,
    });
  };

  const registerWithEmailAndPassword = (name, email, password) => {
    try {
      const res = createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      alert("Welcome to System " + email);

    } catch (err) {
      console.error(err);
      alert(err.message);
    }
    window.location.href="/loginForm"
  };

  return (
    <div className="form">
      <div className="form-body">
        <div className="name">
          <label className="form__label" for="name">
            {" "}
            Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            name=""
            required={true}
          />
        </div>
        <div className="age">
          <label className="form__label" for="age">
            Age{" "}
          </label>
          <input
            type="number"
            name=""
            id="age"
            className="form__input"
            placeholder="Age"
            required={true}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="sex">
          <label className="form__label" htmlFor="sex">
            Gender{" "}
          </label>
          <input
            type="text"
            name=""
            id="sex"
            className="form__input"
            placeholder="sex"
            required={true}
            onChange={(e) => setSex(e.target.value)}
          />
        </div>
        <div className="bloodgroup">
          <label className="form__label" htmlFor="bloodgroup">
            Blood Group{" "}
          </label>
          <input
            type="text"
            name=""
            id="bloodgroup"
            className="form__input"
            placeholder="Blood Group"
            required={true}
            onChange={(e) => setBloodgroup(e.target.value)}
          />
        </div>
        <div className="address">
          <label className="form__label">Postal Address </label>
          <input
            type="text"
            name=""
            id="address"
            className="form__input"
            placeholder="Postal Address"
            required={true}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="contact">
          <label className="form__label" for="contact">
            Contact No.{" "}
          </label>
          <input
            type="text"
            name=""
            id="contact"
            className="form__input"
            placeholder="Contact No."
            required={true}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="email">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="Email"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <label className="form__label" for="password">
            Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            placeholder="Password"
            required={true}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* <div className="confirm-password">
          <label className="form__label" for="confirmPassword">
            Confirm Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            //onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div> */}
      </div>
      <div className="footer">
        <div className="col-sm-3" />
        <Link to="/loginForm">
          <button
            onClick={() => writeUserData()}
            className="btn btn-primary px-4"
          >
            Register Patient
          </button>
        </Link>
      </div>
    </div>
  );
}

export default RegisterPatient;
