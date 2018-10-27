import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Home from './pages/home';

render(
  <AppContainer>
    <Home />
  </AppContainer>,
  document.getElementById('root')
);
