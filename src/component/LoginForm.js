import React, {useState} from 'react';
import './style.css'
import {auth} from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth"


function LoginForm() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [patientID, setPatientID] = useState(null);
    const [userType, setUserType] = useState(null);

    const [data, setData] = useState("");


    const login =() =>{
        try {
            const res = signInWithEmailAndPassword(auth, email, password).then(
                r=> console.log(res))
            redir()
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    const redir =() =>{
        if(userType=== "patient"){
            setData(userType)
        }else if (userType === "doctor"){

        }else{

        }
    }


    return (
        <div className="form">
            <div className="form-body">
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input type="email" id="email" className="form__input" placeholder="Email"
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password" id="password" placeholder="Password"
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="patientid">
                    <label className="form__label" htmlFor="patientid">Password </label>
                    <input className="form__input" type="patientid" id="patientid" placeholder="Patient ID"
                           onChange={(e) => setPatientID(e.target.value)}/>
                </div>
            </div>
            <div className="usertype">
                <div className="row">
                    <label className="form__label" htmlFor="usertype" style={{marginLeft: '15px'}}>User Type</label>
                    <div id="group1">
                        <input type="radio" value="patient" name="group1" onChange={(e) => setUserType(e.target.value)}/><label>Patient</label>
                        <input type="radio" value="doctor" name="group1"
                               style={{marginLeft: '15px'}} onChange={(e) => setUserType(e.target.value)}/><label>Doctor</label>
                        <input type="radio" value="hospital" name="group1" onChange={(e) => setUserType(e.target.value)}
                               style={{marginLeft: '15px'}}/><label>Hospital</label>
                    </div>
                </div>
            </div>
            <div>

            </div>
            <div className="footer">
                <button onClick={() =>login()} type="submit" className="btn">Login</button>
            </div>


        </div>
    )
}

export default LoginForm;