import './App.css';
import Navbar from './components/navbar.jsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DoctorDashboard from './components/doctor/doctorDashboard.jsx';
import PatientDashboard from './components/patient/patientDashboard.jsx'

function App() {
  return (
    <>
      <Router>
      <Routes>
          <Route exact path='/' element={<Navbar />} />
          <Route path='/ddash' element={<DoctorDashboard />} />
          <Route path='/pdash' element={<PatientDashboard />} />
          <Route path='/perscription' element={<DoctorDashboard />} />
      </Routes>
      </Router>
    </>
  );
}
export default App;
