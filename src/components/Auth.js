import React, { Component } from 'react';
import './Login.css';
import Login from './Login';
import AuthSuccess from './AuthSuccess';
import { Link } from 'react-router-dom';;


export default class Authentication extends Component{
    // state = {
    //     authed: false,
    //     user: {},
    //     fieldErrors: false
    //   }
    //   sendLogin = (action, email, password) =>{
    //     fetch(`http://localhost:4000/users?email=${email}`)
    //     .then((data)=>{
    //       return data.json();
    //     }).then((userArray)=>{
    //       //User doesn't exist
    //         if (userArray.length===0 && action==="login"){
    //             this.setState({ 
    //               authed: false,
    //               fieldErrors: true,
    //               errorMessage: "No User with That Email Exists. Sign up."
    //             });
    //         }
            // Password is incorrect
        // else if(userArray.length !== 0 && userArray[0].password !== password && action==="login"){
        //     this.setState({ 
        //       authed: false,
        //       fieldErrors: true,
        //       errorMessage: "The password you submitted is incorrect. Please try again."
        //     });
        //   }
          // Email already taken
          // else if(userArray.length !== 0 && action==="signup"){
          //   this.setState({ 
          //     authed: false,
          //     fieldErrors: true,
          //     errorMessage: "A user with that email already exists"
          //   });
          // }
          // No user exists, create new user
          // else if(userArray.length===0 && action==="signup"){
          //   let dataObj = {
          //     "email":email, 
          //     "password":password
          //   }
          //   return fetch('http://localhost:4000/users', {
          //       method: 'POST',
          //       headers: {
          //         'Content-Type': 'application/json'
          //       },
          //       body: JSON.stringify(dataObj)
          //     }).then((response) => {
          //       return response.json();
          //     }).then((data) => {
          //       this.sendData("login", data.email, data.password);
          //     });
          // }
          // Login!
    //       else{
    //           this.setState({ 
    //               user: userArray[0],
    //               authed: true,
    //           });
    //       }
    //   })
    // }
    
    
      authenticated = () => {
        if(!this.props.authed && this.props.fieldErrors){
        // If the user is not authenticated and there are field errors (wrong password or user already exists), send both the sendDeets method and the error messages as props.
          return(
            <Login sendLogin={this.props.sendLogin} errorMessage={this.props.errorMessage}/>
          )
        }else if(!this.props.authed){

        //If the user is not authenticated, send the sendDeets method as props.
          return(
            <Login sendLogin={this.props.sendLogin}/>
          )
        }else if(this.props.authed){
            // If the user authenticates, they are good to go!
          return(
            <div>
              <AuthSuccess user={this.props.user}/>
            </div>
          )
        }
      }
    
      render() {
        return (
            <div className="main-login">
            
                {this.authenticated()}

                <Link to={`/`} className='backLink'>
                    Back to Home
                </Link>
            </div>
        );
      }
    }