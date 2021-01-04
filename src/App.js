import logo from './logo.svg';
import './App.css';
import Menubar from "./component/Menubar";
import MyRouter from "./component/MyRouter";
import DemoNavbar from "./component/DemoNavbar";
import React from "react";
import {BrowserRouter} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <DemoNavbar></DemoNavbar>
            <MyRouter></MyRouter>
        </BrowserRouter>

    </div>
  );
}

export default App;
