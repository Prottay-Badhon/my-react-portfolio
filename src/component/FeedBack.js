import React, {Component} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
class FeedBack extends Component {
    render() {
        return (
            <>
                <div className="bg-primary">
                    <div className="container">
                        <div className="row align-items-center" style={{height: "600px"}}>
                            <div className="col-lg-7 text-light">
                                <h2 className="">If Not Now, When? Let’s Work Together!</h2>
                                <p className="">Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et
                                    dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra.</p>
                                <h2 className="text-center">Badhon</h2>
                            </div>

                            <div className="col-lg-5">
                                <form action="" className="">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Full Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Email Address"/>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" placeholder="Your Message"
                                                  rows="5"></textarea>
                                    </div>
                                   <div className="form-group">
                                       <button type="submit" className="form-control bg-danger text-light  py-4 pb-5 align-items-center"
                                               style={{cursor: "pointer"}}>Send Message
                                       </button>
                                   </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default FeedBack;