import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import MainContainer from './components/MainContainer'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={MainContainer} />
        </div>
      </Router>
    )
  }
}

export default App
