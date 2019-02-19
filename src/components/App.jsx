import React, { Component } from 'react';
import { Route, Link } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { Section } from 'react-bulma-components/full';
import { Container } from 'react-bulma-components/full';

import Navigation from "./Navigation";
import Home from './Home';

import '../styles/App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={Home}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
