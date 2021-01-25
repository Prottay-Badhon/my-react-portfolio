import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/LoginCss.css';
import {NavLink,Redirect} from "react-router-dom";
import axios from 'axios';
class Login extends Component {
    constructor() {
        super();
        this.state={
            email:'',
            password:'',
        }

    }
    onChangeHandeler=(event)=>{
       var inputName = event.target.name;
       var inputValue =  event.target.value;
       this.setState({[inputName]:inputValue});


    }
    formSubmit=(event)=>{
        event.preventDefault();
        const data={
            email: this.state.email,
            password:this.state.password,
            
        }
        axios.post('login', data)
            .then( (response)=> {

                localStorage.setItem('token',response.data.Token);//token stored in localstorage
                this.setState({
                    loggedIn:true
                });
                this.props.setUser(response.data.User);
            })

            .catch( (error)=> {
                console.log(error);
                
            });
    }

    render() {
        if(localStorage.getItem('token')){
               return <Redirect to="/profile"/>
           }
        return (
            <>
                <div className="container">
                <div className="row" style={{marginTop:"100px"}}>
                        <div className="col-lg-6 col-md-12 border py-5 bg-light">
                            <h2 className="text-center">Login Account </h2>
                            <form onSubmit={this.formSubmit}  className="">
                                <div className="form-group">
                                    <label htmlFor=""  style={{textAlign:"none"}} className="">Email: { this.state.email}</label>
                                    <input type="email" name="email" required onChange={this.onChangeHandeler} className="form-control" placeholder="Enter email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Password</label>
                                    <input type="password" name="password" required onChange={this.onChangeHandeler} className="form-control" placeholder="Enter password"/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="form-control btn btn-success" value="login"/>
                                </div>
                                
                                <div className="form-group">
                                        <NavLink to="/forgetPassword" exact className="nav-link" activeStyle={{color: "Orange"}} >
                                            Forgot Password?
                                        </NavLink>
                                        <NavLink to="/register" exact className="nav-link" activeStyle={{color: "Orange"}} >
                                            Not register yet?
                                        </NavLink>

                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 col-md-12 align-self-center">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="input-group input-group-lg">
                                        <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fa fa-google"></i>
                                  </span>
                                            <a href="" className="btn btn-danger">login with google</a>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="input-group input-group-lg">
                                        <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fa fa-facebook"></i>
                                  </span>
                                            <a href="" className="btn btn-primary">login with Facebook</a>
                                        </div>

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

export default Login;