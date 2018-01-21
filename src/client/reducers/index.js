import { combineReducers } from 'redux';

import TilesReducer from './tiles';

export default combineReducers({
  tiles: TilesReducer
});
