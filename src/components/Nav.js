import React, {Component} from 'react';
// import './Header.css';
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavLink
    } from 'reactstrap';


class Nav extends Component {
       state = {
          isOpen: false
        };
    
    toggleNavbar = () => {
    this.setState({
        isOpen: !this.state.isOpen
    });
    }


    render(){
        return(
            <div>
            <Navbar expand="md" className="topNav">
              <div className="header-logo">Lenox Living</div>
              <button type="button" className="navbar-toggler" onClick={this.toggleNavbar} ><i className="fas fa-bars"></i></button>


              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#">About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Resources</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Login</NavLink>
                  </NavItem> 
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
    }

}

export default Nav;
