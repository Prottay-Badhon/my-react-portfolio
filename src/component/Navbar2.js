import React, {Component} from 'react';
import Laptop from "../img/laptop.jpg";
import Iphone from "../img/iphone.jpg";
import desert from "../img/desert.jpg";

class Navbar2 extends Component {
    show=()=>{
        <img src={desert}/>
    }
    render() {
        return (
            <>
                <div className="">
                    <nav class="navbar navbar-expand-lg py-4 mx-5" style={{background: "white"}}>
                        <div className="navbar-brand font-weight-bold">
                            PORTFOLIO
                        </div>
                        <div className="ml-auto font-weight-bold">
                            <ul className="nav">
                                <li className="nav-item"><a href="#" className="nav-link" id="showPic1"
                                                            style={{color: "black"}}>All</a></li>
                                <li className="nav-item"><a href="#" className="nav-link" id="showPic2"
                                                            style={{color: "black"}}onClick={this.show}>Branding</a></li>
                                <li className="nav-item"><a href="#" className="nav-link" id="showPic3"
                                                            style={{color: "black"}}>Logo</a></li>
                                <li className="nav-item"><a href="#" className="nav-link" id="showPic4"
                                                            style={{color: "black"}}>UX/UI</a></li>
                                <li className="nav-item"><a href="#" className="nav-link" id="showPic5"
                                                            style={{color: "black"}}>Webdesign</a></li>


                            </ul>
                            <hr></hr>
                        </div>
                    </nav>

                </div>

                <div className="bg-light mt-5 py-5" id="">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7" id="pic1">
                                <img src={Laptop} id="" className="img-fluid"
                                     style={{height: "400px",width: "auto"}}/>
                            </div>

                            <div className="col-lg-5" id="pic2">
                                <img src={Iphone} id="" className="img-fluid"
                                     style={{height: "400px",width: "auto"}}/>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Navbar2;