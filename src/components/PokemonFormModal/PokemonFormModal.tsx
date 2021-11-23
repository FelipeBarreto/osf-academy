import React, { useRef, useState } from "react";
import Input from "components/Input";
import { Button } from "components/ui";

import * as S from "./PokemonFormModal.styles";

type PokemonFormModalProps = {
  open: boolean;
  onClose: () => void;
  onPokemonCreated: (pokemon: Pokemon) => void;
};

const PokemonFormModal: React.FC<PokemonFormModalProps> = ({
  open,
  onClose,
  onPokemonCreated,
}) => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonImage, setPokemonImage] = useState<string>("");

  const handleClose = () => {
    setPokemonName("");
    setPokemonImage("");
    onClose();
  };

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
    onPokemonCreated({
      id: Math.random().toString(36).slice(2),
      name: pokemonName,
      image: pokemonImage,
    });
    handleClose();
  };

  return (
    <S.PokemonFormModal
      open={open}
      onClose={handleClose}
      title="Adicionar Pokémon"
    >
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
      <Button onClick={handleSave}>Salvar</Button>
    </S.PokemonFormModal>
  );
};

export default PokemonFormModal;
