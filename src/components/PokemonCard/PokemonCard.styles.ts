import styled from "styled-components/macro";
import { Card } from "components/ui";

export const PokemonCard = styled(Card)({
  minWidth: "250px",
  flexGrow: "1",
  flexBasis: "1px",
  height: "250px",
  color: "red",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
