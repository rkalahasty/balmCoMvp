
import React from "react";
import PatientBox from "./patientBox"
import {Link } from "react-router-dom";
import { black } from "tailwindcss/colors";

const DoctorDashboard = (props) => {
    
  return (

 
    <><head> 
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"></link>
    <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous"></link>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet"></link>
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"></link>
    <link rel="stylesgeet" href="https://rawgit.com/creativetimofficial/material-kit/master/assets/css/material-kit.css"></link>
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
    </head>

    <body class="landing-page ">
            <nav class="navbar navbar-color-on-scrol fixed-top  navbar-expand-lg "  color-on-scroll="100"  id="sectionsNav" style={{backgroundColor: "#F7F8F9"}}>
                    <div class="container" style={{ minWidth: "70%"}}>
                        <div class="navbar-translate">
                            <Link to="/" style={{color: "black"}}>
                            <a class="navbar-brand" href="" style = {{
                                        fontSize: '17pt',
                                    }} 
                            target="/"> <b>Doctor Dashboard</b> </a> </Link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                                <span class="navbar-toggler-icon"></span>
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div class="collapse navbar-collapse">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item">
                                    <button
                                            class="btn btn-outline-primary"
                                            style = {{
                                                marginRight:'10px',
                                                borderRadius: "15px",
                                                backgroundColor: '#90C2E7',
                                                fontSize: '12pt',
                                                color: "white",
                                                borderColor: "#90C2E7"
                                            }} 
                                            href="#"> <b>Product List</b>
                                    </button> 
                                 </li>
                                <li class="nav-item">
                                    <button
                                        class="btn btn-outline-primary"
                                        style = {{
                                            marginRight:'auto',
                                            borderRadius: "15px",
                                            backgroundColor: '#90C2E7',
                                            fontSize: '12pt',
                                            color: "white",
                                            borderColor: "#90C2E7"
                                        }} 
                                            href="#"> <b>Patient Handout</b>
                                    </button> 
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                    <div class = "back" style={{minWidth: "60%", backgroundColor: "#F7F8F9"}}>
                        <div>
                            <br/><br/><br/><br/><br/><br/>
                            <PatientBox></PatientBox>
                        </div>
                    </div>
        <footer class="footer text-center ">
            <p>Roivant BalmCo MVP V1 Build</p>
        </footer>
        
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js" integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U" crossOrigin="anonymous"></script>
            <script src="https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js" integrity="sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9" crossorigin="anonymous"></script>


        </body>
      </>        
  );
};
export default DoctorDashboard;