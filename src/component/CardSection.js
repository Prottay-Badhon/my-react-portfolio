import React, {Component} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Face1 from"../../src/img/face/face1.jpg"
import Face2 from"../../src/img/face/face2.jpg"
import Face3 from"../../src/img/face/face3.jpg"


class CardSection extends Component {
    render() {
        return (
            <>
                <div className="" id="CardSection">
                    <div className="container">
                        <div className="row text-center" style={{color: "navy"}}>
                            <div className="col-lg-4 ">
                                <div className="card py-5">
                                    <img src={Face1} alt="" className="img-fluid rounded-circle mx-auto"
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
                                    <img src={Face2} alt="" className="img-fluid mx-auto rounded-circle"
                                         style={{height: "100px",width: "100px"}}/>

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
                                    <img src={Face3} alt="" className="img-fluid mx-auto rounded-circle"
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
            </>
        );
    }
}

export default CardSection;