import React from "react";
import Patient from "./patient";

const PatientHolder = (props) => {
  console.log(props);

  const renderContactList = props.patients.map((patient) => {
    return (
      <Patient
        patient={patient}
        deletePatientHandler = {props.deletePatientHandler}
      />
    );
  });
  return (
  <div style={{display: "inline-block", position: "absolute"}}>
  <div className="ui celled list"
              style = { {   
                borderRadius: "5px",
                border: '.5px solid #000000',
                padding: '20px',
                position: 'absolute',
                backgroundColor: "white",
                WebkitBoxShadow: "0 7px 4px -6px black",
                minWidth: "300px",
                marginLeft: "20px"
              }}>
    <h3>Existing Patients</h3>
    {renderContactList}
  </div>
  </div>
  )
};

export default PatientHolder;