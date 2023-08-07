import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonData, setPokemonData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/pokemon`)
      .then((res) => res.json())
      .then((data) => setPokemonData(data));
  }, []);

  const handleSearch = (e) => {
    setSearch(() => e.target.value);
  };

  function handleAddPokemon(newPokemon) {
    setPokemonData([...pokemonData, newPokemon]);
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddNewPokemon={handleAddPokemon} />
      <br />
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <br />
      <PokemonCollection filter={search} pokemonData={pokemonData} />
    </Container>
  );
}

export default PokemonPage;
