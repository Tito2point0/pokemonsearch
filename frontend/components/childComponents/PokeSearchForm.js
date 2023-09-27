import React from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions';
import { useState } from 'react';
function PokeSearchForm(props) {
  const [searchTerm, setSearchTerm ] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchPokemon(searchTerm)
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
} 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
   onChange={handleChange}
        />
        <button className='initialButton' type="submit">Search</button>
      </form>
      
    </div>
  );
}


export default connect(null,{fetchPokemon})(PokeSearchForm);
