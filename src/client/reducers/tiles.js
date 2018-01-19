import { TILES } from '../actions-types';

const initialState = {
  tiles: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case TILES.REQUEST:
      return {
        ...state,
        loading: true
      }
    case TILES.SUCCESS:
      return {
        ...state,
        loading: false,
        tiles: action.data.sites.map((s) => {
          return {
            name: s.name.replace('/', '').split(/(?=[A-Z])/).join(" "),
            url: s.url
          }
        })
      }
    case TILES.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state;
  }
};
