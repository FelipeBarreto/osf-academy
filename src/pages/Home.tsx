import Modal from "components/Modal";
import PokemonCard from "components/PokemonCard";
import { Button, FlexContainer } from "components/ui";
import useEmptyCells from "hooks/useEmptyCells";
import { useState } from "react";

const Home = () => {
  const [pokemons, setPokemons] = useState([
    "Pokemon1",
    "Pokemon2",
    "Pokemon3",
    "Pokemon4",
  ]);

  const [openPokemonModal, setOpenPokemonModal] = useState(false);

  const emptyCells = useEmptyCells({
    dataLength: pokemons.length,
    cellMinWidth: 250,
    cellPadding: 12,
    gap: 40,
    containerId: "pokemon-grid",
  });

  return (
    <>
      <FlexContainer justifyContent="flex-end" marginBottom="20px">
        <Button onClick={() => setOpenPokemonModal(true)}>Adicionar</Button>
      </FlexContainer>
      {pokemons.length === 0 && <p>Você ainda não possui pokemons.</p>}
      <FlexContainer gap="40px" id="pokemon-grid">
        {pokemons.map((pokemon, i) => (
          <PokemonCard key={i}>{pokemon}</PokemonCard>
        ))}
        {emptyCells}
      </FlexContainer>
      <Modal open={openPokemonModal} />
    </>
  );
};

export default Home;
