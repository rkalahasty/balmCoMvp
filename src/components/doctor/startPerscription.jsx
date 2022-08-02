import {Modal, Button} from "react-bootstrap"
import React, {useState, Component } from 'react';
import { render } from "@testing-library/react";
import Form from 'react-bootstrap/Form';
import PatientSignup from "../patientsignup";
import Med from './med'

function Perscription(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
    <button className="perscription" onClick={handleShow}
            style = {{
                position: 'absolute',
                borderRadius: '10px',
                color: 'white',
                fontSize: '12pt',
                borderColor: '#7C7FC4',
                marginTop: "8px",
                backgroundColor: "#90C2E7",
                height: '34px',
                width: '180px',
                marginLeft: "350px",
                display: "inline-block",
                fontFamily: "Poppins !important"
             }} 
            > <b>New Prescription</b>
      </button>
      
      <Modal show={show} size="lg" onHide={handleClose} id="options">
        <Modal.Header closeButton>
          <Modal.Title
          
          style = {{
            fontWeight: "bold",         
          }}>Choose a Prescription</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <section style={{borderStyle: "dashed", borderColor: "black", marginLeft: 'auto', marginRight: 'auto', fontFamily: "Poppins"}}>
                <br></br>
                <Med patient = {props.patient} formula = {"Diclofenac 10% with dimethylsulfoxide (DMSO) 10% in Lipoderm"}/>
                <br></br><br></br>
                <Med patient = {props.patient} formula = {"Diclofenac 12% with DMSO 20% in Lipoderm"}/>
                <br></br><br></br>
                <Med  patient = {props.patient} formula = {"Diclofenac 10%, DMSO 10% and Tetracaine 5% in Lipoderm"}/>
                <br></br><br></br>
                <Med  patient = {props.patient} formula = {"Diclofenac 4%, Gabapentin 4% and Lidocaine 2% in Lipoderm"}/>
                <br></br><br></br>
                <Med  patient = {props.patient} formula = {"Diclofenac 12%, DMSO 10% and Lidocaine 5% in Lipoderm"}/>
                <br></br><br></br>
                <Med  patient = {props.patient} formula = {"Baclofen 2%, Diclofenac 10%, DMSO 10% and Tetracaine 5% in Lipoderm"}/>
                <br></br>
            </section>
        </Modal.Body>
        <Modal.Footer>        
            <button onClick={handleClose}
                class="btn btn-outline-primary purplify"
                style = {{
                    marginRight:'16.5px',
                    color: 'white',
                    fontSize: '12pt',
                    borderColor: 'white',
                    borderRadius: '10px',
                    width: "100px",
                    backgroundColor: "#90C2E7"
                 }} 
                href="#"> <b>Close</b>
            </button>  
        </Modal.Footer>
      </Modal>

    </>
    );
}
export default Perscription