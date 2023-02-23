import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from 'store/store';
import GlobalStyles from 'styles/global';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes />

        <GlobalStyles />
      </Router>
    </Provider>
  );
};

export default App;
