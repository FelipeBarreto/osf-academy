import Header from "components/Header";
import { ResponsiveContainer } from "components/ui";
import PokemonContext from "contexts/PokemonContext";
import Home from "pages/Home";
import PokemonDetails from "pages/PokemonDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import breakpoints from "styles/breakpoints";
import { colors } from "styles/colors";

const App = () => (
  <ThemeProvider theme={{ breakpoints, colors }}>
    <Header />
    <main>
      <ResponsiveContainer>
        <PokemonContext>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="pokemon/:id" element={<PokemonDetails />} />
            </Routes>
          </BrowserRouter>
        </PokemonContext>
      </ResponsiveContainer>
    </main>
  </ThemeProvider>
);

export default App;
