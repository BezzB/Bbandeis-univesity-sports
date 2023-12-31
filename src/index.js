import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; 
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./index.css";
import { Provider } from "react-redux";
import store from "./component/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <BrowserRouter>
    <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
    
);


