import { combineReducers } from 'redux';

import TilesReducer from './tiles';
import ImagesReducer from './images';

export default combineReducers({
  tiles: TilesReducer,
  images: ImagesReducer
});
