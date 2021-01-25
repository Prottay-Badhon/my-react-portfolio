import React, {Component} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../App.css"
import {NavLink, Redirect} from "react-router-dom";
import {Sender} from "./MyContext";
import CarouselSection from "./CarouselSection";
import Bridge from "./Bridge";
import axios from "axios";
import MyRouter from "./MyRouter";
import Setu from "./Setu";
import App from "../App";

class DemoNavbar extends Component {
    constructor() {
        super();
        this.state={
           Open : false,
           
        }
    }

    displaySideBar=(bad)=> {
      this.setState({Open:bad})
    }
    
    logout=()=>{
        localStorage.clear();
        this.props.setUser(null);
    }
   
        
    render() {
      
        let button;
        let profile;
        let register;
      if(localStorage.getItem('token')){
        
          button=(
                  <li className="nav-item">
                   <NavLink to="/"  onClick={this.logout} exact className="nav-link" activeStyle={{color: "Orange"}} >
                                        logout
                    </NavLink>
                    </li>
          )
          profile=(
                  <li className="nav-item">
                    <NavLink to="/profile" exact className="nav-link" activeStyle={{color: "Orange"}} >
                                        profile
                    </NavLink>
                    </li>
          )
      }
      else{
        button=(
                 <li className="nav-item">
                 <NavLink to="/login" exact className="nav-link" activeStyle={{color: "Orange"}} >
                                      login
                  </NavLink>
                  </li>
        )
        register=(
                 <li className="nav-item">
                 <NavLink to="/register" exact className="nav-link" activeStyle={{color: "Orange"}} >
                                      Register
                  </NavLink>
                  </li>
        )
      }
       
        return (
            <>

                <div id="Demo" className="fixed-top">
                    <nav className="" setPerson={this.setPerson}>
                        <div>
                          <a className="navbar-brand">Portfolio</a>
                        </div>

                            <ul className="nav-links" style={{ transform: this.state.Open ? "translateX(0px)" : ""}}>

                                <li className="nav-item">
                                    <NavLink to="/" exact className="nav-link" activeStyle={{color: "Orange"}}>
                                        Home
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/about" exact className="nav-link" activeStyle={{color: "Orange"}}>
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/service" exact className="nav-link" activeStyle={{color: "Orange"}}>
                                        Service
                                    </NavLink>
                                </li>



                                <li className="nav-item">
                                    <NavLink to="/portfolio" exact className="nav-link" activeStyle={{color: "Orange"}}>
                                        Portfolio
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/contact" exact className="nav-link" activeStyle={{color: "Orange"}} >
                                        Contact
                                    </NavLink>
                                </li>

                                
                                   {button}
                                
                                
                                    {register}
                              

                                
                                    {profile}
                             

                                <li className="nav-item"><a href="#" className="btn btn-danger">Get free Consultant</a>
                                </li>


                            </ul>
                       <i className="fa fa-bars" onClick={ ()=> this.displaySideBar(!this.state.Open)}></i>
                    </nav>
                </div>
            </>
        );
    }
}

export default DemoNavbar;