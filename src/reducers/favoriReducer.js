import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../actions/favoritesActions.js";

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      console.log(state.displayFavorites);
      return { ...state, displayFavorites: !state.displayFavorites };
    case ADD_FAVORITE:
      const newFavori = {
        id: action.payload.id,
        title: action.payload.title,
      };
      return { ...state, favorites: [...state.favorites, newFavori] };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };

    default:
      return state;
  }
};

export default reducer;
