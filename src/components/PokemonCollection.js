import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ filter, pokemonData }) {
  const renderedPokemon = pokemonData.map((p) => {
    if (p.name.includes(filter)) return <PokemonCard key={p.id} pokemon={p} />;
  });

  return <Card.Group itemsPerRow={6}>{renderedPokemon}</Card.Group>;
}

export default PokemonCollection;
