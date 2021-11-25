import React, { useRef, useState } from "react";
import Input from "components/Input";
import { Button } from "components/ui";
import { Pokemon } from "types/Pokemon";
import TextArea from "components/TextArea";

import * as S from "./PokemonDetailsForm.styles";

type PokemonDetailsFormProps = {
  pokemon: Pokemon;
  savePokemon: (pokemon: Pokemon) => void;
};

const PokemonDetailsForm: React.FC<PokemonDetailsFormProps> = ({
  pokemon,
  savePokemon,
}) => {
  const [pokemonName, setPokemonName] = useState<string>(pokemon.name);
  const [pokemonImage, setPokemonImage] = useState<string>(pokemon.image);
  const [pokemonDescription, setPokemonDescription] = useState<string>(
    pokemon.description
  );

  const inputFileRef = useRef<HTMLInputElement>(null);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files === null || e.currentTarget.files.length === 0) {
      return;
    }
    setPokemonImage(URL.createObjectURL(e.currentTarget.files[0]));
  };

  const handleImageChoose = () => {
    inputFileRef.current?.click();
  };

  const handleSave = () => {
    savePokemon({
      id: pokemon.id,
      name: pokemonName,
      image: pokemonImage,
      description: pokemonDescription,
    });
  };

  return (
    <div>
      <Input
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        label="Nome"
      />
      <input
        ref={inputFileRef}
        type="file"
        onChange={handleImageChange}
        hidden={true}
      />
      <S.PokemonImageContainer
        role="button"
        onClick={handleImageChoose}
        hasImage={!!pokemonImage}
      >
        {pokemonImage && <img src={pokemonImage} alt="Imagem Pokémon" />}
        <div className="overlay">Escolher Imagem</div>
      </S.PokemonImageContainer>
      <TextArea
        label="Descrição"
        value={pokemonDescription}
        onChange={(e) => setPokemonDescription(e.target.value)}
      />
      <Button onClick={handleSave}>Salvar</Button>
    </div>
  );
};

export default PokemonDetailsForm;
