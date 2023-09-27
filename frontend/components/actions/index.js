// actions.js
import axios from 'axios';

// Action Types
export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

// Hardcoded API key for testing (replace with your actual key)
// const apiKey = 'ba66f255-0f49-4d14-ac3e-088d3d39044e';  // Replace 'your_api_key_here' with your API key

export const fetchPokemonRequest = () => ({
  type: FETCH_POKEMON_REQUEST,
});

export const fetchPokemonSuccess = pokemon => ({
  type: FETCH_POKEMON_SUCCESS,
  payload: pokemon,
});

export const fetchPokemonFailure = (error) => ({
  type: FETCH_POKEMON_FAILURE,
  payload: error,
});

// Thunk Action Creator for fetching Pokemon
export const fetchPokemon = (searchTerm) => {
  return (dispatch) => {
    dispatch(fetchPokemonRequest());

    // Make the API request using Axios with the hardcoded API key
    axios
      .get(`https://api.pokemontcg.io/v2/cards?q=name:${searchTerm}`, {
        // headers: {
        //   'X-Api-Key': apiKey,
        // },
      })
      .then((response) => {
        // Assuming the API response contains the Pokemon data
        console.log(response.data.data);

        // Dispatch success action with the received data
        dispatch(fetchPokemonSuccess(response.data.data));
      })
      .catch((error) => {
        // Dispatch failure action with the error message
        dispatch(fetchPokemonFailure(error.message));
      });
  };
};
