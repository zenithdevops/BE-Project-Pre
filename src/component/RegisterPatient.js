import React, { useState } from "react";
import "../register.css";
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
  };

  return (
    // <div className="form">
    //   <div className="form_body">
    //     <div className="name">
    //       <label className="form__label" for="name">
    //         {" "}
    //         Name{" "}
    //       </label>
    //       <input
    //         className="form__input"
    //         type="text"
    //         id="name"
    //         onChange={(e) => setName(e.target.value)}
    //         placeholder="Name"
    //         name=""
    //         required={true}
    //       />
    //     </div>
    //     <div className="age">
    //       <label className="form__label" for="age">
    //         Age{" "}
    //       </label>
    //       <input
    //         type="number"
    //         name=""
    //         id="age"
    //         className="form__input"
    //         placeholder="Age"
    //         required={true}
    //         onChange={(e) => setAge(e.target.value)}
    //       />
    //     </div>
    //     <div className="sex">
    //       <label className="form__label" htmlFor="sex">
    //         Gender{" "}
    //       </label>
    //       <input
    //         type="text"
    //         name=""
    //         id="sex"
    //         className="form__input"
    //         placeholder="sex"
    //         required={true}
    //         onChange={(e) => setSex(e.target.value)}
    //       />
    //     </div>
    //     <div className="bloodgroup">
    //       <label className="form__label" htmlFor="bloodgroup">
    //         Blood Group{" "}
    //       </label>
    //       <input
    //         type="text"
    //         name=""
    //         id="bloodgroup"
    //         className="form__input"
    //         placeholder="Blood Group"
    //         required={true}
    //         onChange={(e) => setBloodgroup(e.target.value)}
    //       />
    //     </div>
    //     <div className="address">
    //       <label className="form__label">Postal Address </label>
    //       <input
    //         type="text"
    //         name=""
    //         id="address"
    //         className="form__input"
    //         placeholder="Postal Address"
    //         required={true}
    //         onChange={(e) => setAddress(e.target.value)}
    //       />
    //     </div>
    //     <div className="contact">
    //       <label className="form__label" for="contact">
    //         Contact No.{" "}
    //       </label>
    //       <input
    //         type="text"
    //         name=""
    //         id="contact"
    //         className="form__input"
    //         placeholder="Contact No."
    //         required={true}
    //         onChange={(e) => setContact(e.target.value)}
    //       />
    //     </div>
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
    //     {/* <div className="confirm-password">
    //       <label className="form__label" for="confirmPassword">
    //         Confirm Password{" "}
    //       </label>
    //       <input
    //         className="form__input"
    //         type="password"
    //         id="confirmPassword"
    //         placeholder="Confirm Password"
    //         //onChange={(e) => setConfirmPassword(e.target.value)}
    //       />
    //     </div> */}
    //   </div>
    //   <div className="footer">
    //     <div className="col-sm-3" />
    //     <Link to="/loginForm">
    //       <button
    //         onClick={() => writeUserData()}
    //         className="btn btn-primary px-4"
    //       >
    //         Register Patient
    //       </button>
    //     </Link>
    //   </div>
    // </div>
    <>
      <div class="container">
        <div
          class="title"
          style={{ fontFamily: "fantasy", fontWeight: "lighter" }}
        >
          Registration
        </div>
        <form>
          <div class="user-details">
            <div className="row">
              <div className="col-md-12">
                <div class="input-box name">
                  <label
                    class="details form__label"
                    for="name"
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                      fontWeight: "inherit",
                    }}
                  >
                    Name
                  </label>
                  <input
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                      fontWeight: "inherit",
                    }}
                    type="text"
                    name=""
                    id="name"
                    className="form__input"
                    placeholder="Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div class="input-box address">
                  <label
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                      fontWeight: "inherit",
                    }}
                    class="details form__label"
                    for="address"
                  >
                    Address
                  </label>
                  <input
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                      fontWeight: "inherit",
                    }}
                    type="text"
                    id="address"
                    className="form__input"
                    placeholder="Address"
                    required
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                <div class="input-box ">
                  <label
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                      fontWeight: "inherit",
                    }}
                    class="details form__label"
                    for="contact"
                  >
                    Contact
                  </label>
                  <input
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                      fontWeight: "inherit",
                    }}
                    className="form__input"
                    type="text"
                    id="contact"
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Contact"
                    name=""
                    required
                  />
                </div>
              </div>
              <div className="col-md">
                <div class="input-box age">
                  <label
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                      fontWeight: "inherit",
                    }}
                    class="details form__label"
                    for="age"
                  >
                    Age
                  </label>
                  <input
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                      fontWeight: "inherit",
                    }}
                    type="number"
                    name=""
                    id="age"
                    className="form__input"
                    placeholder="Age"
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                <div class="input-box sex">
                  <label
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                      fontWeight: "inherit",
                    }}
                    class="details form__label"
                    for="sex"
                  >
                    Gender
                  </label>
                  <input
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                      fontWeight: "inherit",
                    }}
                    type="text"
                    name=""
                    id="sex"
                    className="form__input"
                    placeholder="Sex"
                    required
                    onChange={(e) => setSex(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md">
                <div class="input-box bloodgroup">
                  <label
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                      fontWeight: "inherit",
                    }}
                    class="details form__label"
                    for="bloodgroup"
                  >
                    Blood Group
                  </label>
                  <input
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                      fontWeight: "inherit",
                    }}
                    type="text"
                    name=""
                    id="bloodgroup"
                    className="form__input"
                    placeholder="Blood Group"
                    required
                    onChange={(e) => setBloodgroup(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md">
                <div class="input-box email">
                  <label
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                      fontWeight: "inherit",
                    }}
                    class="details form__label"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                      fontWeight: "inherit",
                    }}
                    type="email"
                    id="email"
                    className="form__input"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md">
                <div class="input-box password">
                  <label
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                      fontWeight: "inherit",
                    }}
                    class="details form__label"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "20px",
                      fontWeight: "inherit",
                    }}
                    className="form__input"
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="button col-sm-3">
            <Link to="/loginForm">
              <input
                style={{
                  fontSize: "25px",
                  marginLeft: "120px",
                }}
                type="submit"
                value="Register"
                onClick={() => writeUserData()}
              />
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterPatient;
