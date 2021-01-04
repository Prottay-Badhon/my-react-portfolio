import React from 'react'
import ReactPlayer from "react-player";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../Video/ResponsiveVideoPlayer.css"
import  vdo2 from "../../img/face/Metro Admin Template - Metro UI Style Bootstrap Admin Template - Google Chrome 2020-10-30 03-01-20.mp4"
import Footer from "../Footer";
function ResponsiveVideoPlayer(){
        return(

              <>
                <div className="container" id="VideoSection">
                    <div className="row align-items-center mt-5">
                        <div className="col-lg-10">
                            <div className="player-wrapper">
                                <ReactPlayer className="react-player"
                                             url={vdo2}
                                             width="100%"
                                             height="100%"
                                             controls={true}
                                />
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="card py-5 align-items-center">
                                <div className="card-title">
                                    <h3>User Dashboard (Demo Video)</h3>
                                </div>
                                <div className="card-body pb-5">
                                    Here User can add category and brands of items.
                                    He/she also can add product price and details information and also can
                                    manage the order of specific users.
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row align-items-center mt-5">
                        <div className="col-lg-10">
                            <div className="player-wrapper">
                                <ReactPlayer className="react-player"
                                             url={vdo2}
                                             width="100%"
                                             height="100%"
                                             controls={true}
                                />
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="card py-5">
                               <div className="card-title">
                                   <h3>Admin Dashboard (Demo Video)</h3>
                               </div>
                                <div className="card-body pb-5">
                                   Here admin can add category and brands of items.
                                    He/she also can add product price and details information and also can
                                    manage the order of specific users.
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                  <Footer></Footer>
             </>
        )
}

export default ResponsiveVideoPlayer