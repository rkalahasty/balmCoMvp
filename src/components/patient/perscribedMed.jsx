import React from "react";
// import patientIcon from './images/patientIcon.png';
import Perscription from '../doctor/startPerscription';
import {Modal, Button} from "react-bootstrap"

function PerscribedMed (props) {  

  return (
    <div style={{marginBottom:"10px", borderRadius: "5px", border: '.5px solid #000000', paddingTop: "10px", paddingLeft: "20px", paddingBottom: "10px", backgroundColor: "white",  minWidth: "800px"  }}>
      {/* <div>
      <h3 style={{fontSize: "20px", display: "inline-block"}}>{props.formula}</h3>
      </div> */}
      <div id="app">
        <div>
          <h3 style={{fontSize: "20px", display: "inline-block"}}>{props.formula}</h3>
          <h3 class="pull-right" style={{fontSize: "20px", display: "inline-block", marginRight: "30px"}}>
            Price: {props.price}
          </h3>
        </div>
      </div>

      <h6>Perscribed on {props.date}</h6>
      <h6>Quantity Available: {props.amount}</h6>
      <h6>{props.doctor}</h6>
        <div id="app" style={{borderRadius: "5px", border: '.5px solid #000000', paddingLeft: "10px", marginRight: "20px"}}>
          <div>
            <h3 style={{fontSize: "14px", display: "inline-block"}}>Size</h3>
            <h3 style={{fontSize: "14px", display: "inline-block", marginLeft: "55px"}}>
              Vehicle
            </h3>
          </div>
          <div>
            <h3 style={{fontSize: "18px", display: "inline-block"}}><b>120ml</b></h3>
            <h3 style={{fontSize: "18px", display: "inline-block", marginLeft: "30px"}}>
            <b>Cream</b>
            </h3>
          </div>
          <h3 style={{fontSize: "15px"}}>Instructions</h3>
          <div style={{minHeight: "100px", backgroundColor: "lightgray", borderRadius: "5px", paddingLeft: "10px", paddingTop: "10px", marginBottom: "10px", marginRight: "10px"}}>
            <h6 style={{fontSize: "15px"}}>Use one to two times daily as directed by your physician</h6>
          </div>
        </div>
      <div>

      </div>
      <button
        class="btn btn-outline-primary"
        style = {{
          marginLeft: "595px",
          marginTop: "10px",
          borderRadius: "15px",
          backgroundColor: '#90C2E7',
          fontSize: '12pt',
          color: "white",
          borderColor: "#90C2E7" }} 
          href="#"> <b>Add to Cart</b>
       </button> 

      </div>
  );
};

export default PerscribedMed;
