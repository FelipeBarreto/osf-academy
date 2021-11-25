import { Pokemon } from "types/Pokemon";
import * as S from "./PokemonCard.styles";

type PokemonCardProps = {
  pokemon: Pokemon;
  removePokemon: () => void;
  onClick: () => void;
};

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  removePokemon,
  onClick,
}) => {
  return (
    <S.PokemonCard onClick={onClick}>
      <S.Title>
        {pokemon.name} <span onClick={removePokemon}>x</span>
      </S.Title>
      <S.PokemonImage src={pokemon.image} alt={pokemon.name} />
    </S.PokemonCard>
  );
};

export default PokemonCard;
