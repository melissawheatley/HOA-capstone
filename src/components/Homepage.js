import React, { Component } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
// import {
//     Button,
//     Container,
//     Header,
//     Icon,
//     Responsive
//   } from 'semantic-ui-react'


export default class Homepage extends Component{


    render(){
        return(
                <div className="hero">
                    <h1 className="align-right ml-auto">Lenox Village Homeowners Association</h1>
                    <h2>A place for the Lenox Village community to come together online.</h2>
                </div>
        )
    }
}