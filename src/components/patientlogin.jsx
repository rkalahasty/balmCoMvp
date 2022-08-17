import {Modal} from "react-bootstrap"
import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import PatientSignup from "./patientsignup";
import {Link} from "react-router-dom";

function PatientLogin() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <button onClick={handleShow}
            class="btn btn-outline-primary"
            style = {{
                marginRight:'10px',
                backgroundColor: '#90C2E7',
                borderRadius: "10px",
                fontSize: '12pt',
                color: "white",
                borderColor: "#90C2E7",
                height: "45px",
                verticalAlign: "middle"
             }} 
            href="#"> <b>Patient</b>
        </button>  
      
      <Modal show={show} size="md" onHide={handleClose}>
        <Modal.Header closeButton>
          <h3>Patient Sign In</h3>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{
                  color: "black"

                }}
              >Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label style={{color: "black"}}
              >Password</Form.Label>
              <Form.Control 
                type="password"
                placeholder="*********"
                autoFocus
              />
            </Form.Group>
          </Form>

        <p>
            Don't have an account? Click the blue Sign Up Button. 
        </p>

        </Modal.Body>
        <Modal.Footer>
            <PatientSignup></PatientSignup>
        
            <button onClick={handleClose}
                class="btn btn-outline-primary"
                style = {{
                    marginRight:'10px',
                    color: 'black',
                    fontSize: '12pt',
                    borderColor: 'white',
                    borderRadius: '7px'
                 }} 
                href="#"> <b>Forgot Password</b>
            </button>  

            <Link to="/pdash">
           <button
                class="btn btn-outline-primary"
                style = {{
                    marginRight:'10px',
                    color: 'black',
                    fontSize: '12pt',
                    borderColor: 'black',
                    borderRadius: '7px'
                }} 
                href="#"> <b>Login</b>
            </button>  
            </Link>     
    

        </Modal.Footer>
      </Modal>

    </>
    );
}
export default PatientLogin