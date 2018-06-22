import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './components/Nav';
import Homepage from './components/Homepage';
import Auth from './components/Auth';
import hubPages from './components/hubPages';
import GetRequest from './components/GetTicket';

class App extends Component {
  state = {
    pages: hubPages,
    authed: false,
    user: [],
    fieldErrors: false,
    sidebar: false
  }
  sendLogin = (action, email, password) =>{
    fetch(`http://localhost:4000/users?email=${email}`)
    .then((data)=>{
      return data.json();
    }).then((userArray)=>{
      //User doesn't exist
        if (userArray.length===0 && action==="login"){
            this.setState({ 
              authed: false,
              fieldErrors: true,
              errorMessage: "No User with That Email Exists. Sign up."
            });
        }
        // Password is incorrect
    else if(userArray.length !== 0 && userArray[0].password !== password && action==="login"){
        this.setState({ 
          authed: false,
          fieldErrors: true,
          errorMessage: "The password you submitted is incorrect. Please try again."
        });
      }
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
      else{
          this.setState({ 
              user: userArray[0],
              authed: true,
              sidebar: true
          })
          const userObj = JSON.stringify(userArray[0]);
          sessionStorage.setItem('user', userObj);
      }
  })
}

  render() {
    const hubContent = this.state.pages.map((page) => (
      <Route 
          key={page.id}
          exact path={page.route} 
          component={() => <page.component />}
      />
      ));

    return (
      <div>
            <Navigation authed={this.state.authed}/>
            <div id="main">
            <Route exact path={'/'} component={() => <Homepage />}/>
            <Route exact path={'/login'} component={()=> <Auth authed={this.state.authed} sendLogin={this.sendLogin} user={this.state.user} pages={this.state.pages}/>}/>
            <Route exact path='/requests/:id' component={GetRequest}/> 
                {hubContent} 
            </div>
      </div>
    )
  }
}

export default App;