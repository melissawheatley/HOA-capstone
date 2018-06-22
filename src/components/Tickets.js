import React, { Component } from 'react';
import AddForm from './AddForm';
import { Link } from 'react-router-dom';
import { CardDeck, CardBody, Card, CardTitle, CardText, CardFooter, Button} from 'reactstrap';
import './tickets.css';

export default class Tickets extends Component{
    state={
        contacts:[], 
        addRequest: false, 
        tickets: []
    }

    componentDidMount(){
        const storedUser = sessionStorage.getItem('user');
        if(storedUser){
            const storedUserObj = JSON.parse(storedUser);
            // console.log('storedUserobj', storedUserObj);
            this.loadTickets(storedUserObj.id);
        }else{
            this.loadTickets(this.props.user.id)
        }
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

    saveRequest = (userObject) =>{
        userObject.ownerID = this.props.user.id
        return fetch(`http://localhost:4000/requests/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObject)
        }).then((data)=>{
            return data.json();
        }).then((result)=>{
            this.setState({
                //contact: result you want to set this state so that the update will re-render on it's own without refresh.
                addRequest: false
            })
            this.loadTickets(this.props.user.id)
        })
    }

    addRequest = () => {
        this.setState({
            addRequest: true
        })
    }

    cancelRequestAdd = () => {
        this.setState({
            addRequest: false
        })
    }


    openForm = () => {
        if(this.state.addRequest){
            return(
                <div>
                    <hr />
                        <AddForm title="Add New Request" saveRequest={this.saveRequest} cancelRequestAdd={this.cancelRequestAdd} user={this.props.user} />
                    <hr />
                </div>
            )
        }else{
            return(
                <div>
                    <Button 
                        color='maroon' 
                        onClick={this.addRequest}
                    >
                        Add Request
                    </Button>
                    <hr />
                </div>
            )
        }
    }

    render(){
        return( 
                <div>
                    {this.openForm()}
                    <h2>Open Tickets</h2>
                    <TicketList loaded={this.state.loaded} tickets={this.state.tickets} />
                </div>
        )
    }
}

class TicketList extends Component{
    render(){
        if (this.props.loaded === true){
        const requests = this.props.tickets.map((ticket)=>(
            <CardTemplate
                key={ticket.id}
                id={ticket.id}
                uid={ticket.uid}
                type={ticket.type}
                message={ticket.message}
                date={ticket.originDate}
                resolved={ticket.resolved}
                subject={ticket.subject}
            />
        ));
        return(
            <div>
                <CardDeck>
                    {requests}
                </CardDeck>
            </div>
        )
    }else{
        return(
            <p>loading error...</p>
        )
    }
}
}


class CardTemplate extends Component{
    render(){
        return(
            <Card>
                <CardBody>
                    <CardTitle>
                        <Link to={`/requests/${this.props.id}`} > {this.props.subject} <span className="ticketRef">(Ticket {this.props.id})
                        </span> </Link>
                    </CardTitle>
                    <CardText className="truncate ellipsis">{this.props.message}</CardText>
                    <Button><Link to={`/requests/${this.props.id}`} >Details</Link></Button>
                </CardBody>
                <CardFooter>{this.props.type}</CardFooter>
            </Card>
        )
    }
}