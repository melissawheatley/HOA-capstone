import React, { Component } from 'react';

export default class AuthSuccess extends Component{
    render(){
        return(
            <div>
                <h3>Hello, {this.props.user.name}!</h3>
                <p>You are now logged in. Once logged in, this is where all of the good stuff will show up.</p>
            </div>
        )
    }
}