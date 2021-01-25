import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
class Profile extends Component {
    
 
      
      
   
    render() {
       let name;
       let email;
        if(this.props.user){
            name=this.props.user.name;
            email=this.props.user.email;

        }
        if(!localStorage.getItem('token')){
            return <Redirect to={'/login'}/>
            
        }
        return (
            <>
                <div className="container">
                    <div className="row" style={{marginTop:"100px"}}>
                        <div className="col-lg-12 col-md-12 border py-5 bg-light">
                            <h2 className="">Profile</h2>
                            <p className="">
                                <li className="">Name:{name}</li>
                                <li className="">Email:{email}</li>
                               
                            </p>
                        </div>
                    </div>

                </div>
            </>
        );
       
       
       
    }
}

export default Profile;