import React, { useContext, useState } from "react";
import { Pokemon } from "types/Pokemon";

type PokemonContextType = {
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
};

const Context = React.createContext<PokemonContextType>(
  {} as PokemonContextType
);

const PokemonContext: React.FC = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  return (
    <Context.Provider value={{ pokemons, setPokemons }}>
      {children}
    </Context.Provider>
  );
};

export default PokemonContext;

export const usePokemonContext = () => {
  return useContext(Context);
};
