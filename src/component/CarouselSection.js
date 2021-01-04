import React, {Component} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Desert from"../../src/img/desert.jpg"
import "../App.css"
import {Receiver} from "./MyContext";
import Bridge from "./Bridge";
class CarouselSection extends Component {

    render() {
        return (
            <>
               <div className="row mb-0 align-items-center" id="imageDiv" >
                   <div className="carousel" id="middle_section">
                       <div className="carousel-item active">
                           <img src={Desert} className="img-fluid"/>
                           <div className="carousel-caption mb-5 pb-5">
                               <div className="row" >
                                   <div className="col-lg-6">
                                       <h1 className="">Road To Success</h1>
                                       <p className="">Lorem, ipsum dolor sit, amet consectetur adipisicing elit.
                                           Laudantium quos explicabo sed corporis temporibus tenetur tempora nulla unde
                                           officia fugit..</p>
                                       <a href="" className="btn btn-outline-primary btn-lg">Learn More</a>
                                       <a href="" className="btn btn-outline-success btn-lg">Hire Me</a>

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

export default CarouselSection;