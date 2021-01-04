import React, {Component} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../App.css"
import {NavLink} from "react-router-dom";
import {Sender} from "./MyContext";
import CarouselSection from "./CarouselSection";
import Bridge from "./Bridge";
class DemoNavbar extends Component {
    constructor() {
        super();
        this.state={
           Open : false,
           Name:"Badhon"
        }
    }

    displaySideBar=(bad)=> {
      this.setState({Open:bad})
    }

    render() {
        return (
            <>

                <div id="Demo" className="fixed-top mb-0">
                    <nav className="">
                        <div>
                            <a className="navbar-brand">React Portfolio</a>
                        </div>

                            <ul className="nav-links" style={{ transform: this.state.Open ? "translateX(0px)" : ""}}>

                                <li className="nav-item">
                                    <NavLink to="/" exact className="nav-link" activeStyle={{color: "Orange"}} style={{color: "black"}}>
                                        Home
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/about" exact className="nav-link" activeStyle={{color: "Orange"}} style={{color: "black"}}>
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/service" exact className="nav-link" activeStyle={{color: "Orange"}} style={{color: "black"}}>
                                        Service
                                    </NavLink>
                                </li>



                                <li className="nav-item">
                                    <NavLink to="/portfolio" exact className="nav-link" activeStyle={{color: "Orange"}} style={{color: "black"}}>
                                        Portfolio
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/contact" exact className="nav-link" activeStyle={{color: "Orange"}} style={{color: "black"}}>
                                        Contact
                                    </NavLink>
                                </li>

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