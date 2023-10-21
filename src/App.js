import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import { Home } from "./component/Home";
import { ToastContainer } from "react-toastify";
import { Footer } from "./component/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <ToastContainer/>   
      <Navbar />         
      <Routes>        
        <Route path="/" element={<Home />} />                               
      </Routes>
      <Footer />   
    </>
  );
}

export default App;
