import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import Menubar from "./Menubar";
import MyRouter from "./MyRouter";
import CarouselSection from "./CarouselSection";
import Faq from "./Faq";
import CardSection from "./CardSection";
import Navbar2 from "./Navbar2";
import NavAnimation from "./NavAnimation";
import ContactMe from "./ContactMe";
import FeedBack from "./FeedBack";
import Footer from "./Footer";

class HomeLayout extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Menubar></Menubar>
                    <MyRouter></MyRouter>
                </BrowserRouter>
                <CarouselSection></CarouselSection>
                <Faq></Faq>
                <CardSection></CardSection>
                <Navbar2></Navbar2>

                <ContactMe></ContactMe>
                <FeedBack></FeedBack>
                <Footer></Footer>
            </>
        );
    }
}

export default HomeLayout;