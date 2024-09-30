// src/actions/action.js
import axios from 'axios';

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

export const fetchPokemonRequest = () => ({
  type: FETCH_POKEMON_REQUEST,
});

export const fetchPokemonSuccess = (pokemon) => ({
  type: FETCH_POKEMON_SUCCESS,
  payload: pokemon,
});

export const fetchPokemonFailure = (error) => ({
  type: FETCH_POKEMON_FAILURE,
  payload: error,
});

export const fetchPokemon = (searchTerm = '', page = 1, limit = 10) => {
  return (dispatch) => {
    dispatch(fetchPokemonRequest());

    const offset = (page - 1) * limit;
    let url = `https://pokemontcg.io/v2/cards?limit=${limit}&offset=${offset}`;

    if (searchTerm) {
      url = `https://api.pokemontcg.io/v2/cards?q=name:${searchTerm}`;
    }

    axios
      .get(url)
      .then((response) => {
        console.log("API Response: ", response.data.data); // Log the full response to see what you get

        if (response.data.results) {
          dispatch(fetchPokemonSuccess(response.data.data));
        } else {
          dispatch(fetchPokemonSuccess([response.data.data])); // In case it's a search by name
        }
      })
      .catch((error) => {
        console.log("API Error: ", error.message); // Log any errors from the API
        dispatch(fetchPokemonFailure(error.message));
      });
  };
};
