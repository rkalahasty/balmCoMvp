import React from "react";
import ps from "../images/ps.png"
import reset from '../images/reset.png'
import pastorders from '../images/pastorders.png'
import profile from '../images/profile.png'
class PatientNav extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    cell: "",
  };

  // add = (e) => {
  //   e.preventDefault();
  //   if (this.state.firstName === "" || this.state.lastName === "" || this.state.email === "" || this.state.gender === "" || this.state.cell === "") {
  //     alert("ALl the fields are mandatory!");
  //     return;
  //   }
  //   this.props.addPatientHandler(this.state);
  //   this.setState({ firstName: "", lastName: "", gender: "", email: "", cell: ""});
  // };

  render() {
    return (
      <><link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
      
      <div className="patientnav" style={{ borderRadius: "5px", display: "inline-block", backgroundColor: "transparent"}}>
        
        <div>
            <img className="navIcon" src={ps} alt="user"></img>
            <button className="navbutton">
                Perscriptions
            </button>
        </div>
        <div>            
            <img className="navIcon" src={reset} alt="user" style={{padding: "5px"}}></img>
            <button className="navbutton">
                Auto Refills
            </button>
        </div>
        <div>
            <img className="navIcon" src={pastorders} alt="user"></img>
            <button className="navbutton">
                Past Orders
            </button>
        </div>
        <div>
            <img className="navIcon" src={profile} alt="user" style={{padding: "5px"}}></img>
            <button className="navbutton">
                Profile
            </button>
        </div>
      </div>
      </>
    );
  }
}

export default PatientNav;
