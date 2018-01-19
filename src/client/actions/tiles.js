import { TILES } from '../actions-types';
import { getSites } from '../services/sites';

const requestTiles = () => {
  return {
    type: TILES.REQUEST
  }
};

const tilesSuccess = (tiles) => {
  return {
    type: TILES.SUCCESS,
    data: tiles
  }
};

const tileError = (error) => {
  return {
    type: TILES.ERROR,
    error
  }
};

export const getTiles = () => {
  return async (dispatch) => {
    dispatch(requestTiles);
    try {
      const result = await getSites();
      dispatch(tilesSuccess(result.data));
    } catch (error) {
      dispatch(tileError(error));
    }
  };
};
