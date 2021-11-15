import styled from "styled-components/macro";
import Card from "components/Card";

export const PokemonCard = styled(Card)({
  minWidth: "200px",
  flexGrow: "1",
  flexBasis: "1px",
  height: "300px",
  color: "red",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
