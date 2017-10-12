import React, { Component } from 'react'
import { Container } from 'bloomer'

class About extends Component {
  render() {
    return (
      <Container>
        <p>About component</p>
      </Container>
    )
  }
}

About.route = {
  path: "/about",
  title: "About",
  navItem: true
}

export default About;