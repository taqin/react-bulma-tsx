import * as React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Navigation } from './Navigation';
import { Home } from './Home';

import '../styles/App.scss';

export const App: React.StatelessComponent<{}> = ()  => {
  return(
    <BrowserRouter>
      <div>
        <Navigation />
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
}
