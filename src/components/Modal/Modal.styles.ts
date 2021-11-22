import styled from "styled-components/macro";

export const Modal = styled.div({
  backgroundColor: "#fff",
  minWidth: "400px",
  minHeight: "200px",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "12px",
});

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
  color: theme.colors.primary,
  borderBottom: `1px solid ${theme.colors.primary}`,
  marginBottom: "12px",
  paddingBottom: "4px",
}));
