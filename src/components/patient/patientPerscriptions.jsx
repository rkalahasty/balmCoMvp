import React from "react";
import Patient from "../doctor/patient";
import PerscribedMed from "./perscribedMed"

const PatientPrescription = () => {

  return (
  <>
    
    <div style={{display: "inline-block", position: "absolute"}}>
    <div style = {{ borderRadius: "5px", border: '.5px solid #000000', paddingTop: "10px", paddingLeft: "20px", paddingBottom: "10px",  position: 'absolute', display: "inline-block",  backgroundColor: "white",  minWidth: "800px"  }}>
        <h3>Existing Perscriptions</h3>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <PerscribedMed formula={"Diclofenac 10% with dimethylsulfoxide (DMSO) 10% in Lipoderm"} date={"8/1/2022"} doctor={"Steve Pham MD"} amount={"3"} price={"49$"}></PerscribedMed>
    <PerscribedMed formula={"Diclofenac 12% with DMSO 20% in Lipoderm"} date={"8/3/2022"} doctor={"Steve Pham MD"} amount={"1"} price={"39$"}></PerscribedMed>

    {/* <div style = {{marginTop:"80px",  borderRadius: "5px", border: '.5px solid #000000', padding: '20px', display: "inline-block",  backgroundColor: "white", WebkitBoxShadow: "0 7px 4px -6px black",  minWidth: "800px"  }}>
        
        <PerscribedMed formula={"Diclofenac 10% with dimethylsulfoxide (DMSO) 10% in Lipoderm"} date={"8/1/2022"} doctor={"Steve Pham MD"} amount={"3"}></PerscribedMed>
        <PerscribedMed formula={"Diclofenac 12% with DMSO 20% in Lipoderm"} date={"8/3/2022"} doctor={"Steve Pham MD"} amount={"1"}></PerscribedMed>

    </div> */}
    </div>
  </>
  )
};

export default PatientPrescription;