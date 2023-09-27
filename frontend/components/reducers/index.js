import { FETCH_POKEMON_FAILURE, FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS } from "../actions";
  
  const initialState = {// Initialize searchTerm to an empty string
    pokemon: [],
    loading: false,
    error: '',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POKEMON_REQUEST:
        return {
          ...state,
          loading: true,
          error: '',
        };
      case FETCH_POKEMON_SUCCESS:
        return {
          ...state,
          loading: false,
          pokemon: action.payload,
          error: null,
        };
      case FETCH_POKEMON_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  
  