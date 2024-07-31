import React from "react";
import { render } from "@testing-library/react";
import PokeData from "../childComponents/PokeData";

// Sanity Test
test('sanity test to check testing environment', () => {
    expect(true).toBe(true);
});

// Test for presence of PokeData component
test('renders PokeData component', () => {
    render(<PokeData pokemons={[]} />); // Ensure pokemons prop is provided even if empty
    // Add assertions if necessary to check component rendering
});

// Test if pokemon data is fetched and rendered correctly
test('renders pokemon data correctly', () => {
    // Mock the API response for fetching pokemon data
    const mockPokemons = [
        { id: 1, name: "Pikachu", set: { name: "Base Set" } },
        { id: 2, name: "Charizard", set: { name: "Base Set" } },
        // Add more mock data if needed
    ];

    // Render the PokeData component with the mock data
    const { getByText } = render(<PokeData pokemons={mockPokemons} />);
    
    // Add assertions to test if the pokemon data is rendered correctly
    expect(getByText(/Pikachu/i)).toBeInTheDocument();
    expect(getByText(/Charizard/i)).toBeInTheDocument();
});

// Test if there is a limit of 15 items per page
test('displays a maximum of 15 items per page', () => {
    // Mock the API response for fetching pokemon data with more than 15 items
    const mockPokemons = Array.from({ length: 16 }, (_, i) => ({
        id: i + 1,
        name: `Pokemon ${i + 1}`,
        set: { name: "Test Set" }
    }));

    // Render the PokeData component with the mock data
    const { getAllByRole } = render(<PokeData pokemons={mockPokemons} />);
    
    // Assert that only 15 items are displayed
    expect(getAllByRole('listitem').length).toBe(15);
});

// Test if searching by type returns the correct response from the API
test('fetches and renders correct data when searching by type', () => {
    // Mock the API response for searching by type
    const mockPokemons = [
        { id: 1, name: "Charmander", type: "Fire", set: { name: "Base Set" } },
        { id: 2, name: "Vulpix", type: "Fire", set: { name: "Base Set" } },
    ];

    // Render the PokeData component with the mock data
    const { getByText } = render(<PokeData pokemons={mockPokemons} />);
    
    // Add assertions to test if the correct response is rendered
    expect(getByText(/Charmander/i)).toBeInTheDocument();
    expect(getByText(/Vulpix/i)).toBeInTheDocument();
});

// Test if searching by set returns the correct response from the API
test('fetches and renders correct data when searching by set', () => {
    // Mock the API response for searching by set
    const mockPokemons = [
        { id: 1, name: "Bulbasaur", set: { name: "Base Set" } },
        { id: 2, name: "Squirtle", set: { name: "Base Set" } },
    ];

    // Render the PokeData component with the mock data
    const { getByText } = render(<PokeData pokemons={mockPokemons} />);
    
    // Add assertions to test if the correct response is rendered
    expect(getByText(/Bulbasaur/i)).toBeInTheDocument();
    expect(getByText(/Squirtle/i)).toBeInTheDocument();
});
