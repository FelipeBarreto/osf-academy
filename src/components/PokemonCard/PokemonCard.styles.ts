import styled from "styled-components/macro";
import { Card } from "components/ui";

export const PokemonCard = styled(Card)({
  minWidth: "250px",
  flexGrow: "1",
  flexBasis: "1px",
  height: "250px",
  color: "red",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 0 20px",
  cursor: "pointer",

  "&:hover": {
    img: {
      transform: "scale(1.05)",
      transition: "transform ease-out 200ms",
    },
  },
});

export const Title = styled.h2(({ theme }) => ({
  color: theme.colors.secondary,
  backgroundColor: theme.colors.gray,
  width: "100%",
  textAlign: "center",
  padding: "12px",
  lineHeight: "1",
  position: "relative",

  span: {
    cursor: "pointer",
    right: "20px",
    top: "10px",
    position: "absolute",
  },
}));

export const PokemonImage = styled.img({
  height: "150px",
  width: "250px",
  objectFit: "contain",
});
