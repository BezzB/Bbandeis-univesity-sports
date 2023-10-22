import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import { Home } from "./component/Home";
import { ToastContainer } from "react-toastify";
import Facilities from "./component/Facilities"; 

import 'bootstrap/dist/css/bootstrap.min.css';
import Programs from "./component/Programs";
import Events from "./component/Events";
import Membership from "./component/Membership";
import ContactUs from "./component/ContactUsPage";
import AboutUs from "./AboutUs";


function App() {
  return (
    <>
    <ToastContainer/>   
      <Navbar />         
      <Routes>        
        <Route path="/" element={<Home />} /> 
        <Route path="/facilities" element={<Facilities />} /> 
        <Route path="/programs" element={<Programs />} />   
        <Route path="/events" element={<Events />} />
        <Route path="/membership" element={<Membership />} />  
        <Route path="/contactus" element={<ContactUs />} /> 
        <Route path="/aboutus" element={<AboutUs />} />                              
      </Routes>     
    </>
  );
}

export default App;
