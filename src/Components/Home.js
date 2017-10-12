import React, { Component } from 'react'
import { Container } from 'bloomer'

class Home extends Component {
  render() {
    return (
      <Container>
        <p>Home component</p>
      </Container>
    )
  }
}

Home.route = {
  path: "/",
  title: "Home",
  navItem: true
}

export default Home;