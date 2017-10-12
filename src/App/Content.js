import React, { Component } from 'react'
import { Container } from 'bloomer'
import { Route } from 'react-router-dom'
import navigation from './navigation'

class Content extends Component {
  render() {
    const navItems = navigation().map((c) =>
      <Route key={c.route.path} exact={true} path={c.route.path} component={c} />
    );
      
    return (
      <Container>
        {navItems}
      </Container>
    )
  }
}

export default Content;