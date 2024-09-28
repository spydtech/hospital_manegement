import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/pages/login/Login";
import SignUp from "./components/pages/signUp/SignUp";
import BookAppointment from "./components/BookAppointment"
import ReportsMasters from "./components/admin/reports&Masters/ReportsMasters";
import MedicalDapartment from "./components/admin/master/medicalDapartment/MedicalDapartment"
import Master from "./components/admin/master/Master";
import Patient from "./components/admin/master/patient/Patient";
import HealthcarePractitioner from "./components/admin/master/healthcarePractitioner/HealthcarePractitioner"
import NewPractitionerSchedule from "./components/admin/master/healthcarePractitioner/NewPractitionerSchedule"
import EditPractitionerSchedule from "./components/admin/master/healthcarePractitioner/EditPractitionerSchedule"
import Practitioner from "./components/admin/master/practitionerSchedule/PractitionerSchedule";
import Consultation from "./components/admin/consultation/Consultation";
import PatientAppointment from "./components/admin/consultation/patientAppointment/PatientApointment";
import ConsultationSetup from "./components/admin/consultationSetup/ConsultationSetup";
import AppointmentType from "./components/admin/consultationSetup/appointmentType/AppointmentType";
import NewAppointmentType from "./components/admin/consultationSetup/appointmentType/NewAppointmentType";
import EditAppointmentType from "./components/admin/consultationSetup/appointmentType/EditAppointmentType";
import FacilityManagement from "./components/admin/facility_Management/FacilityManagement";
import HealthCareServiceUnit from "./components/admin/facility_Management/healthCareServiceUnit/HealthCareServiceUnit";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sing_up" element={<SignUp />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
        <Route path="/reportsmasters" element={<ReportsMasters />} />
        <Route path="/masters" element={<Master />} />
        <Route path="/medical-department" element={<MedicalDapartment />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/HealthcarePractitioner" element={<HealthcarePractitioner />} />
        <Route path="/newpractitioner-schedule" element={<NewPractitionerSchedule />} />
        <Route path="/editPractitioner-schedule" element={<EditPractitionerSchedule />} />
        <Route path="/practitioner-schedule" element={<Practitioner />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/patient-appointment" element={<PatientAppointment />} />
        <Route path="/consultation-setup" element={<ConsultationSetup />} />
        <Route path="/appointment-type" element={<AppointmentType />} />
        <Route path="/new-appointment-type" element={<NewAppointmentType />} />
        <Route path="/edit-appointment-type/${index}" element={<EditAppointmentType />} />
        <Route path="/facility-management" element={<FacilityManagement />} />
        <Route path="/healthcare-service-unit-type" element={<HealthCareServiceUnit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
