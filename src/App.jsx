import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/home/Home";
import Login from "./components/pages/Login/login";
import SignUp from "./components/pages/signUp/signUp";
import BookAppointment from "./components/BookAppointment"
import ReportsMasters from "./components/admin/reports&Masters/ReportsMasters";
import Master from "./components/admin/master/Master";
import Patient from "./components/admin/master/patient/Patient";
import HealthcarePractitioner from "./components/admin/master/healthcarePractitioner/HealthcarePractitioner"
import NewPractitionerSchedule from "./components/admin/master/healthcarePractitioner/NewPractitionerSchedule"
import EditPractitionerSchedule from "./components/admin/master/healthcarePractitioner/EditPractitionerSchedule"
// import "./App.css";
import Practitioner from "./components/admin/master/practitionerSchedule/PractitionerSchedule"
import MedicalDapartment from "./components/admin/master/medicalDapartment/MedicalDapartment";
import ConsultationSetup from "./components/admin/consultationSetup/ConsultationSetup";
import Consultation from "./components/admin/consultation/Consultation";
import FacilityManagement from "./components/admin/facility_Management/FacilityManagement";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sing_up" element={<SignUp />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
        <Route path="/reports-masters" element={<ReportsMasters />} />
        <Route path="/masters" element={<Master />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/healthcare-practitioner" element={<HealthcarePractitioner />} />
        <Route path="/newpractitioner-schedule" element={<NewPractitionerSchedule />} />
        <Route path="/editPractitioner-schedule" element={<EditPractitionerSchedule />} />
        <Route path="/practitioner-schedule" element={<Practitioner />} />
        <Route path="/medical-department" element={<MedicalDapartment />} />






        <Route path="/consultation-setup" element={<ConsultationSetup />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/facility-management" element={<FacilityManagement />} />
      



      </Routes>
    </Router>
  );
}

export default App;