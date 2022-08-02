import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import AddPatient from "./addPatient";
import PatientHolder from "./patientHolder";

function PatientBox() {

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
      <AddPatient addPatientHandler={addPatientHandler} />
      <PatientHolder deletePatientHandler = {deletePatientHandler} patients = {patients} />
    </div>
  );

}
 
export default PatientBox;