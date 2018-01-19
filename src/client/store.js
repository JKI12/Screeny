import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

const middlewares = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware
  )
);

export default createStore(
  reducers,
  {},
  middlewares
);