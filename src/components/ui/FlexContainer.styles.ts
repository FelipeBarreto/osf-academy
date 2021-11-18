import styled from "styled-components/macro";

export const FlexContainer = styled.div<{
  gap?: string;
  justifyContent?: string;
  marginBottom?: string;
}>(({ gap, justifyContent, marginBottom }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap,
  justifyContent,
  marginBottom,
}));
