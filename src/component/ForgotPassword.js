import React, {Component} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
class ForgotPassword extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row" style={{marginTop:"100px"}}>
                        <div className="col-lg-12 col-md-12 border py-5 bg-light">
                            <h2 className="text-center">Forget Password</h2>
                            <form action=""  className="">
                                <div className="form-group">
                                    <label htmlFor="" className="">Email</label>
                                    <input type="email" className="form-control" placeholder="Enter email"/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="form-control btn btn-success" value="Submit"/>
                                </div>
                            </form>
                            </div>
                    </div>
                </div>


            </>
        );
    }
}

export default ForgotPassword;