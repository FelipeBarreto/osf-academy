import React, { useRef } from "react";
import * as S from "./PokemonFormModal.styles";

type PokemonFormModalProps = {
  open: boolean;
};

const PokemonFormModal: React.FC<PokemonFormModalProps> = ({ open }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.files);
  };

  const handleImageChoose = () => {
    inputFileRef.current?.click();
  };

  return (
    <S.PokemonFormModal open={open} title="Adicionar Pokémon">
      <input
        ref={inputFileRef}
        type="file"
        onChange={handleImageChange}
        hidden={true}
      />
      <button onClick={handleImageChoose}>Botão enfeitado</button>
    </S.PokemonFormModal>
  );
};

export default PokemonFormModal;
