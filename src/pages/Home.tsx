import PokemonCard from "components/PokemonCard";
import { useEffect, useState } from "react";
import { EmptySlot, FlexContainer } from "styles/global";

const pokemons = Array.from(Array(11)).fill("PokemonCard");

const calcEmptyCard = (dataCount: number, container: HTMLElement | null) => {
  const containerWidth = container?.getBoundingClientRect().width || 0;
  const getGapCount = (currentCount: number): number => {
    if (containerWidth > (currentCount + 1) * 40 + (currentCount + 2) * 224) {
      return getGapCount(currentCount + 1);
    }
    return currentCount;
  };

  const gapCount = getGapCount(0);
  const maxElementsPerRow = gapCount + 1;

  if (dataCount % maxElementsPerRow === 0) {
    return 0;
  }
  return maxElementsPerRow - (dataCount % maxElementsPerRow);
};

const Home = () => {
  const [emptyCardCount, setEmptyCardCount] = useState(0);

  useEffect(() => {
    setEmptyCardCount(
      calcEmptyCard(pokemons.length, document.getElementById("pokemon-grid"))
    );
    const resizeListener = () =>
      setEmptyCardCount(
        calcEmptyCard(pokemons.length, document.getElementById("pokemon-grid"))
      );
    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  return (
    <FlexContainer gap="40px" id="pokemon-grid">
      {pokemons.map((pokemon, i) => (
        <PokemonCard key={i}>{pokemon}</PokemonCard>
      ))}
      {Array.from(Array(emptyCardCount)).map((_, index) => (
        <EmptySlot key={index} padding="12px" />
      ))}
    </FlexContainer>
  );
};

export default Home;
