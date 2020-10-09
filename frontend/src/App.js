import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';

import Home from './components/home/home';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default App;
