import React from 'react';
import { Navigate, Route, Routes as Switch } from 'react-router-dom';

import HomePage from 'pages/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="*" element={<Navigate to={`/`} replace />} />

      <Route element={<HomePage />} path="/" />
    </Switch>
  );
};

export default Routes;
