import React, {Component} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import slide1 from "../../src/img/slide1.jpg"
import slide2 from "../../src/img/slide2.jpg"
import slide3 from "../../src/img/slide3.jpg"
import desert from "../../src/img/desert.jpg"
import CarouselSection from "./CarouselSection";
import {Sender} from "./MyContext";

class DemoCarousel extends Component {
    render() {
        return (
            <>

                    <CarouselSection></CarouselSection>

            </>
        );
    }
}

export default DemoCarousel;