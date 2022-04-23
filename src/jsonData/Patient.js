import React, {useState} from "react";
import PatientReport from "./PatientReport";
import moment from "moment";

const date_create=  moment().format("DD-MM-YYYY hh:mm:ss")


export const PatientJson = (patientData, Name, email, phone, address, hospital, doctor, sex, bloodgroup, covid, thorax, normal) => {

    PatientReport.patient_id = patientData
    PatientReport.full_name = Name
    PatientReport.email = email
    PatientReport.phone = phone
    PatientReport.address = address
    PatientReport.date_time = date_create
    PatientReport.hospital_name = hospital
    PatientReport.doctor_name = doctor
    PatientReport.sex = sex
    PatientReport.bloodgroup = bloodgroup
    PatientReport.covid = covid
    PatientReport.thorax = thorax
    PatientReport.normal = normal
}

export default PatientJson