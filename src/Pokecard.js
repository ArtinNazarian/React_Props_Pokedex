import React from "react";
import "./Pokecard.css";

const API_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const Pokecard = (props) => {
  let imgSrc = `${API_URL}${props.id}.png`;

  return (
    <div className="Pokecard">
      <h4 className="Pokecard-name">{props.name}</h4>
      <img className="Pokecard-img" src={imgSrc} alt="" />
      <p className="Pokecard-data">Type: {props.type}</p>
      <p className="Pokecard-data">EXP: {props.exp}</p>
    </div>
  );
};

export default Pokecard;
