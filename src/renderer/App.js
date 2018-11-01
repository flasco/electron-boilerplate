import { hot } from 'react-hot-loader';
import Routes from './router';
import dva from './utils/dva';

import appModel from './models/app';

const app = dva({
  initialState: {},
  models: [],
  onError(e) {
    console.log('onError', e);
  }
});

app.model(appModel);

const App = hot(module)(app.start(Routes));

export default App;
