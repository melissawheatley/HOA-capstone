import React, {Component} from 'react';
import { Form, Input, Button } from 'reactstrap'


export default class EditForm extends Component{
    state = {
        fields: {
            type: this.props.ticket.type || '',
            subject: this.props.ticket.subject  || '',
            message: this.props.ticket.message  || '',
            resolved: this.props.ticket.resolved  || ''
        }
    };

  onFormSubmit = (evt) => {
    let userObject = {}
        userObject.type = this.state.fields.type;
        userObject.subject = this.state.fields.subject;
        userObject.message = this.state.fields.message;
        userObject.resolved = this.state.fields.resolved;
    this.props.saveUpdate(userObject);
    console.log("userObject", userObject);
    this.setState({
        fields: {
            type: '',
            subject: '',
            message: '',
            resolved: ''
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
        <div>
            <h3>{this.props.subject}</h3>
            <Form>
                <Form.Group widths='equal'>
                <Form.Field>
                    <label>Update Name</label>
                    <Input 
                        fluid placeholder='Name' 
                        name="name"
                        value={this.state.fields.name}
                        onChange={this.onInputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Update Email</label>
                    <Input 
                        fluid placeholder='Email' 
                        name="email"
                        type='email'
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                    />
                </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Field>
                    <label>Update Company</label>
                    <Input 
                        fluid placeholder='Company' 
                        name="company"
                        type='text'
                        value={this.state.fields.company}
                        onChange={this.onInputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Update Phone</label>
                    <Input 
                        fluid placeholder='Phone' 
                        name="phone"
                        type='text'
                        value={this.state.fields.phone}
                        onChange={this.onInputChange}
                    />
                </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                {/* <Form.Field>
                    <label>Update Rating</label>
                    <Input 
                        fluid placeholder='Rating' 
                        name="rating"
                        type='text'
                        value={this.state.fields.rating}
                        onChange={this.onInputChange}
                    />
                </Form.Field> */}
                <Form.Field>
                    <label>Update Image</label>
                    <Input 
                        fluid placeholder='Image' 
                        name="image"
                        type='text'
                        value={this.state.fields.image}
                        onChange={this.onInputChange}
                    />
                </Form.Field>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Field>
                    <label>Update Notes</label>
                    <Input 
                        fluid placeholder='Notes' 
                        name="notes"
                        type='text'
                        value={this.state.fields.notes}
                        onChange={this.onInputChange}
                    />
                </Form.Field>
                </Form.Group>
                <Button 
                    size='mini' 
                    color='green'
                    onClick={this.onFormSubmit}
                >
                    Save                       
                </Button>
                <Button 
                    size='mini' 
                    color='red'
                    onClick={this.props.cancelUpdate}
                >
                    Cancel                       
                </Button>
            </Form>
        </div>
        );
    }
}