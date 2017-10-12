import React, { Component } from 'react'
import { Container } from 'bloomer'

class QueueDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      id: props.match.params.id
    }
  }
  render() {
    return (
      <Container>
        <p>Queues {this.state.id} details component</p>
      </Container>
    )
  }
}

QueueDetails.route = {
  path: "/queues/:id",
  title: "Queue details"
}

export default QueueDetails;