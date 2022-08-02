import {Modal, Button} from "react-bootstrap"
import React, {useState, Component } from 'react';
import { render } from "@testing-library/react";
import Form from 'react-bootstrap/Form';
import PhysicianSignup from "./doctorsignup";
import {Link } from "react-router-dom";

function PhysicianLogin() {

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
                fontSize: '12pt',
                color: "white",
                borderColor: "#90C2E7",
                borderRadius: "10px",
                height: "45px",
                verticalAlign: "middle",
              }} 
            href="#"> <b>Physician</b>
        </button>  
      
      <Modal show={show} size="md" onHide={handleClose} style={{borderRadius: "100px"}}>
        <Modal.Header closeButton>
        <h3>Physician Sign In</h3>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <h6>Email Address</h6>
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
              <h6>Password</h6>
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

            <PhysicianSignup></PhysicianSignup>
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
            
           <Link to="/ddash">
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

    </>    );
}
export default PhysicianLogin