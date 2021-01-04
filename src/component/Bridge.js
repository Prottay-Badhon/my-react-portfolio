import React, {Component} from 'react';
import {Receiver} from "./MyContext";

class Bridge extends Component {
    render() {
        return (
            <>
                <Receiver>
                    {
                        msg=>{
                            return <h2>{ msg }</h2>;
                        }
                    }
                </Receiver>
            </>
        );
    }
}

export default Bridge;