import Modal from "components/Modal";
import styled from "styled-components/macro";

export const PokemonFormModal = styled(Modal)({
  button: {
    marginLeft: "auto",
  },
});

export const PokemonImageContainer = styled.div<{ hasImage: boolean }>(
  ({ theme, hasImage }) => ({
    margin: "12px 0",
    border: `1px solid ${theme.colors.gray}`,
    width: "400px",
    height: "200px",
    borderRadius: "5px",
    cursor: "pointer",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px",

    img: {},

    ".overlay": {
      color: theme.colors.gray,
      opacity: hasImage ? "0" : "0.5",
      position: "absolute",
    },

    "&:hover": {
      img: {
        opacity: "0.5",
      },

      ".overlay": {
        opacity: "1",
      },
    },
  })
);
