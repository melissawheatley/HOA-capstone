import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './components/Nav';
import Homepage from './components/Homepage';
import Auth from './components/Auth';
// import Footer from './components/Footer';
// import pagedata from './pagedata';
// import RequestReview from './components/requests/RequestReview';

class App extends Component {
  state = {
    // hub: pagedata,
    authed: false,
    user: [],
    fieldErrors: false
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
          });
      }
  })
}

  render() {
    // const hubPages = this.state.hub.map((hubPage) => (
    //   <Route 
    //     key={hubPage.id}
    //     exact path={hubPage.route} 
    //     component={() => <hubPage.component />}/>
    // ));
    return (
      <div>
            <Navigation authed={this.state.authed}/>
            <div id="main">
            <Route exact path={'/'} component={() => <Homepage />}/>
            <Route exact path={'/login'} component={()=> <Auth authed={this.state.authed} sendLogin={this.sendLogin} user={this.state.user}/>}/>
            {/* <Route exact path='/requests/:id' component={RequestReview} />  */}
              {/* {hubPages} */}
          
            {/* <Footer /> */}
            </div>
      </div>
    )
  }
}

export default App;