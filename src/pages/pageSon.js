import React from 'react';
import { Component } from "react";
import ReactGA from 'react-ga';
ReactGA.initialize('G-L3LS3WXYD2');
  

class Defi extends Component {

    componentDidMount() {
        ReactGA.pageview(window.location.pathname + window.location.search);

        ReactGA.event({
            category: 'page son',
            action: 'hayır butonu tıklantı ',
            value: 1
        });
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