import React from "react";
import Patient from "../doctor/patient";
import PerscribedMed from "./perscribedMed"

const AutoRefills = () => {

  return (
  <>
    
    <div style={{display: "inline-block", position: "absolute"}}>
    <div style = {{ borderRadius: "5px", paddingTop: "15px", paddingLeft: "20px", paddingBottom: "10px",  position: 'absolute', display: "inline-block",  backgroundColor: "white",  minWidth: "800px", WebkitBoxShadow: "0 4px 4px -6px black",}}>
        <h3>Existing Perscriptions</h3>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <div style = {{ borderRadius: "5px", paddingTop: "40px", paddingLeft: "20px", paddingBottom: " 10px" ,display: "inline-block",  backgroundColor: "white",  minWidth: "800px", minHeight: "100px", WebkitBoxShadow: "0 4px 4px -6px black",}}>
        <h6><b>You have no perscriptions. Please contact your physician.</b></h6>
    </div>
    {/* <div style = {{marginTop:"80px",  borderRadius: "5px", border: '.5px solid #000000', padding: '20px', display: "inline-block",  backgroundColor: "white", WebkitBoxShadow: "0 7px 4px -6px black",  minWidth: "800px"  }}>
        
    </div> */}
    </div>
  </>
  )
};

export default AutoRefills;