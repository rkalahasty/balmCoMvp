import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PatientLogin from './patientlogin.jsx';
import PhysicianLogin from './doctorlogin.jsx';
import patient from './images/patient.png';
import doctor from './images/doctor.png'
import checkup from './images/checkup.png'
import pharmacy from './images/pharmacy.png'
import delivery from './images/delivery.png'
import { gray } from 'tailwindcss/colors';
import whiteCountour from './images/whiteCountour.png'
class Navbar extends Component {
    render() { 
        return (
            <><head> 
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"></link>
                <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous"></link>
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet"></link>
                <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"></link>
                <link rel="stylesheet" href="https://rawgit.com/creativetimofficial/material-kit/master/assets/css/material-kit.css"></link>
                <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            </head>

            <body class="landing-page ">
                        <nav class="navbar navbar-color-on-scroll navbar-transparent    fixed-top  navbar-expand-lg "  color-on-scroll="100"  id="sectionsNav">
                            <div class="container">
                                <div class="navbar-translate">
                                    <a class="navbar-brand" href="" style = {{
                                                fontSize: '17pt',
                                                color: "white"
                                            }} 
                                    target="_blank"> <b>BalmCo</b> </a>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                        <span class="navbar-toggler-icon"></span>
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                </div>
                                <div class="collapse navbar-collapse">
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item">
                                            <PhysicianLogin></PhysicianLogin>
                                        </li>
                                        <li class="dropdown nav-item">
                                            <PatientLogin></PatientLogin>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                <div class="page-header header-filter" data-parallax="true" style={{backgroundImage: "url('https://live.staticflickr.com/65535/52209276873_40aaf3d4d9_k.jpg')"}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10">
                                <h1 style = {{
                                        fontSize: '80px',
                                        fontFamily: 'Poppins'
                                    }} 
                                    class="title">Pain Medication: <i>Reimagined </i></h1>
                                <h4 style = {{
                                        fontSize: '25px',
                                        maxWidth: '800px'
                                    }} 
                                >BalmCo Is A Platform Dedicated To Revolutionizing The World Of Pain Medication By Increasing Access To Compounded Topical Medications For All</h4>
                                <div class="vertical-line"></div>
                                <button 
                                    class="btn btn-outline-primary" style = {{
                                        fontSize: '15px',
                                        marginRight:'10px',
                                        marginLeft: '10px',
                                        color: 'white',
                                        borderColor: '#90C2E7',
                                        backgroundColor: "#90C2E7",
                                        borderRadius: "10px"
                                    }} 
                                    href="#"> <b>Read More</b>
                                </button>                            
                            </div>
                        </div>
                    </div>
                </div>

                <div class="main main-raised" style={{backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundImage: "url('https://live.staticflickr.com/65535/52238087628_d3aa2d52d2_b.jpg')"}}>
                    <div class="container">
                        <div class="section text-center">
                            <div class="row">
                                <div class="col-md-8 ml-auto mr-auto">
                                    <h2 class="title" style={{fontSize: "43px",fontFamily: 'Poppins'}}>Why Choose <span style={{color: ""}}>Balm</span><span style={{color: "#"}}>Co</span>?</h2>
                                    <h5 class="description" style={{color: "black", fontSize: "20px", marginTop: "30px", marginBottom: "30px"}}>Balmco was created to provide patients around the US with affordable access to effective pain medications. </h5>
                                </div>
                            </div>
                
                            <div class="features">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="info" style={{backgroundColor: "white", marginTop: "25px", borderRadius: "5px", border: "1px solid #000000", padding: "10px", WebkitBoxShadow: "0 8px 6px -6px black", MozBoxShadow: "0 8px 6px -6px black", boxShadow: "0 8px 6px -6px black"}}>
                                            <div class="icon icon-info">
                                            <img
                                                src={patient} alt="user" style = {{marginLeft: 'auto', marginRight: 'auto',   
                                                width: "135px", marginTop: "10px"
                                                }} /> 
                                            </div>
                                            <h4 class="info-title" style={{color: "black", marginRight: "40px", marginLeft: "40px", fontSize: "21px", borderRadius: "10px", border: "1px solid #7C7FC4", backgroundColor: "#90C2E7", fontFamily: 'Poppins'}}>Patient Benefits</h4>
                                            <ul style={{listStyleType: "square", textAlign: "left", fontSize: "18px", fontFamily: 'Poppins'}}>
                                                <li>Fraction of the price of branded prescription pain medications</li>
                                                <li>Avoid the side effects of opioids and NSAIDS</li>
                                                <li>Avoid long-term increases on insurance premiums</li>
                                                <li>Shipped directly to your home for free</li>
                                            </ul>
                                        </div>
                                    </div>
                
                                    <div class="col-md-6">
                                        <div class="info" style={{backgroundColor: "white", marginTop: "25px", borderRadius: "5px", border: "1px solid #7C7FC4", padding: "10px", WebkitBoxShadow: "0 8px 6px -6px black", MozBoxShadow: "0 8px 6px -6px black", boxShadow: "0 8px 6px -6px black"}}>
                                            <div class="icon icon-success">
                                                <img
                                                    src={doctor} alt="user" style = {{marginLeft: 'auto', marginRight: 'auto',   
                                                    width: "140px", marginTop: "10px",
                                                    }} />                                            </div>
                                            <h4 class="info-title" style={{fontFamily: 'Poppins', color: "black", marginRight: "40px", marginLeft: "40px", fontSize: "21px", borderRadius: "10px", border: "1px solid #7C7FC4", backgroundColor: "#90C2E7"}}>Doctor Benefits</h4>
                                            <ul style={{listStyleType: "square", textAlign: "left", marginBottom: "12px", fontSize: "18px"}}>
                                                <li>Access to an easy-to-use platform for ordering compound pain medications</li>
                                                <li>No prior authorizations</li>
                                                <li>Access to customizable treatment options</li>
                                                <li>Decreased financial burden on healthcare system</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                        <div class="section text-center">
                        <h2 class="title" style={{fontFamily: 'Poppins'}}>How It Works</h2>
                        <div class="team">
                            <div class="row">
                                <div class="col-md-4">
                                <div class="team-player" style={{height: "450px", backgroundColor: "white", marginTop: "25px", borderRadius: "5px", border: "1px solid #000000", padding: "10px", WebkitBoxShadow: "0 8px 6px -6px black", MozBoxShadow: "0 8px 6px -6px black", boxShadow: "0 8px 6px -6px black"}}>
                                    <div class="card card-plain">
                                    <div class="col-md-6 ml-auto mr-auto">
                                    <img
                                                src={checkup} alt="user" style = {{marginLeft: 'auto', marginRight: 'auto', marginBottom: '15px',   
                                                width: "700px",
                                                }} />                     
                                    </div>
                                        <h4 class="card-title" style={{fontSize: "40px"}}>1
                                        </h4>
                                        <hr style={{height: "5px", width: "200px", marginLeft: "auto", marginRight: "auto", color: "#90C2E7"}}></hr>
                                    <div class="card-body">
                                        <p class="card-description" style={{fontSize: "16px", color: "black", fontFamily: 'Poppins'}}>First, your doctor will evaluate you in the doctors office.</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div class="col-md-4">
                                <div class="team-player" style={{height: "450px", backgroundColor: "white", marginTop: "25px", borderRadius: "5px", border: "1px solid #000000", padding: "10px", WebkitBoxShadow: "0 8px 6px -6px black", MozBoxShadow: "0 8px 6px -6px black", boxShadow: "0 8px 6px -6px black"}}>
                                    <div class="card card-plain" style={{marginBottom: "6px"}}>
                                    <div class="col-md-6 ml-auto mr-auto">
                                        <img
                                                src={pharmacy} alt="user" style = {{marginLeft: 'auto', marginRight: 'auto', marginBottom: '15px',   
                                                width: "1000px",
                                                }} />                     
                    
                                    </div>
                                        <h4 class="card-title" style={{fontSize: "40px"}}>2
                                        </h4>
                                        <hr style={{height: "5px", width: "200px", marginLeft: "auto", marginRight: "auto", color: "#90C2E7"}}></hr>
                                    <div class="card-body">
                                    <p class="card-description" style={{fontSize: "16px", color: "black", fontFamily: 'Poppins'}}>Your doctor will then select a specific compounded topical pain medication on BalmCo suited to your needs. </p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                    
                                <div class="col-md-4">
                                <div class="team-player" style={{height: "450px", backgroundColor: "white", marginTop: "25px", borderRadius: "5px", border: "1px solid #000000", padding: "10px", WebkitBoxShadow: "0 8px 6px -6px black", MozBoxShadow: "0 8px 6px -6px black", boxShadow: "0 8px 6px -6px black"}}>
                                    <div class="card card-plain" style={{marginBottom: "6px"}}>
                                    <div class="col-md-6 ml-auto mr-auto">
                                        <img
                                                src={delivery} alt="user" style = {{marginLeft: 'auto', marginRight: 'auto', marginBottom: '15px',   
                                                width: "1000px",
                                                }} />                     
                                    </div>
                                        <h4 class="card-title" style={{fontSize: "40px"}}>3
                                        </h4>
                                        <hr style={{height: "5px", width: "200px", marginLeft: "auto", marginRight: "auto", color: "#90C2E7"}}></hr>
                                    <div class="card-body">
                                        <p class="card-description" style={{fontSize: "16px", color: "black", fontFamily: 'Poppins'}}> An email will be sent asking you to provide billing and shipping information, and your medication will be delivered directly to you. </p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="section section-contacts">
                            <div class="row">
                                <div class="col-md-8 ml-auto mr-auto">
                                    <h2 class="text-center title" style={{fontFamily: 'Poppins'}}>Ask Us A Question</h2>
                                    <h4 class="text-center description" style={{color: "black", fontSize: "20px", marginBottom: "40px"}}>Feel free to contact us with any questions or concerns using the form below. </h4>
                                    <form class="contact-form">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating" style={{color: "black"}}>Your Name</label>
                                                    <input type="email" class="form-control"></input>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating" style={{color: "black"}} >Your Email</label>
                                                    <input type="email" class="form-control"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleMessage" class="bmd-label-floating" style={{color: "black"}}>Your Message</label>
                                            <textarea type="email" class="form-control" rows="4" id="exampleMessage" style={{color: "black"}}></textarea>
                                        </div>
                
                                        <div class="row">
                                            <div class="col-md-4 ml-auto mr-auto text-center">
                                                <button class="btn btn-primary btn-raised" style={{backgroundColor: "#90C2E7"}}>
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
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
    }
}
 
export default Navbar;