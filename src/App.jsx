import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/home/Home";
import Login from "./components/pages/Login/login";
import SignUp from "./components/pages/signUp/signUp";
import BookAppointment from "./components/BookAppointment"
// import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sing_up" element={<SignUp />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
      </Routes>
    </Router>
  );
}

export default App;