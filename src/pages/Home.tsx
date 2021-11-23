import PokemonCard from "components/PokemonCard";
import PokemonFormModal from "components/PokemonFormModal";
import { Button, FlexContainer } from "components/ui";
import useEmptyCells from "hooks/useEmptyCells";
import { useState } from "react";

const Home = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const [openPokemonModal, setOpenPokemonModal] = useState(false);

  const emptyCells = useEmptyCells({
    dataLength: pokemons.length,
    cellMinWidth: 250,
    cellPadding: 0,
    gap: 40,
    containerId: "pokemon-grid",
  });

  const removePokemon = ({ id }: Pokemon) =>
    setPokemons(pokemons.filter((pok) => pok.id !== id));

  return (
    <>
      <FlexContainer justifyContent="flex-end" marginBottom="20px">
        <Button onClick={() => setOpenPokemonModal(true)}>Adicionar</Button>
      </FlexContainer>
      {pokemons.length === 0 && <p>Você ainda não possui pokemons.</p>}
      <FlexContainer gap="40px" id="pokemon-grid">
        {pokemons.map((pokemon, i) => (
          <PokemonCard
            key={i}
            pokemon={pokemon}
            removePokemon={() => removePokemon(pokemon)}
          />
        ))}
        {emptyCells}
      </FlexContainer>
      <PokemonFormModal
        open={openPokemonModal}
        onClose={() => setOpenPokemonModal(false)}
        onPokemonCreated={(pokemon) =>
          setPokemons((prev) => [...prev, pokemon])
        }
      />
    </>
  );
};

export default Home;
