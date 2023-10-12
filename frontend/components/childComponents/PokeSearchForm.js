import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchPokemon } from "../actions/action";

function PokeSearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchPokemon(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
        <button className="button" type="submit">
          <span className="button-text">Search By Name</span>
          {props.loading && <div className="spinner"></div>}
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.loading,
});

export default connect(mapStateToProps, { fetchPokemon })(PokeSearchForm);