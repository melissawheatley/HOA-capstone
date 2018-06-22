import React, { Component } from 'react';
import './tickets.css';
import { Button } from 'reactstrap';
import EditForm from './EditForm';


export default class SingleTicket extends Component{

    state = {
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
            // console.log('ticket from getTicketDB', this.state.request);
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
                request: result, //you want to set this state so that the update will re-render on it's own without refresh.
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
                    <EditForm title='Edit This Request' saveUpdate={this.saveUpdate} cancelUpdate={this.cancelUpdate} deleteRequest={this.props.deleteRequest} ticket={this.state.request} user={this.props.user} />
                </div>
            )
        }
    }


    render(){
        return(
            
            <div className="singleRequest">
                <h2>{this.state.request.subject}</h2> 
                <p>{this.state.request.message}</p>
                <Button onClick={this.editContact}>Edit</Button>
                    {this.openEditForm()}
            </div>
            
        )
    }
}