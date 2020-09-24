import * as actions from "../actions/AlbumsActions";

const initialState = {
  searchTerm: "",
  albums: [],
  loading: false,
  hasErrors: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ALBUMS:
      return { ...state, searchTerm: action.payload, loading: true };
    case actions.GET_ALBUMS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        albums: action.payload,
        loading: false,
        hasErrors: false,
      };
    case actions.GET_ALBUMS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
};
