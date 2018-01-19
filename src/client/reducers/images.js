import { IMAGES } from '../actions-types';

const initialState = {
  images: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case IMAGES.REQUEST:
      return {
        ...state,
        loading: true
      }
    case IMAGES.SUCCESS:
      const { images } = state;

      const { url } = action.data;

      if (!images[url]) {
        images[url] = `data:image/png;base64,${action.data.image}`
      }

      return {
        images,
        loading: false
      }
    case IMAGES.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state;
  }
};
