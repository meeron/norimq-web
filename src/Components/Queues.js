import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'bloomer'

class Queues extends Component {
  render() {
    return (
      <Container>
        <p>Queues component</p>
        <ul>
          <li><Link to={"/queues/1"}>Queue 1</Link></li>
          <li><Link to={"/queues/2"}>Queue 2</Link></li>
        </ul>
      </Container>
    )
  }
}

Queues.route = {
  path: "/queues",
  title: "Queues",
  navItem: true
}

export default Queues;