import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavbarItem, NavbarMenu, NavbarStart } from 'bloomer'
import { Link } from 'react-router-dom'
import navigation from './navigation'


class NavHeader extends Component {
  render() {
    const navItems = navigation().filter(c => c.route.navItem).map((c) =>
      <NavbarItem key={c.route.path}><Link to={c.route.path}>{c.route.title}</Link></NavbarItem>
    );

    return (
      <Navbar style={{ margin: '0' }}>
        <NavbarBrand>
          <NavbarItem>
            norimQ
            </NavbarItem>
        </NavbarBrand>

        <NavbarMenu isActive={true}>
          <NavbarStart>
            {navItems}
          </NavbarStart>
        </NavbarMenu>
      </Navbar>
    )
  }
}

export default NavHeader;