import React, {Component} from 'react';
import ".././App.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Footer from "../component/Footer";
class Portfolio extends Component {
    render() {
        return (
            <>

                <div className="" id="BadhonKhan">
                    <div className="row align-items-center" style={{height: "500px"}}>
                        <div className="col-lg-12 text-light ">
                            <h2 className="px-5 font-italic" style={{fontSize: "60px"}}>Portfolio</h2>
                            <div className="m-xl-5" style={{color: "orange"}}>
                                <a href="" style={{color: "orange"}} className="">Home</a> / <a href=""
                                                                                                style={{color: "orange"}}
                                                                                                className="">Contact</a>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer></Footer>
            </>
        );
    }
}

export default Portfolio;