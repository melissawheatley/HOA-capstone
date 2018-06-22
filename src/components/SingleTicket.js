import React, { Component } from 'react';
import './tickets.css';
import { Link } from 'react-router-dom';
// import EditForm from './EditForm';
import SidebarNav from './SidebarNav';

export default class SingleTicket extends Component{

    state = {
        contact: {},
        edit: false,
        request: {}
    }

    componentDidMount(){
        this.getTicketDB();
    }

    getTicketDB = () => {
        fetch(`http://localhost:4000/requests?id=${this.props.id}`)
        .then((data)=>{
            return data.json();
        }).then((ticketArray)=>{
            this.setState({
                request: ticketArray[0]
            })
            console.log('ticket from getTicketDB', this.state.request);
        })
    }

    editContact = () => {
        this.setState({
            edit: true
        })
    }


    saveUpdate = (userObject) =>{
        return fetch(`http://localhost:4000/requests/${this.props.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObject)
        }).then((data)=>{
            return data.json();
        }).then((result)=>{
            this.setState({
                ticket: result, //you want to set this state so that the update will re-render on it's own without refresh.
                edit: false
            })
        })
    }

    cancelUpdate = () => {
        this.setState({
            edit: false
        })
    }

    openEditForm = () =>{
        if(this.state.edit){
            return(
                <div>
                    <hr />
                    <p>Edit form clicked</p>
                    {/* <EditForm title='Edit This Contact' person={this.state.contact} saveUpdate={this.saveUpdate} cancelUpdate={this.cancelUpdate} deleteRequest={this.props.deleteRequest} /> */}
                </div>
            )
        }
    }



    render(){
        return(
            
            <div className="singleRequest">
                    <h2>{this.state.request.subject}</h2> 
                    <p>{this.state.request.message}</p>
                    {this.openEditForm()}
            </div>
            
        )
    }
}