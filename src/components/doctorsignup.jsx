import {Modal, Button} from "react-bootstrap"
import React, {useState, Component } from 'react';
import { render } from "@testing-library/react";
import Form from 'react-bootstrap/Form';
import axios from 'axios';



function PhysicianSignup() {

    const registerUrl = 'https://e9bwvoqwal.execute-api.us-east-1.amazonaws.com/prod/register';

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[message, setMessage] = useState(null);

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[phoneNumber, setPhoneNumber] = useState('');
    const[credentials, setCredentials] = useState('');
    const[practiceName, setPracticeName] = useState('');
    const[practiceAddressLine, setPracticeAddressLine] = useState('');
    const[practiceCity, setPracticeCity] = useState('');
    const[practiceState, setPracticeState] = useState('');
    const[practiceZipCode, setPracticeZipCode] = useState('');
    const[npi, setNPI] = useState('');
    const[medicalLicenseState, setMedicalLicenseState] = useState('');
    const[licenseNumber, setlicenseNumber] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setconfirmPassword] = useState('');

    const submitHandler = (event) => {
      console.log("submit handler has been called")
      event.preventDefault();
      if (firstName.trim() === "" || lastName.trim() === "" ||email.trim() === "" ||phoneNumber.trim() === "" 
      ||credentials.trim() === "" ||practiceName.trim() === "" ||practiceAddressLine.trim() === "" || practiceCity.trim() === "" 
      ||practiceCity.trim() === "" ||practiceState.trim() === "" ||practiceZipCode.trim() === "" || npi.trim() === "" ||
      medicalLicenseState.trim() === "" || licenseNumber.trim() === "" || password.trim() === "" || confirmPassword.trim() === "" 
      ) {
        setMessage('All fields are required')
        return;
      }

      const requestConfig = {
        headers : {
          'x-api-key': 'm3k9HHiAkM1rki0pDhS4W5hCMtYnMMew9nAr0SWg'
        }
      }

      const requestBody = {
        firstname: firstName,
        lastname: lastName,
        username: email,
        phoneNumber: phoneNumber,
        credentials: credentials,
        practiceName: practiceName,
        practiceAddressLine: practiceAddressLine,
        practiceCity: practiceCity,
        practiceState: practiceState,
        practiceZipCode: practiceZipCode,
        npi: npi,
        medicalLicenseState: medicalLicenseState,
        licenseNumber: licenseNumber,
        password: password
      
      }

      axios.post(registerUrl, requestBody, requestConfig).then(response => {
        setMessage('Registeration Successful');
      }).catch(error => {
        if (error.response.status === 401) {
          setMessage(error.response.data.message);
        } else {
          setMessage(error.response.status + 'sorry....the backend server is down!! please try again later');
        }
      })
    }


    return (
        <>
        <button onClick={handleShow}
            class="btn btn-outline-primary"
            style = {{
                marginRight:'auto',
                borderRadius: "15px",
                backgroundColor: '#E85F5C',
                fontSize: '12pt',
                color: "white",
                borderColor: "#E85F5C"
             }} 

            href="#"> <b>Signup</b>
        </button>  
      
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <h3>Physician Signup</h3>
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
                value={firstName}
                onChange= {event => setFirstName(event.target.value)}
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
                value={lastName}
                onChange= {event => setLastName(event.target.value)}
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput3"
            >
              <Form.Label style={{color: "black"}}
              >Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@domain.com"
                value={email}
                onChange= {event => setEmail(event.target.value)}
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput4"
            >
              <Form.Label style={{color: "black"}}
              >Phone Number</Form.Label>
              <Form.Control
                type="phonenumber"
                placeholder="999-999-9999"
                value={phoneNumber}
                onChange= {event => setPhoneNumber(event.target.value)}
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput5"
            >
              <Form.Label style={{color: "black"}}
              >Credentials:</Form.Label>
              <Form.Control
                type="credentials"
                placeholder="MD/DO/NP/PA/DPM"
                value={credentials}
                onChange= {event => setCredentials(event.target.value)}
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput6"
            >
              <Form.Label style={{color: "black"}}
              >Practice Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Practice Name"
                value={practiceName}
                onChange= {event => setPracticeName(event.target.value)}
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput7"
            >
              <Form.Label style={{color: "black"}}
              >Practice Address Line: </Form.Label>
              <Form.Control
                type="credentials"
                placeholder="Practice Address Line"
                value={practiceAddressLine}
                onChange= {event => setPracticeAddressLine(event.target.value)}
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput8"
            >
              <Form.Label style={{color: "black"}}
              >Practice City: </Form.Label>
              <Form.Control
                type="credentials"
                placeholder="Practice City"
                value={practiceCity}
                onChange= {event => setPracticeCity(event.target.value)}
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput9"
            >
              <Form.Label style={{color: "black"}}
              >Practice State: </Form.Label>
              <Form.Control
                type="credentials"
                placeholder="Practice State"
                value={practiceState}
                onChange= {event => setPracticeState(event.target.value)}
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput10"
            >
              <Form.Label style={{color: "black"}}
              >Practice Zip Code: </Form.Label>
              <Form.Control
                type=" Zip Code"
                placeholder="Practice Zip Code"
                value={practiceZipCode}
                onChange= {event => setPracticeZipCode(event.target.value)}
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput11"
            >
              <Form.Label style={{color: "black"}}
              >NPI Number: </Form.Label>
              <Form.Control
                type="NPI Number"
                placeholder="NPI Number"
                value={npi}
                onChange= {event => setNPI(event.target.value)}
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput12"
            >
              <Form.Label style={{color: "black"}}
              >Medical License State: </Form.Label>
              <Form.Control
                type="Medical License State"
                placeholder="Medical License State"
                value={medicalLicenseState}
                onChange= {event => setMedicalLicenseState(event.target.value)}
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput13"
            >
              <Form.Label style={{color: "black"}}
              >License Number: </Form.Label>
              <Form.Control
                type="License Number"
                placeholder="License Number"
                value={licenseNumber}
                onChange= {event => setlicenseNumber(event.target.value)}
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput14"
            >
              <Form.Label style={{color: "black"}}
              >Password: </Form.Label>
              <Form.Control
                type="Password"
                placeholder="Password"
                value={password}
                onChange= {event => setPassword(event.target.value)}
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput14"
            >
              <Form.Label style={{color: "black"}}
              >Password: </Form.Label>
              <Form.Control
                type="Confirm Password:"
                placeholder="Password"
                value={confirmPassword}
                onChange= {event => setconfirmPassword(event.target.value)}
                autoFocus
              />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>

           <button onClick={submitHandler}
                class="btn btn-outline-primary"
                style = {{
                    marginRight:'10px',
                    color: 'black',
                    fontSize: '12pt',
                    borderColor: 'black',
                    borderRadius: '7px'
                }} 
                href="#"> <b>Register</b>
            </button>  

            {message && <p className="message">{message}</p>}
    

        </Modal.Footer>
      </Modal>

    </>
    );
}
export default PhysicianSignup