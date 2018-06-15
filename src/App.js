import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './components/Nav';
import Homepage from './components/BodyContent';
import pagedata from './pagedata';
import RequestReview from './components/requests/RequestReview';

class App extends Component {
  state = {
    hub: pagedata,
    authed: false
  }
  render() {
    const hubPages = this.state.hub.map((hubPage) => (
      <Route 
        key={hubPage.id}
        exact path={hubPage.route} 
        component={() => <hubPage.component />}/>
    ));
    return (
      <div>
            <Navigation />
            <Route exact path={'/'} component={() => <Homepage authed={this.state.authed}/>}/>
            <Route exact path='/requests/:id' component={RequestReview} /> 
              {hubPages}
      </div>
    )
  }
}

export default App;