import React, {Component} from 'react';
import "../../../node_modules/./bootstrap/dist/css/bootstrap.min.css"
import  laptop from "../../img/laptop.jpg"
import  newsportal1 from "../../img/Services/newsportal1.png"
import  newsportal2 from "../../img/Services/newsportal2.png"
import  newsportal3 from "../../img/Services/newsportal3.png"

import  newsportal4 from "../../img/Services/newsportal4.png"
import  newsportal5 from "../../img/Services/newsportal5.png"
import Footer from "../../component/Footer";
class UiDesignGallery extends Component {
    render() {
        return (
            <>
                <div className="bg-light" style={{paddingTop: "7rem"}}>
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h4 className="">Here Is the Github Link Of This Project</h4>
                    <br/>
                        <a href="https://prottay-badhon.github.io/NewsportalDesign/" className="btn btn-success">NewsPortal-Link</a>

                    </div>
                </div>
            <div className="row mt-5">
                <div className="col-lg-12">
                    <h2>Font Page</h2>
                    <img src={newsportal1} alt="" className="img-fluid"/>
                </div>

                <div className="col-lg-12 mt-5">
                    <h2>Middle Side</h2>
                    <img src={newsportal2} alt="" className="img-fluid"/>
                </div>

                <div className="col-lg-12 mt-5">
                    <h2>News Section</h2>
                    <img src={newsportal3} alt="" className="img-fluid"/>
                </div>
                <div className="col-lg-12 mt-5 mb-5">
                    <h2>Footer</h2>
                    <img src={newsportal4} alt="" className="img-fluid"/>
                </div>
            </div>
              </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <h4 className="">Here Is the Github Link Of Mizuxe-Bootstrap Project</h4>
                            <a href="https://prottay-badhon.github.io/Mizuxe/" target="_blank" className="btn btn-success">Mizuxe-Link</a>

                        </div>
                    </div>
                    <div className="row mt-5 py-5">
                        <div className="col-lg-12">
                            <h4 className="">Here Is the Github Link Of LoopLab-Bootstrap Project</h4>
                            <a href="https://prottay-badhon.github.io/Glozzom/" target="_blank" className="btn btn-success">LoopLab-Link</a>

                        </div>
                    </div>
                </div>
                <Footer></Footer>

            </>
        );
    }
}

export default UiDesignGallery;