import React, {Component} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
class ResetPassword extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row" style={{marginTop:"100px"}}>
                        <div className="col-lg-6 col-md-12 border py-5 bg-light">
                            <h2 className="text-center">Reset Password</h2>
                            <form action=""  className="">
                                <div className="form-group">
                                    <label htmlFor="" className="">PIN CODE</label>
                                    <input type="number" className="form-control" placeholder="Enter PIN CODE"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="">Email</label>
                                    <input type="email" className="form-control" placeholder="Enter email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Confirm Password</label>
                                    <input type="password" className="form-control" placeholder="Confirm password"/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="form-control btn btn-success" value="Reset"/>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ResetPassword;