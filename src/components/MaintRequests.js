import React, { Component } from 'react';
import SidebarNav from './SidebarNav';
import Tickets from './Tickets';
import { Link } from 'react-router-dom';


export default class Requests extends Component {

    state = {
        authed: false,
        user: {}
    }
 
    componentDidMount(){
        const stored = sessionStorage.getItem('user');
        if(stored){
            console.log('user from storage is', stored);
                const parseDB = JSON.parse(stored);
                console.log('parseDB', parseDB);
                this.setState({
                    authed: true,
                    user: parseDB,
                    sidebar: true
                })
        }
    }

    checkAuthed = () => {
        if(this.state.authed){
            return(
                <Tickets user={this.state.user} />
            )
        }else{
            return(
                <div className="hub-content">
                    <p>Please <a href="/login">login</a> to view maintenance requests</p>
                </div>
            )
        }
    }

 render(){
     return(
         <div>
            <SidebarNav />
            <div className="hub-content">
            <h2>Your Maintenance Requests App</h2>
                {this.checkAuthed()}

            <Link to={`/dashboard`} className='backLink dark-link'>
                Back to your homeowner dashboard »
            </Link>
            </div>
         </div>
     );
 }

}