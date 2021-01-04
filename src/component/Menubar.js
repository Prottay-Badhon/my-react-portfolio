import React, {Component} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Link, NavLink} from "react-router-dom";
class Menubar extends Component {
    render() {
        return (
            <div>
                <div className="fixed-top">

                    <nav class="navbar navbar-expand-lg py-4" style={{background: "white"}}>
                        <div className="container-fluid">
                            <a className="navbar-brand font-weight-bold">
                                PORTFOLIO
                            </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent">
                                <span class="navbar-toggler-icon"><i className="fa fa-bars"></i></span>
                            </button>
                            <div className="font-weight-bold collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">

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
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Pages
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="#">Blog</a>
                                            <a className="dropdown-item" href="#">Blog Details</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Elements</a>
                                            <a className="dropdown-item" href="#">Portfolio Design</a>

                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/contact" exact className="nav-link" activeStyle={{color: "Orange"}} style={{color: "black"}}>
                                            Contact
                                        </NavLink>
                                    </li>
                                    <li className="nav-item"><a href="#" className="btn btn-danger">Get free Consultant</a>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>

            </div>
        );
    }
}

export default Menubar;
