import React, {Component} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
class Faq extends Component {
    render() {
        return (
            <>
                <div className="bg-light" style={{marginTop: "0px"}} id="Faq">
                    <div className="py-3 container">
                        <div className="row py-5 px-4 align-items-center">
                            <div className="col-lg-6 p-5">
                                <h2 className="">Designing With Passion While Exploring The World.</h2>

                                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                                        officia fuga voluptates. Obcaecati assumenda in expedita neque incidunt modi,
                                        dolorum iste aperiam ipsa consequuntur debitis dolores voluptatem rem similique
                                        ex.</p>

                                    <p>Lorem ipsum, dolor sit amet.</p>

                            </div>
                            <div className="col-lg-6 p-5">
                                <h2 className="">Any Type Of Query& Discussion.</h2>

                                    <h2 className="">Lets Talk With ME</h2>

                                        <a href="" className="">Prottay Badhon </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Faq;