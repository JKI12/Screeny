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
      const t = action.data.sites.map((s) => {
        return {
          name: s.name.replace('/', '').split(/(?=[A-Z])/).join(" "),
          url: s.url == '///' ? '/' : s.url
        }
      });

      return {
        ...state,
        loading: false,
        tiles: t.sort((siteOne, siteTwo) => {
          if (siteOne.name.toLowerCase().includes('homepage') || siteTwo.name.toLowerCase().includes('homepage')) {
            return 1;
          };

          if (siteOne.name < siteTwo.name) {
            return -1;
          }

          if (siteOne.name > siteTwo.name) {
            return 1;
          }

          return 0;
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
