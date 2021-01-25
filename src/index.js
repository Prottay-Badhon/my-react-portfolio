import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyRouter from ".././src/component/MyRouter"
import {Redirect} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import axios from "axios";
axios.defaults.baseURL="http://localhost:8000/api/";
axios.defaults.headers['Authorization']='Bearer '+localStorage.getItem("token");
var myRoute =(
    <MyRouter></MyRouter>

)
ReactDOM.render(myRoute,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
