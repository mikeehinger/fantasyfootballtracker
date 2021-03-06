import React, { Component } from 'react';
import './Appv2.css';
import './base.css';

import {Navbar, Nav, NavDropdown}  from 'react-bootstrap';
import Leaderboard from './containers/Leaderboard';
import Results from './containers/Results';
import WeeklyLeaderboard from './containers/WeeklyLeaderboard';
import { Route,Switch,Link } from "react-router-dom";
import PullToRefresh from "pull-to-refresh-react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      schedule: null,
      standings: [0,1],
      results: [0,1]
    }
    };

      
    onRefresh(resolve, reject) {
  let self = this;
  setTimeout(function () {
    window.location.reload(false);

  }, 1000);
}      
 

render() {
  return (
    
<PullToRefresh
        options={{ pullDownHeight: 100 }}
        onRefresh={this.onRefresh}
        textRefresh="Getting latest hunks"
        textStart='Pull to get latest on hunks'
        textReady='Let go to get latest on hunks'


      >
    <div id="AppContainer">
    
      <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="/">League of Hunks</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Season Table</Nav.Link>
      <Nav.Link href="/weeklytable">Weekly Table</Nav.Link>
      <Nav.Link href="/results">Weekly Matchups</Nav.Link>

      
    </Nav>
  </Navbar.Collapse>
</Navbar>
<div id='master-content'>
<Switch>
<Route path="/" exact render={(props) => <Leaderboard standings={this.state.standings}  {...props}  />} />
<Route path="/results" exact render={(props) => <Results results={this.state.results}  {...props}  />} />

            <Route path="/results" exact component={Results} />
            <Route path="/weeklytable" exact component={WeeklyLeaderboard} />

        </Switch>
        </div>
    </div>

  </PullToRefresh>
  );
}

}
export default App;
