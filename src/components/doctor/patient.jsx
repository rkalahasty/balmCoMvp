import React from "react";
import patientIcon from '../images/patientIcon.png';
import Perscription from './startPerscription';
import {Modal, Button} from "react-bootstrap"

function Patient (props) {
  const { firstName, lastName, gender, email, cell } = props.patient;
  

  return (
    <div>
    <div class="vertical-line" style={{display: "inline-block", height: "72px", marginRight: "8px", backgroundColor: "#7C7FC4"}}></div>
    <div className="item" style = { {   
      borderRadius: "5px",
      border: '.8px solid #000000',
      padding: '9pt',
      marginTop: '10pt',
      width: '750px',
      display: 'flex',
      backgroundColor: '#F1F1F9',
      marginLeft: "10px"
    }}>
      <div style = {{display: "inline-block"}}>
        <img className="ui avatar image" src={patientIcon} alt="user" style = { {   
          width: "45px",
          display: "inline-block",
          padding: "1pt",
          position: "absolute"
        }} />
        <div className="content" style = {{
          display: "inline-block",
          marginLeft: "50px"
        }}>
          <div className="header">{firstName} {lastName}</div>
          <div>{email}</div>
        </div>
      </div>
      <Perscription patient = {props.patient}></Perscription>
      <button
            className="delete"
            style = {{
                position:'absolute',
                borderRadius: '10px',
                color: 'white',
                backgroundColor: "red",
                fontSize: '12pt',
                borderColor: 'red',
                height: '34px',
                marginTop: '8px',
                width: '125px',
                marginLeft: "550px",
                display: "inline-block",
             }} 
            > <b>Delete</b>
        </button>  
    </div>
    </div>
  );
};

export default Patient;
