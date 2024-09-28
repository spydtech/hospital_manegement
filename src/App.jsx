import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/home/Home";
import Login from "./components/pages/login/Login";
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
import PatientApointment from "./components/admin/consultation/patientAppointment/PatientApointment";
import HealthCareServiceUnit from "./components/admin/facility_Management/healthCareServiceUnit/HealthCareServiceUnit";
import AppointmentType from "./components/admin/consultationSetup/appointmentType/AppointmentType"
import NewAppointmentType from "./components/admin/consultationSetup/appointmentType/NewAppointmentType"
import EditAppointmentType from "./components/admin/consultationSetup/appointmentType/EditAppointmentType"
function App() {
  return (
    <BrowserRouter>
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
        <Route path="/appointment-type" element={<AppointmentType />} />
        <Route path="/new-appointment-type" element={<NewAppointmentType />} />
        <Route path="/edit-appointment-type/:id" element={<EditAppointmentType />} />


        <Route path="/consultation" element={<Consultation />} />
        <Route path="/patient-appointment" element={<PatientApointment />} />



        <Route path="/facility-management" element={<FacilityManagement />} />
        <Route path="/healthcare-service-unit-type" element={<HealthCareServiceUnit />} />
      



      </Routes>
    </BrowserRouter>
  );
}

export default App;