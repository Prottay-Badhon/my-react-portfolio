import React, {Component} from 'react';
import Iphone from "../../src/img/iphone.jpg"
import Laptop from "../../src/img/laptop.jpg"

class NavAnimation extends Component {
    render() {
        return (
            <>
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

export default NavAnimation;