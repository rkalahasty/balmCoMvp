import {Modal, Button} from "react-bootstrap"
import React, {useState, Component } from 'react';
import { render } from "@testing-library/react";
import Form from 'react-bootstrap/Form';

function PatientSignup() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submitHandler = (event) => {
      event.preventDefault();
      console.log('submit button is working');
    }

    return (
        <>
        <button onClick={handleShow}
            class="btn btn-outline-primary"
            style = {{
              marginRight:'auto',
              borderRadius: "15px",
              backgroundColor: '#7C7FC4',
              fontSize: '12pt',
              color: "white",
              borderColor: "#7C7FC4"
             }} 

            href="#"> <b>Signup</b>
        </button>  
      
      <Modal show={show} size="md" onHide={handleClose}>
        <Modal.Header closeButton>
          <h3>Patient Signup</h3>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{
                  color: "black"

                }}
              >First Name:</Form.Label>
              <Form.Control
                type="name"
                placeholder="John"
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput2"
            >
              <Form.Label style={{color: "black"}}
              >Last Name:</Form.Label>
              <Form.Control
                type="name"
                placeholder="Doe"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label style={{
                  color: "black"

                }}
              >Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@domain.com"
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput4"
            >
              <Form.Label style={{color: "black"}}
              >Password:</Form.Label>
              <Form.Control
                type="name"
                placeholder="*********"
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput5"
            >
              <Form.Label style={{color: "black"}}
              >Confirm Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="*********"
                autoFocus
              />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>

           <button onClick={handleClose}
                class="btn btn-outline-primary"
                style = {{
                    marginRight:'10px',
                    color: 'black',
                    fontSize: '12pt',
                    borderColor: 'black',
                    borderRadius: '7px'
                }} 
                href="#"> <b>Submit</b>
            </button>  
    

        </Modal.Footer>
      </Modal>

    </>    );
}
export default PatientSignup