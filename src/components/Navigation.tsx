import * as React from 'react';
import { Navbar } from 'react-bulma-components/full';

const open = false;

export const Navigation: React.StatelessComponent<{}> = () => {
  return (
    <div>
      <Navbar className="is-fixed-top is-dark">
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="./">
            <img
              src="https://bulma.io/images/bulma-logo-white.png"
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

export default Navigation;
