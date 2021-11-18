import styled from "styled-components/macro";

export const Button = styled.button(({ theme: { colors } }) => ({
  appearance: "none",
  border: `1px solid ${colors.primary}`,
  backgroundColor: colors.secondary,
  color: colors.primary,
  height: "40px",
  fontWeight: 700,
  padding: "12px 20px",
  cursor: "pointer",

  "&:hover": {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  },

  "&:active": {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2) inset",
  },
}));
