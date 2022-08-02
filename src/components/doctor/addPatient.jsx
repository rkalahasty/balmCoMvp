import React from "react";

class AddPatient extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    cell: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.firstName === "" || this.state.lastName === "" || this.state.email === "" || this.state.gender === "" || this.state.cell === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addPatientHandler(this.state);
    this.setState({ firstName: "", lastName: "", gender: "", email: "", cell: ""});
  };

  render() {
    return (
      <><link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link><div className="patientbox" style={{ borderRadius: "5px", display: "inline-block", backgroundColor: "white", WebkitBoxShadow: "0 7px 4px -6px black" }}>
        <div>
        <h2 stlye={{fontFamily: "Poppins"}}> Add Patient</h2>
        <form className="ui form" onSubmit={this.add}>

          <div className="field">
            {/* <div class="verticalLine" style={{display: "inline"}}></div> */}
            <div style={{ display: "inline-block" }}>
              <label>First Name</label>
              <div><input
                type="text"
                name="First Name"
                placeholder=" John"
                value={this.state.firstName}
                style={{
                  borderRadius: '5px',
                  border: '.8px solid #000000',
                  marginLeft: "0px"
                }}
                onChange={(e) => this.setState({ firstName: e.target.value })} /></div>
            </div>
          </div>

          <div className="field" style={{ marginTop: "5px" }}>
            {/* <div class="verticalLine" style={{display: "inline"}}></div> */}
            <div style={{ display: "inline-block" }}>
              <div>
                <label>Last Name</label>
                <div><input
                  type="text"
                  name=" Last Name"
                  placeholder=" Doe"
                  value={this.state.lastName}
                  style={{
                    borderRadius: '5px',
                    border: '.8px solid #000000',
                    marginLeft: "0px"
                  }}
                  onChange={(e) => this.setState({ lastName: e.target.value })} /></div>
              </div>
            </div>
          </div>

          <div className="field" style={{ marginTop: "5px" }}>
            {/* <div class="verticalLine" style={{display: "inline"}}></div> */}
            <div style={{ display: "inline-block" }}><label>Gender</label>
              <div><input
                type="text"
                name="Gender"
                placeholder=" Male"
                value={this.state.gender}
                style={{
                  borderRadius: '5px',
                  border: '.8px solid #000000',
                  marginLeft: "0px"
                }}
                onChange={(e) => this.setState({ gender: e.target.value })} /></div></div>
          </div>
          <div className="field" style={{ marginTop: "5px" }}>
            <label>Email</label>
            <div><input
              type="text"
              name="email"
              placeholder="john@gmail.com"
              value={this.state.email}
              style={{
                borderRadius: '5px',
                border: '.8px solid #000000',
              }}
              onChange={(e) => this.setState({ email: e.target.value })} /></div>
          </div>
          <div className="field" style={{ marginTop: "5px" }}>
            <label>Cell Phone</label>
            <div><input
              type="text"
              name="Cell Phone"
              width="auto"
              placeholder="888-888-888"
              value={this.state.cell}
              style={{
                borderRadius: '5px',
                border: '.8px solid #000000',
              }}
              onChange={(e) => this.setState({ cell: e.target.value })} /></div>
          </div>
          <button className="addButton" style={{ backgroundColor: '#90C2E7' }}
          >  Add  </button>
        </form>
      </div>
      </div>
      </>
    );
  }
}

export default AddPatient;
