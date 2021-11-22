import React, { useRef, useState } from "react";
import Input from "components/Input";
import * as S from "./PokemonFormModal.styles";
import { Button } from "components/ui";

type PokemonFormModalProps = {
  open: boolean;
};

const PokemonFormModal: React.FC<PokemonFormModalProps> = ({ open }) => {
  const [pokemonImage, setPokemonImage] = useState<string>("");

  const inputFileRef = useRef<HTMLInputElement>(null);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.files);
    if (e.currentTarget.files === null || e.currentTarget.files.length === 0) {
      return;
    }
    const pokemonImage = e.currentTarget.files[0];
    setPokemonImage(URL.createObjectURL(pokemonImage));
  };

  const handleImageChoose = () => {
    inputFileRef.current?.click();
  };

  return (
    <S.PokemonFormModal open={open} title="Adicionar Pokémon">
      <Input label="Nome" />
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
        {pokemonImage && (
          <img
            src={pokemonImage}
            alt="Imagem Pokémon"
            width="380"
            height="180"
          />
        )}
        <div className="overlay">Escolher Imagem</div>
      </S.PokemonImageContainer>
      <Button>Salvar</Button>
    </S.PokemonFormModal>
  );
};

export default PokemonFormModal;
