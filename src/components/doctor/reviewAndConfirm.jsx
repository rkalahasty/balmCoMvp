import React, {useState, Component } from "react";
import patientIcon from '../images/patientIcon.png';
import Perscription from './startPerscription';
import {Modal, Button} from "react-bootstrap"
import cert from '../images/cert.png'

function Review (props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const medications = ["DICLOFENAC", "DMSO", "TETRACAINE", "GABAPENTIN", "LIDOCAINE", "BACLOFEN"]
    const renderEdits = medications.map((x) => {
        if (props.formula.toLowerCase().includes(x.toLowerCase()))
            return (
                <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">{x}</label>
                    <div class="col-sm-10">
                    <input type="number" class="form-control" id="inputEmail3" placeholder="_%"></input>
                    </div>
              </div>
            );
        });
    
    function getIngrediants() {
        const usedMeds = []
        for (let i = 0; i < medications.length; i++) {
            props.formula.toLowerCase().includes(medications[i].toLowerCase())
            usedMeds.push(medications[i])
        }
        return usedMeds;
    }
  return (
    <div style={{marginBottom: "20px", borderColor: "gray"}}>

            <button onClick={handleShow}
                class="btn btn-outline-primary"
                style = {{
                    marginRight:'auto',
                    color: 'black',
                    fontSize: '12pt',
                    borderColor: 'black',
                    borderRadius: '7px'
                 }} 
                href="#"> <b>Review and Confirm</b>
            </button>  

        <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton> </Modal.Header>
        
        <Modal.Body>
            <img
            src={cert} alt="user" style = { { marginLeft: 'auto', marginRight: 'auto',   
            width: "135px",
            }} /> 
            <h1 style = {{textAlign: "center"}}>Confirm and Review</h1>
            <h4 style = {{textAlign: "center"}}>Formula</h4>
            <section style={{borderStyle: "dashed", borderColor: "black"}}>
                <br></br>
                
                <h5 style ={{textAlign: "center"}}><b>Recommended Topical Formula: </b>{props.formula}</h5>
            </section>
            <form>
                {renderEdits}
            </form>
            <div class="form-check form-check-inline">
                Size: 
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" style={{marginLeft: "5px"}}></input>
                <label class="form-check-label" for="inlineCheckbox1">30g</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                <label class="form-check-label" for="inlineCheckbox2">60g</label>
            </div>
        </Modal.Body>
        <Modal.Footer>    
            <button onClick={handleClose}
                class="btn btn-outline-primary"
                style = {{
                    marginRight:'auto',
                    color: 'black',
                    fontSize: '12pt',
                    borderColor: 'black',
                    borderRadius: '7px'
                 }} 
                href="#"> <b>Close</b>
            </button>  
            <button onClick={handleClose}
                class="btn btn-outline-primary"
                style = {{
                    marginRight:'10px',
                    color: 'black',
                    fontSize: '12pt',
                    borderColor: 'green',
                    borderRadius: '7px'
                 }} 
                href="#"> <b>Perscribe</b>
            </button>  
        </Modal.Footer>
      </Modal>


    </div> 
  );
};

export default Review;
