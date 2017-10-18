import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'bloomer'
import Api from '../Services/apiService'

class Queues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queues: []
    }
  }

  componentDidMount() {
    Api.getQueues()
      .then(data => this.setState({ queues: data }))
      .catch(ex => console.error(ex));
  }

  render() {
    return (
      <Container>
        <ul>
          {
            this.state.queues.map(q =>
              <li><Link to={"/queues/1"}>{q.name}</Link></li>)
          }
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