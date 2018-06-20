import React, { Component } from 'react';
import {
    Nav,
    NavItem,
    NavLink
    } from 'reactstrap';

export default SidebarNav class extends Component{
    render(){
        return(
            <Nav className="navbar-sidenav" id="sidebar">
                <NavItem>
                    <NavLink href='/maintenance'>Requests</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/homeowners'>Homeowner Info</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/contacts'>Contacts</NavLink>
                </NavItem>
            </Nav>   
        )
    }
}