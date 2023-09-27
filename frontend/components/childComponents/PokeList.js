import React from "react";
import PokeData from "./PokeData";
import { connect } from "react-redux";
function Pokelist(props) {
    const { pokemon } = props;
    const renderedPokemon = pokemon.map((pokemons, index) => (
        <PokeData key={index} pokemons={pokemons} />
    ));
    return (
        <div>
            {renderedPokemon}
        </div>
    )
}

const mapStateToProps = state => {
  return {
        pokemon: state.pokemon
    }
}

export default connect(mapStateToProps) (Pokelist);