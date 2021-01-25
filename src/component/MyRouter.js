import React, {Component} from 'react';
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import UiDesignGallery from "../pages/Project/UiDesignGallery";
import ReactProject from "../pages/Project/ReactProject";
import LaravelProject from "../pages/Project/LaravelProject";
import PhpProject from "../pages/Project/PHP_Project";
import NodeJsProject from "../pages/Project/NodeJsProject";
import AngularProject from "../pages/Project/AngularProject";
import DjangoProject from "../pages/Project/DjangoProject";
import VueProject from "../pages/Project/VueProject";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import Profile from "./Profile";
import ResetPassword from "./ResetPassword";
import Setu from "./Setu"
import axios from "axios"
import {NavLink,Redirect} from "react-router-dom";
import DemoNavbar from "./DemoNavbar";
import {BrowserRouter} from "react-router-dom";
class MyRouter extends Component {
   
    constructor(){
        super();
        this.state={
           user:{}
        }   
    }

    componentDidMount(){
        axios.get('user')
        .then((response)=>{
            this.setUser(response.data);
           
        })
        .catch((error)=>{
            console.log(error);
        })
        
    }
    
      setUser=(person)=>{
            this.setState({user:person})
      }      
         
           
          
    render() {
       
        return (
            <>
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/service" component={Service}></Route>
                <Route exact path="/portfolio" component={Portfolio}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route exact path="/ui_design" component={UiDesignGallery}></Route>
                <Route exact path="/react-project" component={ReactProject}></Route>
                <Route exact path="/laravel-project" component={LaravelProject}></Route>
                <Route exact path="/php-project" component={PhpProject}></Route>
                <Route exact path="/nodeJs-project" component={NodeJsProject}></Route>
                <Route exact path="/angular-project" component={AngularProject}></Route>
                <Route exact path="/vue-project" component={VueProject}></Route>
                <Route exact path="/django-project" component={DjangoProject}></Route>
                <Route exact path="/login" component={()=><Login user={this.state.user} setUser={this.setUser}/>}></Route>
                <Route exact path="/register" component={()=><Register user={this.state.user} setUser={this.setUser}/>}></Route>
                <Route exact path="/forgetPassword" component={ForgotPassword}></Route>
                <Route exact path="/profile" component={()=><Profile user={this.state.user} setUser={this.setUser}/>}></Route>
                <Route exact path="/resetPassword" component={ResetPassword}></Route>

                <Route component={PageNotFound}></Route>

            </Switch>
            <DemoNavbar user={this.state.user} setUser={this.setUser}></DemoNavbar>
            </BrowserRouter>
            </>
        );
    }
}

export default MyRouter;