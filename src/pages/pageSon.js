import React from 'react';
import { Component } from "react";
import ReactGA from 'react-ga';
function initialGA(){
    ReactGA.initialize('G-L3LS3WXYD2');
    ReactGA.pageview('test');
}

class Defi extends Component {

    componentDidMount() {
        initialGA();
    }

    render(){
        return (
            <div>
                Page SON
            </div>
        );
    }
    
}

export default Defi;