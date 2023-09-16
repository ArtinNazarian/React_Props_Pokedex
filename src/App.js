import React from "react";
import pokemon from "./Pokegame";
import Pokedex from "./Pokedex";

function App() {
  return (
    <div className="App">
      <Pokedex cards={pokemon} />
    </div>
  );
}

export default App;
