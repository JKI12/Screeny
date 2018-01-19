import { IMAGES } from '../actions-types';
import { getImage } from '../services/images';

const requestImage = () => {
  return {
    type: IMAGES.REQUEST
  }
};

const imageSuccess = (tiles) => {
  return {
    type: IMAGES.SUCCESS,
    data: tiles
  }
};

const imageError = (error) => {
  return {
    type: IMAGES.ERROR,
    error
  }
};

export const getScreenshot = (url) => {
  return async (dispatch) => {
    dispatch(requestImage);
    try {
      const result = await getImage(url);
      dispatch(imageSuccess(result.data));
    } catch (error) {
      dispatch(imageError(error));
    }
  };
};
