import PokemonDetailsForm from "components/PokemonDetailsForm";
import { Button } from "components/ui";
import { usePokemonContext } from "contexts/PokemonContext";
import { useNavigate, useParams } from "react-router";
import { Pokemon } from "types/Pokemon";

const PokemonDetails: React.FC = () => {
  const { pokemons, setPokemons } = usePokemonContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const pokemon = pokemons.find((p) => p.id === id);

  const handleSave = (updatedPokemon: Pokemon) => {
    setPokemons(
      pokemons.map((poke) => {
        if (poke.id === updatedPokemon.id) {
          return updatedPokemon;
        }
        return poke;
      })
    );
    navigate("/");
  };

  if (!pokemon) {
    return (
      <>
        <p>ID inválido</p>
        <Button onClick={() => navigate("/")}>Voltar</Button>
      </>
    );
  }

  return (
    <>
      <PokemonDetailsForm pokemon={pokemon} savePokemon={handleSave} />
      <br />
      <br />
      <Button onClick={() => navigate("/")}>Voltar</Button>
    </>
  );
};

export default PokemonDetails;
