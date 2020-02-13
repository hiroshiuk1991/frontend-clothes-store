import React from 'react'

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
