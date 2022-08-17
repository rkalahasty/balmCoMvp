import React, {useState} from "react";
import {Modal} from "react-bootstrap"
import cert from '../images/cert.png'
import nameIcon from '../images/nameIcon.png'
import email from '../images/email.png'
import phoneIcon from '../images/phoneIcon.png'
import gender from '../images/gender.png'

function Med (props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseAndPerscribe = () => {
        setShow(false);
        alert("Prescription Has Been Sent!");
    }

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
  return (
    <div style={{marginBottom: "20px", borderColor: "gray"}}>
        <button onClick={handleShow}
            className="btn btn-outline-success"
            style = {{
                position:'absolute',
                padding: '4px',
                paddingLeft: 'auto',
                borderStyle: "solid",
                paddingRight: 'auto',
                borderRadius: '10px',
                color: 'black',
                fontSize: '12pt',
                borderColor: 'black',
                height: '45px',
                width: '750px',
                display: "inline-block",
                marginBottom: "125px"
            }} 
                > <b>{props.formula}</b>
        </button> 

        <Modal show={show} size="lg" onHide={handleClose} id="perscription">
        <Modal.Header style={{backgroundColor: "#F1F1F9" }}closeButton> </Modal.Header>
        
        <Modal.Body style={{backgroundColor: "#F1F1F9", fontFamily: "Poppins"}}>
            <img
            src={cert} alt="user" style = { { marginLeft: 'auto', marginRight: 'auto', backgroundColor: "#F1F1F9",   
            width: "135px",
            }} /> 
            <h1 style = {{textAlign: "center"}}>Edit Formula</h1>
            <h4 style = {{textAlign: "center"}}>Click one of the boxes below to select the formula</h4>
            
            
            <div style={{backgroundColor: "#F1F1F9", paddingLeft: "7px", borderRadius: "5px", marginTop: "15px", paddingTop: "2px"}}><h5>Recommended Topical Formula:</h5></div>
            <div style={{marginTop: "7px", borderRadius: "4px", border: "2px solid #000000", paddingTop: "6px", paddingLeft: "8px", backgroundColor: "white"}}><h6 style={{fontSize: "18px"}}>
                <i>{props.formula}</i>
            </h6></div>
            <div style={{ backgroundColor: "white" }}><h5 style={{backgroundColor: "#F1F1F9", paddingLeft: "7px", borderRadius: "5px", marginTop: "15px"}}>Perscription:</h5></div>
            <div style={{ marginTop: "7px", borderRadius: "7px", border: "2px solid #000000", padding: "10px", backgroundColor: "white"}}>
            <form >
                {renderEdits}
            </form>
            <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label" style={{fontSize: '18px', marginTop: '2px'}}>REFILLS</label>
                    <div class="col-sm-10">
                    <input type="number" class="form-control" id="inputEmail3" placeholder="4"></input>
                    </div>
              </div>
            <div style={{fontSize: "19px"}}> Size:  
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" style={{marginLeft: "5px"}}></input>
                <label class="form-check-label" for="inlineCheckbox1">30g</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                <label class="form-check-label" for="inlineCheckbox2">60g</label>
            </div></div>
              </div>
            <div style={{marginTop: "7px"}}>
            <div class="form-group">
                <div style={{backgroundColor: "#F1F1F9", paddingLeft: "7px", borderRadius: "5px", marginTop: "15px"}}><h5 style={{marginTop: "15px"}}>Instructions for Use: </h5></div>
                <textarea style={{  borderRadius: '7px', border: '2px solid #000000', padding: '9px', backgroundColor: "white"}}
                class="form-control" id="exampleFormControlTextarea1" rows="9"></textarea>
            </div>
            <div style={{backgroundColor: "#F1F1F9", paddingLeft: "7px", borderRadius: "5px", marginTop: "15px"}}><h5 style={{marginTop: "15px"}}>Patient Information: </h5></div>
                <div style={{ marginTop: "7px", borderRadius: "7px", border: "2px solid #000000", padding: "10px", backgroundColor: "white"}}>
                    <div>
                        <div style = {{display: "inline-block"}}>
                            <img className="ui avatar image" src={nameIcon} alt="user" style = { {   
                            width: "35px",
                            marginLeft: "2px",
                            marginTop: "5px",
                            display: "inline-block",
                            padding: "2pt",
                            position: "absolute"
                            }} />
                            <div className="content" style = {{
                            display: "inline-block",
                            marginLeft: "50px"
                            }}>
                                <div className="header" style={{fontSize: "13px"}}>Name</div>
                                <div style={{fontSize: "18px"}}>{props.patient.firstName} {props.patient.lastName}</div>
                            </div> 
                        </div>
                    </div>
                    <div style={{marginTop: "5px"}}>
                        <div style = {{display: "inline-block"}}>
                            <img className="ui avatar image" src={email} alt="user" style = { {   
                            width: "35px",
                            marginLeft: "2px",
                            marginTop: "5px",
                            marginRight: "4px",
                            position: "absolute"
                            }} />
                            <div className="content" style = {{
                            display: "inline-block",
                            marginLeft: "50px"
                            }}>
                                <div className="header" style={{fontSize: "13px"}}>Email</div>
                                <div style={{fontSize: "18px"}}>{props.patient.email}</div>
                            </div> 
                        </div>
                    </div>
                    <div style={{marginTop: "5px"}}>
                        <div style = {{display: "inline-block"}}>
                            <img className="ui avatar image" src={phoneIcon} alt="user" style = { {   
                            width: "32px",
                            marginLeft: "3px",
                            marginTop: "5px",
                            marginRight: "4px",
                            position: "absolute"
                            }} />
                            <div className="content" style = {{
                            display: "inline-block",
                            marginLeft: "50px"
                            }}>
                                <div style={{fontSize: "13px"}} className="header">Phone Number</div>
                                <div style={{fontSize: "18px"}}>{props.patient.cell}</div>
                            </div> 
                        </div>
                    </div>
                    <div style={{marginTop: "5px"}}>
                        <div style = {{display: "inline-block"}}>
                            <img className="ui avatar image" src={gender} alt="user" style = { {   
                            width: "35px",
                            marginLeft: "2px",
                            marginTop: "5px",
                            marginRight: "4px",
                            display: "inline-block",
                            padding: "1pt",
                            position: "absolute"
                            }} />
                            <div className="content" style = {{
                            display: "inline-block",
                            marginLeft: "50px"
                            }}>
                                <div className="header" style={{fontSize: "13px"}}>Gender</div>
                                <div style={{fontSize: "18px"}}>{props.patient.gender}</div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: "#F1F1F9"}}>    
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
            <button onClick={handleCloseAndPerscribe}
                class="btn btn-outline-primary"
                style = {{
                    marginRight:'10px',
                    borderRadius: "15px",
                    backgroundColor: '#90C2E7',
                    fontSize: '12pt',
                    color: "white",
                    borderColor: "#90C2E7"
                 }} 
                href="#"> <b>Prescribe</b>
            </button>  
        </Modal.Footer>
      </Modal>


    </div> 
  );
};

export default Med;
