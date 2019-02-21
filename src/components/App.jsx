import React, { Component } from 'react';
import { Route, Link } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home';
import Track from './Track';

import '../styles/App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/q/:trackId" component={Track} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
