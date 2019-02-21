import React, { Component } from 'react';
import { Navbar } from 'react-bulma-components/full';

const open = false;

export class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar className="is-fixed-top is-white">
          <Navbar.Brand>
            <Navbar.Item renderAs="a" href="./">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </Navbar.Item>
            <Navbar.Burger />
          </Navbar.Brand>

          <Navbar.Menu>
            <Navbar.Container>
              <Navbar.Item href="#">Second</Navbar.Item>
            </Navbar.Container>
            <Navbar.Container position="end">
              <Navbar.Item href="#">At the end</Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
