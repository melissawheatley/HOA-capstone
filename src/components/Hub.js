import React, { Component } from 'react';
import './NavFooter.css';
import SidebarNav from './SidebarNav';

export default class Hub extends Component{

    render(){
        
        return(
            <div>
            <SidebarNav />
                <div className="hub-content">
                    <h3>Hello, {this.props.user.name}!</h3>
                    <p>You are now logged in. Once logged in, this is where all of the good stuff will show up.</p>
                </div>
            </div>
        )
    }
}