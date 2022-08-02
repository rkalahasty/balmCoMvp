import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import PatientNav from "./patientNav";
// import PatientHolder from "./patientHolder";
import PatientPrescription from "./patientPerscriptions"
import AutoRefills from "./autoRefills"
import PastOrders from "./pastOrders"

function PrescriptionArea() {

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
      <PatientNav />
      {/* <PatientPrescription /> */}
      <PastOrders />
    </div>
  );

}
 
export default PrescriptionArea;