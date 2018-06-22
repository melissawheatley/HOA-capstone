import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './tickets.css';

export default class AddForm extends Component{

    state = {
        fields: {
            ownerID: '',
            name: this.props.user.name || '',
            email: this.props.user.email || '',
            phone: this.props.user.phone || '',
            contactPref: '',
            type: [],
            subject: '',
            message: '',
            originDate: '',
            resolution: false,
        }
  };

    onFormSubmit = (evt) => {
        let userObject = {}
        userObject.name = this.state.fields.name;
        userObject.email = this.state.fields.email;
        userObject.phone = this.state.fields.phone;
        userObject.contactPref = this.state.fields.contactPref;
        userObject.type = this.state.fields.type;
        userObject.subject = this.state.fields.subject;
        userObject.message = this.state.fields.message;
        userObject.originDate = this.state.fields.originDate;
        this.props.saveRequest(userObject);
        console.log("userObject", userObject);
        this.setState({
            fields: {
                ownerID: '',
                name: '',
                email: '',
                phone: '',
                contactPref: '',
                type: [],
                subject: '',
                message: '',
                originDate: '',
                resolution: false,
            }
        });
        evt.preventDefault();
    };

    onInputChange = evt => {
        const fields = Object.assign({}, this.state.fields);
        fields[evt.target.name] = evt.target.value;
        this.setState({fields});
    };


    render() {
        return (
        <div className="form">
            <h3>{this.props.title}</h3>
            <Form>
                
                <FormGroup>
                    <Label for="subject">Subject Line (a quick reference title for your request)</Label>
                    <Input 
                        name="subject" 
                        id="subject" 
                        onChange={this.onInputChange}/>
                </FormGroup>
                
                <FormGroup>
                    <Label for="message">Tell us more about your situation</Label>
                    <Input 
                        fluid placeholder='ex. The lighting on my fence is no longer working.' 
                        name="message"
                        type='textarea'
                        onChange={this.onInputChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="type">Select Request Type(s)</Label>
                    <Input 
                        type="select" 
                        name="type" 
                        id="type" 
                        onChange={this.onInputChange}
                    multiple>
                            <option>Maintenance</option>
                            <option>Home Modification</option>
                            <option>Landscaping</option>
                            <option>Billing</option>
                            <option>Other</option>
                    </Input>
                </FormGroup>
                <hr className="py-3"/>
                <h3>Contact Information</h3>
                <FormGroup>
                    <Label for="name">Full Name</Label>
                    <Input type="text" 
                        name="name" 
                        id="name" 
                        fluid placeholder='FirstName LastName'
                        value={this.props.user.name}
                        onChange={this.onInputChange} />
                </FormGroup>
                
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" 
                        name="email" 
                        id="email" 
                        fluid placeholder='example@email.com'
                        value={this.props.user.email} 
                        onChange={this.onInputChange}/>
                </FormGroup>
            
                <FormGroup>   
                    <Label for="phone">Phone Number</Label>
                    <Input type="text" 
                        name="phone" 
                        id="phone" 
                        fluid placeholder='615-867-5309'
                        value={this.props.user.phone}
                        onChange={this.onInputChange} />
                </FormGroup>
                
                <FormGroup>
                    <Label for="contactPref">Preferred Contact Method:</Label>
                    <Input 
                        type="select" 
                        name="select" 
                        id="contactPref"
                        onChange={this.onInputChange}>
                            <option>Email</option>
                            <option>Phone</option>
                    </Input>
                </FormGroup>

                <FormGroup className="pt-3 pb-5">
                <Button 
                    color='maroon'
                    onClick={this.onFormSubmit}
                    className="mr-3"
                >
                    Save                       
                </Button>
                <Button
                    onClick={this.props.cancelRequestAdd} 
                    color="blank"
                    className="dark-link">
                    Cancel                       
                </Button>
                </FormGroup>
                
            </Form>
        </div>
        );
    }
}