import React from 'react';
import { BrowrerRouter as Router, Route } from 'react-router-dom';

import './App.css';
import MainContainer from './components/MainContainer';



class App extends React.Component {

  render () {

  return (
    <Router> 
    <div>
        <Route exact path="/Homepage" component={MainContainer} /> 
      </div>
    </Router>
    );
  }
}

export default App;
