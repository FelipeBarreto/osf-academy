import Header from "components/Header";
import { ResponsiveContainer } from "components/ui";
import Home from "pages/Home";
import { ThemeProvider } from "styled-components";
import breakpoints from "styles/breakpoints";
import { colors } from "styles/colors";

const App = () => (
  <ThemeProvider theme={{ breakpoints, colors }}>
    <Header />
    <main>
      <ResponsiveContainer>
        <Home />
      </ResponsiveContainer>
    </main>
  </ThemeProvider>
);

export default App;
