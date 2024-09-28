import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/pages/login/Login";
import SignUp from "./components/pages/signUp/signUp";
import BookAppointment from "./components/BookAppointment"
import ReportsMasters from "./components/admin/reports&Masters/ReportsMasters";
import Master from "./components/admin/master/Master";
import Patient from "./components/admin/master/patient/Patient";
import HealthcarePractitioner from "./components/admin/master/healthcarePractitioner/HealthcarePractitioner"
import NewPractitionerSchedule from "./components/admin/master/healthcarePractitioner/NewPractitionerSchedule"
import EditPractitionerSchedule from "./components/admin/master/healthcarePractitioner/EditPractitionerSchedule"
import Practitioner from "./components/admin/master/practitionerSchedule/PractitionerSchedule";

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
        <Route path="/patient" element={<Patient />} />
        <Route path="/HealthcarePractitioner" element={<HealthcarePractitioner />} />
        <Route path="/newpractitioner-schedule" element={<NewPractitionerSchedule />} />
        <Route path="/editPractitioner-schedule" element={<EditPractitionerSchedule />} />
        <Route path="/practitioner-schedule" element={<Practitioner />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
