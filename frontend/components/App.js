
import React from 'react';
import './App.css'
import "../index.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';// Import the new SearchPage component
import { connect } from 'react-redux';
import { fetchPokemon } from './actions/action' 
import HomePage from './Routes/HomePage';
import SearchPage from './Routes/SearchPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  loading: state.loading,
});

export default connect(mapStateToProps, {fetchPokemon})(App);

