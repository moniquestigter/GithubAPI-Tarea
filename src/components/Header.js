import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">GitHub Users</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
    </Navbar>
  )
}

export default Header;