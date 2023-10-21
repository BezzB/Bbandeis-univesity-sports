import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import { Home } from "./component/Home";
import { Products } from "./component/Products";
import { Product } from "./component/Product";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
import { Footer } from "./component/Footer"
import { ToastContainer } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <ToastContainer/>   
      <Navbar />         
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />  
        <Route path="/checkout" element={<Checkout />} />                         
      </Routes>
      <Footer />
   
    </>
  );
}

export default App;
