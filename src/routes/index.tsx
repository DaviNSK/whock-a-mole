import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from 'pages/Home';

const Routess: React.FC = () => {
  return (
    <Switch>
      <Route exact component={HomePage} path="/" />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routess;
