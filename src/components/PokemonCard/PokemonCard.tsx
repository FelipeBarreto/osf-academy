import * as S from "./PokemonCard.styles";

type PokemonCardProps = {
  pokemon: Pokemon;
  removePokemon: () => void;
};

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  removePokemon,
}) => {
  return (
    <S.PokemonCard>
      <S.Title>
        {pokemon.name} <span onClick={removePokemon}>x</span>
      </S.Title>
      <S.PokemonImage src={pokemon.image} alt={pokemon.name} />
    </S.PokemonCard>
  );
};

export default PokemonCard;
