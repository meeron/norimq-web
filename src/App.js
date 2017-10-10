import React, { Component } from 'react';
import { Container } from 'bloomer';
import { Navbar, NavbarBrand, NavbarItem, NavbarMenu, NavbarStart } from 'bloomer';

class App extends Component {
  render() {
    return (
      <Container>
        <Navbar style={{ margin: '0' }}>
          <NavbarBrand>
            <NavbarItem>
              norimQ
            </NavbarItem>            
          </NavbarBrand>

          <NavbarMenu isActive={true}>
            <NavbarStart>
              <NavbarItem href='#'>Home</NavbarItem>
            </NavbarStart>
          </NavbarMenu>
        </Navbar>
      </Container>
    );
  }
}

export default App;
