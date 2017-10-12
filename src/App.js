import React, { Component } from 'react'
import { Container } from 'bloomer'
import { BrowserRouter as Router } from 'react-router-dom'
import NavHeader from './App/NavHeader'
import Content from './App/Content'

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <NavHeader />
          <Content />
        </Container>
      </Router>
    )
  }
}

export default App;
