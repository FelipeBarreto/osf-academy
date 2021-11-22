import styled from "styled-components/macro";

export const Label = styled.label({
  marginBottom: "8px",
});

export const Input = styled.input(({ theme }) => ({
  height: "40px",
  borderRadius: "5px",
  border: `1px solid ${theme.colors.gray}`,
  marginBottom: "12px",
  width: "100%",
  outline: "0",
  padding: "8px",

  "&:active, &:focus": {
    border: `1px solid ${theme.colors.primary}`,
  },
}));
