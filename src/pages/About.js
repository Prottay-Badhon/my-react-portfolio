import React, {Component} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Menubar from "../component/Menubar";
import FeedBack from "../component/FeedBack"
import Footer from "../component/Footer";
import Face1 from"../../src/img/face/face1.jpg"
import Face2 from"../../src/img/face/face2.jpg"
import Face3 from"../../src/img/face/face3.jpg"
import Me from"../../src/img/Me/Me.JPG"

class About extends Component {
    render() {
        return (
            <>
                <div className="bg-dark" id="about">
                    <div className="row align-items-center" style={{height: "500px"}}>
                        <div className="col-lg-12 text-light ">
                            <h2 className="px-5 font-italic" style={{fontSize: "60px"}}>About Me</h2>
                            <div className="m-xl-5" style={{color: "orange"}}>
                                <a href="" style={{color: "orange"}} className="">Home</a> / <a href=""
                                                                                            style={{color: "orange"}}
                                                                                            className="">Contact</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="bg-light">
                    <div className="py-3 container">
                        <div className="row py-5 px-4 align-items-center">
                            <div className="col-lg-6 p-5">
                                <img src={Me} alt="" className="img-fluid"/>
                            </div>
                            <div className="col-lg-6 p-5">
                                <h1 className="font-italic">I Create Products Not Just Art.</h1>
                                <br></br>
                                    <p className="">Unlimited rewards. enjoy attractive discounts flexible Payme options
                                        global usage. Unlimited rewards. enjoy attracti exible ayment options global
                                        usage.</p>
                                    <br></br>
                                        <a href="" className="">Prottay Badhon </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="" id="CardSection">
                    <div className="container">
                        <div className="row text-center mb-5" style={{color: "navy"}}>
                            <div className="col-lg-4 ">
                                <div className="card py-5">
                                    <img src={Face2} alt="" className="img-fluid rounded-circle mx-auto"
                                         style={{height: "100px",width: "100px"}}/>
                                        <div className="card-title">
                                            <h2 className="">UX/UI Design</h2>
                                        </div>

                                        <div className="card-body">
                                            <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                Esse nisi delectus possimus, reiciendis temporibus dicta corrupti,
                                                voluptatibus </p>

                                        </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="card py-5">
                                    <img src={Face3} alt="" className="img-fluid mx-auto rounded-circle"
                                         style={{height: "100px",width: "120px"}}/>

                                        <div className="card-title">
                                            <h2 className="">Web Development</h2>
                                        </div>

                                        <div className="card-body">
                                            <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                Esse nisi delectus possimus, reiciendis temporibus dicta corrupti,
                                                voluptatibus </p>
                                        </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="card py-5">
                                    <img src={Face1} alt="" className="img-fluid mx-auto rounded-circle"
                                         style={{height: "100px",width: "100px"}}/>
                                        <div className="card-title">
                                            <h2 className="">Digital Marketing </h2>
                                        </div>

                                        <div className="card-body">
                                            <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                Esse nisi delectus possimus, reiciendis temporibus dicta corrupti,
                                                voluptatibus </p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <FeedBack></FeedBack>
                <Footer></Footer>


            </>
        );
    }
}

export default About;