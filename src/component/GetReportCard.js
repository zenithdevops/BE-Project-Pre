import React, {useState} from "react";
import Report from "./PatientReport";
import html2canvas from "html2canvas";
import jsPDF from"jspdf"
import {onValue, ref, set} from "firebase/database";
import {database, storage} from "../firebase";
import LoadingDelay from "react-loading-delay";
import { ref as strRef, getDownloadURL, uploadBytesResumable } from "firebase/storage";


const GenReport = (props) => {

    let m =window.location.href
    let param = m.split("?")
    let emailD = param[1]
    let patientID = param[2]
    let hos_name = param[3]
    let doc_name = param[4]
    let covid = param[5]
    let thorax = param[6]
    let normal = param[7]
    let emailArr = emailD.split("@");
    let emailID = emailArr[0];
    let PID = patientID + "_" + emailID;

    let hosP = hos_name.split("%20")
    let hospital_name = hosP[0]+" "+hosP[1]

    let docP = doc_name.split("%20")
    let doctor_name = docP[0]+" "+docP[1]

    let patient_name
    let contact
    let address
    let sex
    let age
    let bloodgroup

    let loading = true

    let covidNo = parseFloat(covid)
    let thoraxNo = parseFloat(thorax)
    let normalNo = parseFloat(normal)
    let detected
    if(covidNo === 100.0){
        detected = "Covid-19"
    }
    if(thoraxNo === 100.0){
        detected = "Thorax"
    }
    if(normalNo === 100.0){
        detected = "Normal"
    }

    const starCountRef = ref(database, "patientData/" + PID);
    onValue(starCountRef, (snapshot) => {
        let field = snapshot.val();
        patient_name = field["name"];
        address = field["address"];
        age = field["age"];
        bloodgroup = field["bloodgroup"];
        contact = field["contact"];
        sex = field["sex"];
        loading = false
    });

    const exportPDF =()=>{
        const ip = document.getElementById("GenReport")
        html2canvas(ip, {logging: true, letterRendering: 1, useCORS: true}).then(canvas => {
            const imgWidth = 308;
            const imgHeight = canvas.height* imgWidth / canvas.width;
            const imgData = canvas.toDataURL('img/png');
            const pdf = new jsPDF('p','mm','a5');
            pdf.addImage(imgData,'PNG',0,0, imgWidth,imgHeight);
            pdf.save("Report_"+patientID)
        })

        //loadHospitalDashboard()

    }
    const loadLoginForm=()=>{
        window.location.href = "/loginForm"
    }


    const [imgUrl, setImgUrl] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        const file = e.target[0]?.files[0]
        if (!file) return;
        const storageRef = strRef(storage, `Reports/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed",
            (snapshot) => {
                const progress =
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            },
            (error) => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImgUrl(downloadURL)
                });
            })
        set(ref(database, "patientReports/"+patientID), {
            link: imgUrl
        });
        loadLoginForm()
    }


    return(
        <div className="GenReport">
            <header id="GenReport">
                <LoadingDelay check={loading} delay={2000}>
                    {() => {
                    return(
                <Report age ={age} patient_name ={patient_name} contact ={contact} address={address} sex={sex} bloodgroup={bloodgroup} emailID={emailID} patientID={patientID} hospital_name={hospital_name} doc_name={doctor_name} covid={covid} thorax={thorax} normal={normal} detected={detected} />
                    )}}
                    </LoadingDelay>
                    </header>
            <button style={{ marginLeft: "100px" }}
                    className="btn btn-primary px-4"
                    onClick={exportPDF}>Print</button>


            <form onSubmit={handleSubmit} className='form'>
                <input type='file' />
                <button type='submit'>Upload</button>
            </form>
        </div>
    );
}
export default GenReport;