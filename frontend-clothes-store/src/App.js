import React from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { Route, withRouter, Switch } from 'react-router-dom';

import MainContainer from './components/MainContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'




class App extends React.Component {
  render () {
    return (
      <Router>
        <Route
          exact
          path='/'
          component={props => <MainContainer {...props} />}
        />
        
      </Router>
    )
  }
}

export default App
