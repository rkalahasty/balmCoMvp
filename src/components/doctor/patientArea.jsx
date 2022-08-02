import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import PatientNav from "../patient/patientNav";
import PatientHolder from "./patientHolder";
import PatientPrescription from "../patient/patientPerscriptions"

function PatientArea() {

  const [patients, setPatients] = useState([]);

  const addPatientHandler = (patient) => {
    console.log(patient)
    setPatients([...patients, patient])
  }

  const deletePatientHandler = (patient) => {
    console.log(patient)
  }
  return (
    <div className="ui container" style={{margin: "auto"}} >
      <PatientNav addPatientHandler={addPatientHandler} />
      <PatientPrescription deletePatientHandler = {deletePatientHandler} patients = {patients} />
    </div>
  );

}
 
export default PatientArea;