import React from "react";

const PokeData = ({ pokemons }) => {
  return (
    <div className="pokemons-card">
      <h3>Name: {pokemons.name}</h3>
      <p>ID: {pokemons.id}</p>
      <p>Supertype: {pokemons.supertype}</p>
      <p>Level: {pokemons.level}</p>
      <p>HP: {pokemons.hp}</p>
      {/* <p>Type: {pokemons.types.join(", ")}</p>

     
      {pokemons.subtypes && <p>Subtypes: {pokemons.subtypes.join(", ")}</p>} */}

      
      {pokemons.abilities && (
        <div>
          <h4>Abilities:</h4>
          <ul>
            {pokemons.abilities.map((ability, index) => (
              <li key={index}>
                <strong>Name:</strong> {ability.name}
                <br />
                <strong>Type:</strong> {ability.type}
                <br />
                <strong>Text:</strong> {ability.text}
                <br />
              </li>
            ))}
          </ul>
        </div>
      )}

      
      {pokemons.attacks && (
        <div>
          <h4>Attacks:</h4>
          <ul>
            {pokemons.attacks.map((attack, index) => (
              <li key={index}>
                <strong>Name:</strong> {attack.name}
                <br />
                <strong>Cost:</strong> {attack.cost.join(", ")}
                <br />
                <strong>Converted Energy Cost:</strong>{" "}
                {attack.convertedEnergyCost}
                <br />
                <strong>Damage:</strong> {attack.damage}
                <br />
                <strong>Text:</strong> {attack.text}
                <br />
              </li>
            ))}
          </ul>
        </div>
      )}

      {pokemons.weaknesses && (
        <div>
          <h4>Weaknesses:</h4>
          <ul>
            {pokemons.weaknesses.map((weakness, index) => (
              <li key={index}>
                <strong>Type:</strong> {weakness.type}
                <br />
                <strong>Value:</strong> {weakness.value}
                <br />
              </li>
            ))}
          </ul>
        </div>
      )}

      {pokemons.resistances && (
        <div>
          <h4>Resistences:</h4>
          <ul>
            {pokemons.resistances.map((resistance, index) => (
              <li key={index}>
                <strong>Type:</strong> {resistance.type}
                <br />
                <strong>Value:</strong> {resistance.value}
                <br />
              </li>
            ))}
          </ul>
        </div>
      )}

      
      {pokemons.retreatCost && (
        <p>Retreat Cost: {pokemons.retreatCost.join(", ")}</p>
      )}

    
      {pokemons.set && (
        <div>
          <h4>Set Details:</h4>
          <p>ID: {pokemons.set.id}</p>
          <p>Name: {pokemons.set.name}</p>
          <p>Series: {pokemons.set.series}</p>
          <p>Release Date: {pokemons.set.releaseDate}</p>
          <img src={pokemons.set.images.symbol} alt="Set Symbol" />
          <img src={pokemons.set.images.logo} alt="Set Logo" />
        </div>
      )}
   
      {pokemons.evolvesFrom && <p>Evolves From: {pokemons.evolvesFrom}</p>}
      {pokemons.rarity && <p>Rarity: {pokemons.rarity}</p>}
      {pokemons.flavorText && <p>Flavor Text: {pokemons.flavorText}</p>}

      {pokemons.nationalPokedexNumbers && (
        <div>
          <h4>National Pokedex Numbers:</h4>
          <ul>
            {pokemons.nationalPokedexNumbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>
      )}

      {pokemons.legalities && (
        <div>
          <h4>Legalities:</h4>
          <p>Unlimited: {pokemons.legalities.unlimited}</p>
        </div>
      )}

      
      {pokemons.tcgplayer && (
        <div>
          <h4>TCGPlayer Data:</h4>
          <p>URL: {pokemons.tcgplayer.url}</p>
          <p>Updated At: {pokemons.tcgplayer.updatedAt}</p>
        </div>
      )}

      
      {pokemons.cardmarket && (
        <div>
          <h4>CardMarket Data:</h4>
          <p>URL: {pokemons.cardmarket.url}</p>
          <p>Updated At: {pokemons.cardmarket.updatedAt}</p>
        </div>
      )}
    </div>
  );
};
 export  default PokeData

// import React from "react";
// import { connect } from 'react-redux';


// const PokeData = props => {
//   const { pokemons  } = props;
//   const array = Object.keys(pokemons)
//   console.log(array)

//   return (
//     <div className="pokemons-card">
//       <h2>pokemonlisto</h2>
//       <ol>
//         {Object.keys(pokemons).map((item) => (
//           <li key={item.id}>
//             <strong className="opener">{item.name}</strong>
            

//             <ul> {item.set}</ul>
//           </li>
//         ))}
//       </ol>

//     </div>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     pokemons: state.pokemons,
//     // Assuming you have this in your state
//   };
// };


// export default connect(mapStateToProps)(PokeData);

