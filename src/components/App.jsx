import React, { Component } from 'react';
import { Section } from 'react-bulma-components/full';
import { Container } from 'react-bulma-components/full';

import Navigation from "./Navigation";
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />  
        <Section>
          <Container>
            <Home />
          </Container>
        </Section>
      </div>
    );
  }
}

export default App;
