import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddNewPokemon }) {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  });

  const { name, hp, frontUrl, backUrl } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddNewPokemon = (e) => {
    e.preventDefault();

    const newPokemon = {
      name: name,
      hp: hp,
      sprites: {
        front: frontUrl,
        back: backUrl,
      },
    };

    fetch(`http://localhost:3001/pokemon`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newPokemon),
    })
      .then((res) => res.json())
      .then((data) => onAddNewPokemon(data));
  };

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleAddNewPokemon}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={hp}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
