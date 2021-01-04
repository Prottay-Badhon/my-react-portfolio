import React, {Component} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
class ContactMe extends Component {
    render() {
        return (
            <>
                <div className="bg-warning">
                    <div className="container">
                        <div className="row align-items-center justify-content-between" style={{height: "400px"}}>
                            <div className="col-lg-8">
                                <h2 className="">Don't forget to contact with me</h2>
                            </div>
                            <div className="col-lg-4">
                                <a href="" className="btn btn-danger">Contact</a>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default ContactMe;