import React, {Component} from 'react';
import Footer from "../component/Footer";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Face1 from"../../src/img/face/face1.jpg"
import Face2 from"../../src/img/face/face2.jpg"
import Face3 from"../../src/img/face/face3.jpg"
import DemoNavbar from "../component/DemoNavbar";
 import {NavLink} from "react-router-dom";
import "../App.css"
import angular from "../img/Services/angular.png"
import react from "../img/Services/react.png"
import vue from "../img/Services/vue.png"
import html from "../img/Services/html.png"
import laravel from "../img/Services/laravel.png"
import htmlCss from "../img/Services/htmlCss.png"
import django from "../img/Services/django.jpg"
import php from "../img/Services/php.png"
import nodeJs from "../img/Services/nodeJs.png"


class Service extends Component {
    render() {
        return (
            <>
                <div className="bg-dark">
                    <div className="row align-items-center" style={{height: "500px"}}>
                        <div className="col-lg-12 text-light ">
                            <h2 className="px-5 font-italic" style={{fontSize: "60px"}}>Our Services</h2>
                        </div>
                    </div>

                </div>


                <div className="ServiceCard" id="CardSection">
                    <div className="container">
                        <div className="row text-center mt-5" style={{color: "navy"}}>
                            <div className="col-lg-3 ">
                                <div className="card py-5">
                                    <img src={htmlCss} alt="" className="img-fluid  mx-auto"
                                         style={{height: "100px",width: "100px"}}/>


                                    <div className="card-body">
                                        <div className="card-title">
                                            <h2 className="">UX/UI Design</h2>
                                        </div>
                                        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            Esse nisi delectus possimus, reiciendis temporibus dicta corrupti,
                                            voluptatibus </p>
                                        <NavLink exact to="/ui_design" className="btn btn-outline-primary">Click Here</NavLink>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="card py-5 ">
                                    <img src={laravel} alt="" className="img-fluid  mx-auto"
                                         style={{height: "100px",width: "100px"}}/>
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h2 className="">Laravel</h2>
                                        </div>
                                        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            Esse nisi delectus possimus, reiciendis temporibus dicta corrupti,
                                            voluptatibus </p>
                                        <NavLink exact to="/laravel-project" className="btn btn-outline-primary">Click Here</NavLink>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="card py-5">
                                    <img src={react} alt="" className="img-fluid rounded-circle mx-auto"
                                         style={{height: "100px",width: "100px"}}/>


                                    <div className="card-body">
                                        <div className="card-title">
                                            <h2 className="">React Js</h2>
                                        </div>
                                        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            Esse nisi delectus possimus, reiciendis temporibus dicta corrupti,
                                            voluptatibus </p>
                                        <NavLink exact to="/react-project" className="btn btn-outline-primary">Click Here</NavLink>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card py-5">
                                    <img src={angular} alt="" className="img-fluid rounded-circle mx-auto"
                                         style={{height: "100px",width: "100px"}}/>
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h2 className="">Angular Js</h2>
                                        </div>
                                        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            Esse nisi delectus possimus, reiciendis temporibus dicta corrupti,
                                            voluptatibus </p>
                                        <NavLink exact to="/angular-project" className="btn btn-outline-primary">Click Here</NavLink>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4 mb-5">
                            <div className="col-lg-3">
                                <div className="card py-5">
                                    <img src={vue} alt="" className="img-fluid rounded-circle mx-auto"
                                         style={{height: "100px",width: "100px"}}/>


                                    <div className="card-body">
                                        <div className="card-title">
                                            <h2 className="">Vue Js</h2>
                                        </div>
                                        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            Esse nisi delectus possimus, reiciendis temporibus dicta corrupti,
                                            voluptatibus </p>
                                        <NavLink exact to="/vue-project" className="btn btn-outline-primary">Click Here</NavLink>

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 ">
                                <div className="card py-5">
                                    <img src={nodeJs} alt="" className="img-fluid rounded-circle mx-auto"
                                         style={{height: "100px",width: "100px"}}/>
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h2 className="">Node Js</h2>
                                        </div>
                                        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            Esse nisi delectus possimus, reiciendis temporibus dicta corrupti,
                                            voluptatibus </p>
                                        <NavLink exact to="/nodeJs-project" className="btn btn-outline-primary">Click Here</NavLink>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 ">
                                <div className="card py-5">
                                    <img src={django} alt="" className="img-fluid rounded-circle mx-auto"
                                         style={{height: "100px",width: "100px"}}/>
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h2 className="">Django</h2>
                                        </div>
                                        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            Esse nisi delectus possimus, reiciendis temporibus dicta corrupti,
                                            voluptatibus </p>
                                        <NavLink exact to="/django-project" className="btn btn-outline-primary">Click Here</NavLink>

                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 ">
                                <div className="card py-5">
                                    <img src={php} alt="" className="img-fluid rounded-circle mx-auto"
                                         style={{height: "100px",width: "100px"}}/>
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h2 className="">PHP</h2>
                                        </div>
                                        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            Esse nisi delectus possimus, reiciendis temporibus dicta corrupti,
                                            voluptatibus </p>
                                        <NavLink exact to="/php-project" className="btn btn-outline-primary">Click Here</NavLink>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </>
        );
    }
}

export default Service;