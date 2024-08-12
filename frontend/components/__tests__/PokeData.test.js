// __tests__/PokeData.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import PokeData from '../childComponents/PokeData';
import PokeSearchForm from '../childComponents/PokeSearchForm';
import { fetchPokemon } from '../actions/action';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../Routes/HomePage';
import SearchPage from '../Routes/SearchPage';

jest.mock('axios');

const mockStore = configureStore([thunk]);

describe('PokeData Component Tests', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      pokemon: [],
      loading: false,
      error: '',
    });
  });

  it('renders PokeData component with mock data', () => {
    const mockPokemons = [
      { id: 1, name: "Pikachu", set: { name: "Base Set" } },
      { id: 2, name: "Charizard", set: { name: "Base Set" } },
    ];

    render(
      <Provider store={store}>
        <PokeData pokemons={mockPokemons} />
      </Provider>
    );

    screen.debug(); // Print the current DOM state
    expect(screen.getByText(/Pikachu/i)).toBeInTheDocument();
    expect(screen.getByText(/Charizard/i)).toBeInTheDocument();
  });

  it('displays error message on API error', async () => {
    axios.get.mockRejectedValue(new Error('API Error'));

    render(
      <Provider store={store}>
        <PokeSearchForm fetchPokemon={fetchPokemon} />
      </Provider>
    );

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Test' } });
    fireEvent.submit(screen.getByRole('button'));

    await waitFor(() => {
      screen.debug(); // Print the current DOM state after API error
      expect(screen.getByText(/API Error/i)).toBeInTheDocument();
    });
  });

  it('limits displayed items to 15 per page', () => {
    const mockPokemons = Array.from({ length: 16 }, (_, i) => ({
      id: i + 1,
      name: `Pokemon ${i + 1}`,
      set: { name: "Test Set" },
    }));

    render(
      <Provider store={store}>
        <PokeData pokemons={mockPokemons} />
      </Provider>
    );

    screen.debug(); // Print the current DOM state to check item limits
    expect(screen.getAllByRole('listitem').length).toBe(15);
  });

  it('renders correct data when searching by type', () => {
    const mockPokemons = [
      { id: 1, name: "Charmander", type: "Fire", set: { name: "Base Set" } },
      { id: 2, name: "Vulpix", type: "Fire", set: { name: "Base Set" } },
    ];

    render(
      <Provider store={store}>
        <PokeData pokemons={mockPokemons} />
      </Provider>
    );

    screen.debug(); // Print the current DOM state to check type rendering
    expect(screen.getByText(/Charmander/i)).toBeInTheDocument();
    expect(screen.getByText(/Vulpix/i)).toBeInTheDocument();
  });

  it('renders correct data when searching by set', () => {
    const mockPokemons = [
      { id: 1, name: "Bulbasaur", set: { name: "Base Set" } },
      { id: 2, name: "Squirtle", set: { name: "Base Set" } },
    ];

    render(
      <Provider store={store}>
        <PokeData pokemons={mockPokemons} />
      </Provider>
    );

    screen.debug(); // Print the current DOM state to check set rendering
    expect(screen.getByText(/Bulbasaur/i)).toBeInTheDocument();
    expect(screen.getByText(/Squirtle/i)).toBeInTheDocument();
  });
});

// Additional Tests
describe('Additional UI and Navigation Tests', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      pokemon: [],
      loading: false,
      error: '',
    });
  });

  it('renders welcome message and link to search page', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    // Check for welcome message
    screen.debug(); // Print the current DOM state to check welcome message
    expect(screen.getByText(/Welcome to the Pokemon Card Finder!/i)).toBeTruthy();

    // Check for link to search page
    const linkElement = screen.getByRole('link', { name: /Go to Search/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/search');
  });

  it('navigates to Search page when "Go to Search" link is clicked', async () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    fireEvent.click(screen.getByText(/Go to Search/i));
    await waitFor(() => {
      screen.debug(); // Print the current DOM state after navigation
      expect(screen.getByText(/Pokemon Search/i)).toBeInTheDocument();
    });
  });

  it('displays loading message while fetching data', () => {
    store = mockStore({
      pokemon: [],
      loading: true,
      error: '',
    });

    render(
      <Provider store={store}>
        <SearchPage />
      </Provider>
    );

    screen.debug(); // Print the current DOM state while loading
    expect(screen.getByText(/Gotta Load em all/i)).toBeInTheDocument();
  });

  it('renders pokemon data by type correctly', () => {
    const mockPokemons = [
      { id: 1, name: "Pikachu", type: "Electric", set: { name: "Base Set" } },
      { id: 2, name: "Jolteon", type: "Electric", set: { name: "Base Set" } },
    ];

    render(
      <Provider store={store}>
        <PokeData pokemons={mockPokemons} />
      </Provider>
    );

    screen.debug(); // Print the current DOM state to check type rendering
    expect(screen.getByText(/Pikachu/i)).toBeInTheDocument();
    expect(screen.getByText(/Jolteon/i)).toBeInTheDocument();
  });

  it('renders pokemon data with images correctly', () => {
    const mockPokemons = [
      {
        id: 1,
        name: "Pikachu",
        set: { name: "Base Set" },
        images: {
          small: "https://images.pokemontcg.io/base1/58.png",
          large: "https://images.pokemontcg.io/base1/58_hires.png",
        },
      },
    ];

    render(
      <Provider store={store}>
        <PokeData pokemons={mockPokemons} />
      </Provider>
    );

    screen.debug(); // Print the current DOM state to check image rendering
    const imgElement = screen.getByAltText('Small');
    expect(imgElement).toHaveAttribute('src', mockPokemons[0].images.small);
  });

  it('renders error message if no Pokémon are found', () => {
    store = mockStore({
      pokemon: [],
      loading: false,
      error: 'No Pokémon found',
    });

    render(
      <Provider store={store}>
        <PokeData pokemons={[]} />
      </Provider>
    );

    screen.debug(); // Print the current DOM state when no Pokémon are found
    expect(screen.getByText(/No Pokémon found/i)).toBeInTheDocument();
  });
});

// Test for presence of PokeData component
test('renders PokeData component', () => {
  render(<PokeData pokemons={[]} />); // Ensure pokemons prop is provided even if empty
  screen.debug(); // Print the current DOM state to check component rendering
  // Add assertions if necessary to check component rendering
});


// Sanity check test
test('sanity test to check testing environment', () => {
  expect(true).toBe(true);
});
// __tests__/Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../Routes/HomePage';

test('renders Home component with welcome message and link', () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  // Check for welcome message
  expect(screen.getByText(/Welcome to the Pokemon Card Finder!/i)).toBeInTheDocument();

  // Check for link to search page
  const linkElement = screen.getByRole('link', { name: /Go to Search/i });
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', '/search');
});
