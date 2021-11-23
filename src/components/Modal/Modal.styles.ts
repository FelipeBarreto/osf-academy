import styled from "styled-components/macro";

export const Modal = styled.div(({ theme }) => ({
  backgroundColor: "#fff",
  minWidth: "calc(100% - 24px)",
  minHeight: "200px",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "20px",

  [theme.breakpoints.md]: {
    minWidth: "400px",
  },
}));

export const Backdrop = styled.div({
  width: "100vw",
  height: "100vh",
  position: "absolute",
  top: "0",
  left: "0",
  backgroundColor: "rgba(73, 73, 73, 0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const ModalTitle = styled.h2(({ theme }) => ({
  display: "block",
  width: "100%",
  color: theme.colors.gray,
  borderBottom: `1px solid ${theme.colors.gray}`,
  marginBottom: "12px",
  paddingBottom: "4px",
  paddingRight: "20px",
  position: "relative",

  span: {
    position: "absolute",
    right: "5px",
    top: "-5px",
    cursor: "pointer",
  },
}));
