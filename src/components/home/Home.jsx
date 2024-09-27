import React from "react";
import Navbar from "./Navbar";
import LocalSpecialists from "./LocalSpecialists";
import BestTreatmentSteps from "./BestTreatmentSteps";
import AboutUs from "./AboutUs";
import Services from "./Services";
import HealthCareProfessionals from "./HealthCareProfessionals";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <Navbar />
      <LocalSpecialists />
      <BestTreatmentSteps />
      <AboutUs />
      <Services />
      <HealthCareProfessionals />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
