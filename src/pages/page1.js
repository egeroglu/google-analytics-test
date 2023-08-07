import React from 'react';
import { Component } from "react";
import ReactGA from 'react-ga';
ReactGA.initialize('G-RKFYNTHXE4');

class Defi extends Component {
    componentDidMount() {
        ReactGA.pageview(window.location.pathname + window.location.search);

        ReactGA.event({
            category: 'page1',
            action: 'evet butonu tıklantı',
            value: 1
        });
    }

    render(){
        return (
            <div>
                Page 1
            </div>
        );
    }
    
}

export default Defi;