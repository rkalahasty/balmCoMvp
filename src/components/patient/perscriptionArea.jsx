import React, { useState } from "react";
import PatientPrescription from "./patientPerscriptions"
import AutoRefills from "./autoRefills"
import PastOrders from "./pastOrders"
import ps from "../images/ps.png"
import reset from '../images/reset.png'
import pastorders from '../images/pastorders.png'

function PrescriptionArea() {

  const [active, setActive] = useState("Prescription")

  return (
    <div className="ui container" style={{margin: "auto"}} >


      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
      
      <div className="patientnav" style={{ borderRadius: "5px", display: "inline-block", backgroundColor: "transparent"}}>
        
        <div>
            <img className="navIcon" src={ps} alt="user"></img>
            <button onClick={() => setActive("Prescription")}className="navbutton">
                Perscriptions
            </button>
        </div>
        <div>            
            <img className="navIcon" src={reset} alt="user" style={{padding: "5px"}}></img>
            <button onClick={() => setActive("PastOrders")} className="navbutton">
                Auto Refills
            </button>
        </div>
        <div>
            <img className="navIcon" src={pastorders} alt="user"></img>
            <button onClick={() => setActive("AutoRefills")} className="navbutton">
                Past Orders
            </button>
        </div>
        {/* <div>
            <img className="navIcon" src={profile} alt="user" style={{padding: "5px"}}></img>
            <button className="navbutton">
                Profile
            </button>
        </div> */}
      </div>

      {active === "Prescription" && <PatientPrescription/>}
      {active === "AutoRefills" && <AutoRefills/>}
      {active === "PastOrders" && <PastOrders/>}

    </div>
  );

}
 
export default PrescriptionArea;