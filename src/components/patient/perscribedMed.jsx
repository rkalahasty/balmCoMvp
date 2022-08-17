import React, {useState} from "react";
import {Modal} from "react-bootstrap"

function PerscribedMed (props) {  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseAndBuy= () => {
    setShow(false);
    alert("Prescription Has Been Sent!");
}
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
      <button onClick={handleShow}
        class="btn btn-outline-primary"
        style = {{
          marginLeft: "665px",
          marginTop: "10px",
          borderRadius: "15px",
          backgroundColor: '#90C2E7',
          fontSize: '12pt',
          color: "white",
          borderColor: "#90C2E7" }} 
          href="#"> <b>Buy</b>
       </button> 

       <Modal show={show} size="lg" onHide={handleClose} id="perscription" style={{backgroundColor: "transparent" }}>
        <Modal.Header style={{backgroundColor: "#F1F1F9"}}> 
           <h3>Checkout</h3>
        </Modal.Header> 
        
        <Modal.Body style={{backgroundColor: "#F1F1F9", fontFamily: "Poppins"}}>
        <form>
          <div style={{marginTop: "7px", borderRadius: "7px", border: "2px solid #000000", padding: "10px", backgroundColor: "white"}}>
          <h5><b>1. Shipping Address</b></h5>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity"></input>
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <input type="text" class="form-control" id="inputCity"></input>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip"></input>
            </div>
          </div>
          </div>
          <div style={{marginTop: "20px", borderRadius: "7px", border: "2px solid #000000", padding: "10px", backgroundColor: "white"}}>
          <h5><b>2. Billing Information</b></h5>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">Card Number</label>
              <input type="text" class="form-control" id="inputCity"></input>
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">Expiration</label>
              <input type="text" class="form-control" id="inputCity"></input>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">CVC</label>
              <input type="text" class="form-control" id="inputZip"></input>
            </div>
          </div>
          {/* <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck"></input>
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck"></input>
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div> */}

          {/* <button type="submit" class="btn btn-primary">Sign in</button> */}
          </div>
          <div style={{marginTop: "20px", borderRadius: "7px", border: "2px solid #000000", padding: "10px", backgroundColor: "white"}}>
            <h5><b>3. Shipping Method</b></h5>

            <p style={{fontSize: "15px", marginTop: "20px", marginBottom:"0px"}}>USPS First-Class with Ice Pack Included at <b>$11.49</b></p>
            <b style={{fontSize: "13px", marginBottom: "15px"}}>PLEASE ALLOW 4-8 DAYS FOR YOUR PRESCRIPTION TO BE PROCESSED AND SHIPPED TO YOU.</b>
            <p style={{marginTop: "10px"}}>Please note that shipping times are not based on the time of payment of your prescription. Shipping times will take effect after your order has been processed and dispensed by the pharmacy.</p>
          </div>
          <div style={{marginTop: "20px", borderRadius: "7px", border: "2px solid #000000", padding: "10px", backgroundColor: "white"}}>
            <h5><b>Order Summary</b></h5>

            <div id="app">
              <div>
                <h3 style={{fontSize: "16px", display: "inline-block"}}>{props.formula}</h3>
                <h3 class="pull-right" style={{fontSize: "16px", display: "inline-block", marginRight: "30px"}}>
                  Price: {props.price}
                </h3>
              </div>
              <div>
                <h3 style={{fontSize: "16px", display: "inline-block"}}>USPS First-Class with Ice Pack Included</h3>
                <h3 class="pull-right" style={{fontSize: "16px", display: "inline-block", marginRight: "30px"}}>
                  Price: {"11.49$"}
                </h3>
              </div>
              <div>
                <h3 style={{fontSize: "16px", display: "inline-block"}}>Total</h3>
                <h3 class="pull-right" style={{fontSize: "16px", display: "inline-block", marginRight: "30px"}}>
                  Price: 60.49$
                </h3>
              </div>
              <div class="form-group" style={{marginLeft: "5px", paddingLeft: "15px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#fff5e7"}}>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                  <label class="form-check-label" for="gridCheck">
                    I agree to the Terms and Privacy Policy
                  </label>
                </div>
              </div>
              <div class="form-group" style={{marmarginLeft: "5px", paddingLeft: "15px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#fff5e7"}}>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                  <label class="form-check-label" for="gridCheck">
                    I understand and consent for my order to be dispensed by Foothills Professional Pharmacy. If necessary, I allow the pharmacy to transfer my perscription order from the current pharmacy. I ALSO UNDERSTAND THAT CHARGES ON MY CARD OR BANK WILL BE FROM _ PROFESSIONAL PHARMACY. 
                  </label>
                </div>
              </div>
            </div>

          </div>
        </form>        
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
                href="#"> <b>Cancel</b>
            </button>  
            <button onClick={handleCloseAndBuy}
                class="btn btn-outline-primary"
                style = {{
                    marginRight:'10px',
                    borderRadius: "15px",
                    backgroundColor: '#90C2E7',
                    fontSize: '12pt',
                    color: "white",
                    borderColor: "#90C2E7"
                 }} 
                href="#"> <b>Place Your Order</b>
            </button>  
        </Modal.Footer>
      </Modal>

      </div>
  );
};

export default PerscribedMed;
