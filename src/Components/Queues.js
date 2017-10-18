import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Table } from 'bloomer'
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

  _renderRow = (q) => (
    <tr key={q._id}>
      <td><Link to={`/queues/${q.name}`}>{q.name}</Link></td>
      <td><span>{q.size}</span></td>
      <td><span>{q.messages_count}</span></td>
      <td><span>{q.created_at}</span></td>
      <td><span>{q.updated_at}</span></td>
    </tr>
  )

  render() {
    return (
      <Container>
        <Table isBordered isNarrow>
          <thead>
            <tr>
              <th>Name</th>
              <th>Size</th>
              <th>Messages</th>
              <th>Created</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.queues.map(q => this._renderRow(q))
            }
          </tbody>
        </Table>
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