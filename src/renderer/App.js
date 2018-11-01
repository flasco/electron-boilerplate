import { hot } from 'react-hot-loader';
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

const App = hot(module)(app.start(Routes));

export default App;
