import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Routes from './router';
import dva from './utils/dva';

import appModel from './models/app';

const app = dva({
  initialState: {},
  models: [appModel],
  onError(e) {
    console.log('onError', e);
  }
});

const App = app.start(Routes);

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root')
);
