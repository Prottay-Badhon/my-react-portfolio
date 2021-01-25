import React, {Component} from 'react';
import Menubar from "../component/Menubar";
import CarouselSection from "../component/CarouselSection";
import Faq from "../component/Faq";
import CardSection from "../component/CardSection";
import Navbar2 from "../component/Navbar2";
import NavAnimation from "../component/NavAnimation";
import ContactMe from "../component/ContactMe";
import FeedBack from "../component/FeedBack";
import Footer from "../component/Footer";
import DemoCarousel from "../component/DemoCarousel";
import DemoNavbar from "../component/DemoNavbar"
class Home extends Component {
    render() {
        return (
            <>
                <DemoNavbar></DemoNavbar>
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

export default Home;