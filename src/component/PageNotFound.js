import React, {Component} from 'react';
import Redirect from "react-router-dom/es/Redirect";

class PageNotFound extends Component {
    render() {
        return (
            <>
                <Redirect to="/"></Redirect>
            </>
        );
    }
}

export default PageNotFound;