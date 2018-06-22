import React, { Component } from 'react';
import './tickets.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
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

    editRequest = () => {
        this.setState({
            edit: true
        })
    }

    openEditForm = () =>{
        if(this.state.edit){
            return(
                <div>
                    <hr />
                    <EditForm title='Edit This Request' saveUpdate={this.saveUpdate} cancelUpdate={this.cancelUpdate} deleteRequest={this.deleteRequest} ticket={this.state.request} user={this.props.user} />
                </div>
            )
        }
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

    loadTickets = (id) => {
        fetch(`http://localhost:4000/requests?ownerID=${id}`)
        .then((data)=>{
            return data.json();
        }).then((userRequests)=>{
            // console.log('tickets from loadTickets before setting state', userRequests);
            this.setState({
                tickets: userRequests,
                loaded: true
            })
        })
    }

    deleteRequest = () => {
        console.log('delete clicked');
        return fetch(`http://localhost:4000/requests/${this.props.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response)=>{
            const storedUser = sessionStorage.getItem('user');
            const storedUserObj = JSON.parse(storedUser);
            this.loadTickets(storedUserObj.id)
        })
     }


    render(){
        return(
            <div className="singleRequest">
                <h2>{this.state.request.subject}</h2> 
                <p>{this.state.request.message}</p>
                <Button onClick={this.editRequest} className="edit-btn btn-maroon">Edit</Button> <Button onClick={this.deleteRequest} className="btn-blank dark-link"><a href='/maintenance'>Delete</a></Button>
                <hr />
                <a href='/maintenance' className="dark-link ml-2">Go Back to List »</a>
                    {this.openEditForm()}
            </div>
            
        )
    }
}