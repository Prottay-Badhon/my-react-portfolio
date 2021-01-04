import React, {Component} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../css/ContactPage.css"
import river from "../img/river (1).jpg"
import Desert from "../img/desert.jpg"

import Footer from "../component/Footer";
class Contact extends Component {
    render() {
        return (
            <>
                    <section id="home-section">
                        <div className="dark-overlay">
                            <div className="home-inner">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h1 className="display-5">Contact with me via face-book
                                                ,email or number and follow my Github account </h1>
                                            <div className="d-flex flex-row mt-5">
                                                <div className="p-4 align-self-start mt-2">
                                                    <a href="https://www.facebook.com/prottay.badhon" target="_blank"><i className="fa fa-facebook btn-light"></i></a>
                                                </div>
                                                <div className="align-self-end p-4">
                                                    <p className="lead">
                                                        <a href="https://www.facebook.com/prottay.badhon" target="_blank">This is my facebook id</a>
                                                    </p>
                                                </div>
                                            </div>


                                            <div className="d-flex flex-row">
                                                <div className="p-4 align-self-start mt-2">
                                                    <a href="" target="_blank" className=""><i className="fa fa-github btn-light"></i></a>
                                                </div>
                                                <div className="align-self-end p-4">
                                                    <p className="lead">
                                                        <a href="https://github.com/Prottay-Badhon" target="_blank">Follow My github Account</a>
                                                    </p>
                                                </div>
                                            </div>


                                            <div className="d-flex flex-row">
                                                <div className="p-4 align-self-start mt-2">
                                                    <a href="https://www.youtube.com/channel/UCXtSbxtbz7aeFiNZuHHXIQg" className="" target="_blank"><i className="fa fa-youtube-play btn-light"></i></a>
                                                </div>
                                                <div className="align-self-end p-4">
                                                    <p className="lead">
                                                        <a href="https://www.youtube.com/channel/UCXtSbxtbz7aeFiNZuHHXIQg" className="" target="_blank">This is my youtube channel</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card bg-primary mt-5">
                                                <div className="card-body">
                                                    <h3 className="text-center">Sign Up Today</h3>
                                                    <p className="text-center">Please fill up all field of the form to
                                                        register</p>
                                                    <form id="regFrom" action="" className="form-group">
                                                        <input className="form-control p-4 mt-2" type="text"
                                                                placeholder="user name"/>

                                                            <input className="form-control p-4 mt-2" type="email"
                                                                   placeholder="email"/>

                                                                <input className="form-control p-4 mt-2" type="password"
                                                                       placeholder="password"/>

                                                                    <input className="form-control p-4 mt-2"
                                                                           type="password"
                                                                           placeholder="confirm password"/>

                                                                        <input type="submit"
                                                                               className="btn btn-outline-light form-control border p-2 py-1 mt-2"
                                                                               value="Submit"/>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                <Footer></Footer>
            </>
        );
    }
}

export default Contact;