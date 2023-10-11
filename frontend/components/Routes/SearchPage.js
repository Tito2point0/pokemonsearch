// SearchPage.js
import React, { useEffect } from 'react';
// import './App.css';
// import './index.css';
import PokeSearchForm from '../childComponents/PokeSearchForm';
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions';
import PokeList from '../childComponents/PokeList';

function SearchPage(props) {
  const { loading, fetchPokemon } = props;

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="App">
          <h1 className='heading1'>
              <div className='subheading1'>
                  Pokemon Search
              </div>
      </h1>
      <PokeSearchForm />
      {loading ? <h3> Gotta Load em all</h3> : <PokeList />}
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.loading,
});

export default connect(mapStateToProps, { fetchPokemon })(SearchPage);


