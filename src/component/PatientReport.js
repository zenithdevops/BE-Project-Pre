import React from 'react'

import styles from './home.module.css'

const Report = (props) => {

    let emailID = props.emailID
    let patientID = props.patientID
    let hospital_name = props.hospital_name
    let doc_name = props.doc_name
    let covid = props.covid
    let thorax = props.thorax
    let normal = props.normal
    let patient_name = props.patient_name
    let contact = props.contact
    let sex =props.sex
    let address = props.address
    let bloodgroup = props.bloodgroup
    let age = props.age
    let detected = props.detected

    return (
        <div className={styles['container']}>
            <div className={styles['container1']}>
                <h1 className={styles['text']}>MEDICAL REPORT CARD</h1>
                <span className={styles['text01']}>NCRA</span>
            </div>
            <div className={styles['container2']}>
        <span className={styles['text02']}>
          <span className={styles['text03']}>COVID</span>
        </span>
                <span className={styles['text04']}>
          <span className={styles['text05']}>{covid}</span>
        </span>
                <span className={styles['text06']}>
          <span className={styles['text07']}>Normal</span>
        </span>
                <span className={styles['text08']}>
          <span className={styles['text09']}>{normal}</span>
        </span>
                <span className={styles['text10']}>
          <span className={styles['text11']}>THORAX</span>
        </span>
                <span className={styles['text12']}>
          <span className={styles['text13']}>{thorax}</span>
        </span>
                <span className={styles['text14']}>
          <span>DETECTED</span>
        </span>
                <span className={styles['text16']}>
          <span>{detected}</span>

        </span>
            </div>
            <label className={styles['text18']}>HOSPITAL&apos;S NAME</label>
            <label className={styles['text19']}>{hospital_name}</label>
            <label className={styles['text20']}>DOCTOR&apos;S NAME</label>
            <label className={styles['text21']}>{doc_name}</label>
            <label className={styles['text22']}>PATIENT&apos;S NAME</label>
            <label className={styles['text23']}>{patient_name}</label>
            <label className={styles['text24']}>PATIENT&apos;S ID</label>
            <label className={styles['text25']}>{patientID}</label>
            <label className={styles['text26']}>EMAIL ID</label>
            <label className={styles['text27']}>{emailID}</label>
            <label className={styles['text28']}>CONTACT</label>
            <label className={styles['text29']}>{contact}</label>
            <label className={styles['text30']}>BLOOD GROUP</label>
            <label className={styles['text31']}>{bloodgroup}</label>
            <label className={styles['text32']}>POSTAL ADDRESS</label>
            <label className={styles['text33']}>{address}</label>
            <label className={styles['text34']}>AGE</label>
            <label className={styles['text35']}>{age}</label>
            <label className={styles['text36']}>SEX</label>
            <label className={styles['text37']}>{sex}</label>
        </div>

    )
}

export default Report

