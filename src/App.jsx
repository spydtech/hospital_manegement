import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/home/Home";
import Login from "./components/pages/Login/login";
import SignUp from "./components/pages/signUp/signUp";
import BookAppointment from "./components/BookAppointment"
import ReportsMasters from "./components/admin/reports&Masters/ReportsMasters";
import Master from "./components/admin/master/Master";
import Patient from "./components/admin/patient/Patient";
// import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sing_up" element={<SignUp />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
        <Route path="/reportsmasters" element={<ReportsMasters />} />
        <Route path="/masters" element={<Master />} />
        <Route path="/patient" element={<Patient />} />
      </Routes>
    </Router>
  );
}

export default App;